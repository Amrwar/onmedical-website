export type FaqEntry = {
  /** Keys under the `contact` message namespace. */
  questionKey: string
  answerKey: string
}

/**
 * The questions the contact page answers up front, in the order asked.
 * Adding a sixth means adding faq6Q/faq6A to every served locale first —
 * the message-parity tests will insist.
 */
export const faqEntries: FaqEntry[] = [
  { questionKey: 'faq1Q', answerKey: 'faq1A' },
  { questionKey: 'faq2Q', answerKey: 'faq2A' },
  { questionKey: 'faq3Q', answerKey: 'faq3A' },
  { questionKey: 'faq4Q', answerKey: 'faq4A' },
  { questionKey: 'faq5Q', answerKey: 'faq5A' },
]
