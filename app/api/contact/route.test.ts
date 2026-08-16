import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * The contact endpoint is the only part of this site that accepts input
 * from the outside world, so it is the only part that can be made to
 * misbehave by a visitor. These cases cover the two things that matter:
 * what it refuses, and what it does with a message it accepts.
 *
 * The mail provider is mocked rather than called. A test that sent real
 * mail would need a network, a key, and somebody's inbox, and would still
 * not tell us whether the handler behaved — only that Resend did.
 */

const send = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

async function post(body: unknown) {
  const { POST } = await import("./route");
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    })
  );
}

async function postRaw(raw: string) {
  const { POST } = await import("./route");
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: raw,
    })
  );
}

const valid = {
  name: "Osama Farouk",
  organization: "Cairo General Hospital",
  email: "osama@example.com",
  phone: "+20 100 000 0000",
  enquiryType: "Equipment",
  message: "We would like a quote for two ultrasound units.",
};

beforeEach(() => {
  send.mockReset();
  send.mockResolvedValue({ id: "email-1" });
});

describe("POST /api/contact", () => {
  it("accepts a complete enquiry", async () => {
    const res = await post(valid);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });
  });

  it("sends exactly one message for one enquiry", async () => {
    await post(valid);
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("refuses an enquiry with no name", async () => {
    const { name, ...rest } = valid;
    void name;
    const res = await post(rest);
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "Missing required fields." });
  });

  it("refuses an enquiry with no email", async () => {
    const { email, ...rest } = valid;
    void email;
    expect((await post(rest)).status).toBe(400);
  });

  it("refuses an enquiry with no message", async () => {
    const { message, ...rest } = valid;
    void message;
    expect((await post(rest)).status).toBe(400);
  });

  it("refuses an empty name rather than sending a blank enquiry", async () => {
    expect((await post({ ...valid, name: "" })).status).toBe(400);
  });

  it("refuses an empty message", async () => {
    expect((await post({ ...valid, message: "" })).status).toBe(400);
  });

  it("sends nothing at all when the enquiry is refused", async () => {
    await post({ name: "Osama" });
    expect(send).not.toHaveBeenCalled();
  });

  it("accepts an enquiry with only the three required fields", async () => {
    const res = await post({
      name: valid.name,
      email: valid.email,
      message: valid.message,
    });
    expect(res.status).toBe(200);
  });

  it("replies to the address the visitor gave", async () => {
    await post(valid);
    expect(send.mock.calls[0][0].replyTo).toBe(valid.email);
  });

  it("names the sender in the subject", async () => {
    await post(valid);
    expect(send.mock.calls[0][0].subject).toContain(valid.name);
  });

  it("names the enquiry type in the subject when one was given", async () => {
    await post(valid);
    expect(send.mock.calls[0][0].subject).toContain("Equipment");
  });

  it("leaves the enquiry type out of the subject when none was given", async () => {
    const { enquiryType, ...rest } = valid;
    void enquiryType;
    await post(rest);
    expect(send.mock.calls[0][0].subject).not.toContain("—");
  });

  it("carries the message through to the body", async () => {
    await post(valid);
    expect(send.mock.calls[0][0].html).toContain(valid.message);
  });

  it("carries the organisation through when one was given", async () => {
    await post(valid);
    expect(send.mock.calls[0][0].html).toContain(valid.organization);
  });

  it("leaves the organisation row out when none was given", async () => {
    const { organization, ...rest } = valid;
    void organization;
    await post(rest);
    expect(send.mock.calls[0][0].html).not.toContain("Organisation");
  });

  it("carries the phone through when one was given", async () => {
    await post(valid);
    expect(send.mock.calls[0][0].html).toContain(valid.phone);
  });

  it("leaves the phone row out when none was given", async () => {
    const { phone, ...rest } = valid;
    void phone;
    await post(rest);
    expect(send.mock.calls[0][0].html).not.toContain("Phone");
  });

  it("sends to the configured address when one is set", async () => {
    vi.stubEnv("CONTACT_TO_EMAIL", "sales@onmedical.net");
    vi.resetModules();
    await post(valid);
    expect(send.mock.calls[0][0].to).toBe("sales@onmedical.net");
  });

  it("answers with a 500 rather than throwing when the provider fails", async () => {
    send.mockRejectedValue(new Error("provider down"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const res = await post(valid);
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to send message." });
  });

  it("answers with a 500 rather than throwing on an unreadable body", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const res = await postRaw("{not json");
    expect(res.status).toBe(500);
  });

  it("does not leak the provider's error to the caller", async () => {
    send.mockRejectedValue(new Error("api key sk-secret-123 is invalid"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const body = await (await post(valid)).json();
    expect(JSON.stringify(body)).not.toContain("sk-secret");
  });
});
