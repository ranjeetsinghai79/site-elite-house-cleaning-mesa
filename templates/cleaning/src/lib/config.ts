import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Elite Maids House Cleaning",
    tagline: "Sparkling Clean, Every Single Time",
    phone: "(480) 933-1692",
    phoneHref: "tel:+14809331692",
    email: "info@elitemaidshousecleaning.com",
    address: "123 Main St",
    city: "Gilbert",
    serviceAreas: ["Gilbert AZ", "Mesa AZ", "Scottsdale AZ", "Chandler AZ", "Phoenix AZ", "Tempe AZ"],
    license: "Licensed & Insured",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ocean",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "House Cleaning", desc: "Regular cleaning to keep your home fresh and tidy.", urgent: false },
    { icon: "sparkles", title: "Deep Cleaning", desc: "Thorough cleaning for a truly spotless and sanitized home.", urgent: false },
    { icon: "briefcase", title: "Apartment Cleaning", desc: "Specialized cleaning services for apartments and condos.", urgent: false },
    { icon: "scissors", title: "Maid Service", desc: "Professional maid services tailored to your specific needs.", urgent: false },
    { icon: "truck", title: "Move In/Out Cleaning", desc: "Comprehensive cleaning for a smooth transition into or out of your home.", urgent: false },
    { icon: "heart", title: "Eco-Friendly Cleaning", desc: "Green cleaning solutions for a healthy home and planet.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Scottsdale, AZ", stars: 5, text: "Elite Maids did an incredible deep clean on my home last month. They got behind the fridge and oven, areas I always neglect! The team was so friendly and professional, and my house has never felt this fresh. Worth every penny!" },
    { name: "Mark T.", location: "Mesa, AZ", stars: 5, text: "I've been using Elite Maids for regular house cleaning for over a year now, and they are consistently excellent. My cleaning team is always the same, which I love, and they know exactly what to do. Booking online is super easy too!" },
    { name: "Jessica R.", location: "Chandler, AZ", stars: 5, text: "We hired Elite Maids for a move-out clean, and they exceeded all expectations. The apartment looked brand new! They paid attention to every detail, even the grout lines in the bathroom. Highly recommend their thorough and reliable service." }
  ],

  trustBadges: [
    "Licensed & Insured", "Background-Checked Pros", "5-Star Rated", "Satisfaction Guaranteed", "Eco-Friendly Options"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Online Booking", desc: "Schedule your cleaning in under 60 seconds, anytime." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "No hidden fees, just clear and upfront costs for all services." },
    { icon: "award", title: "Certified Professionals", desc: "Our team is trained, background-checked, and highly skilled." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We ensure you're delighted with every cleaning, or we make it right." },
    { icon: "home", title: "Consistent Teams", desc: "Enjoy familiar faces and personalized service with your dedicated cleaning crew." },
    { icon: "sparkles", title: "Detailed Checklists", desc: "Every room is cleaned to perfection with our comprehensive checklist." }
  ],

  formServiceOptions: ["House Cleaning", "Deep Cleaning", "Apartment Cleaning", "Maid Service", "Move In/Out Cleaning", "Eco-Friendly Cleaning Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!