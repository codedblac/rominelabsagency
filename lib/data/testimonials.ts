export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

/**
 * Testimonials are intentionally EMPTY.
 * Only add entries here when a real, attributed client testimonial is provided.
 * The UI renders a tasteful placeholder state until this array is populated.
 */
export const testimonials: Testimonial[] = []
