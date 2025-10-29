/**
 * Centralized social media links for the website
 * Update these URLs to change social links across all components
 */

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/STDSNMBL",
  instagram: "https://www.instagram.com/studio_snmbl/",
  linkedin: "https://www.linkedin.com/company/estudio-son%C3%A1mbulo/",
} as const;

// You can also export individual links if needed
export const {
  facebook: FACEBOOK_URL,
  instagram: INSTAGRAM_URL,
  linkedin: LINKEDIN_URL,
} = SOCIAL_LINKS;
