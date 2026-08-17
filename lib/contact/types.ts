/** What the contact form submits and the API route receives. */
export type ContactEnquiry = {
  name: string
  email: string
  message: string
  organization?: string
  phone?: string
  enquiryType?: string
}
