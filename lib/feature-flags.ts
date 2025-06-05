// Feature flag configuration
export interface FeatureFlags {
  showPartnerWithUs: boolean
  enableVideoHero: boolean
  enableAdvancedFiltering: boolean
  showNewsletterPopup: boolean
  enableDarkMode: boolean
}

// Default feature flags - can be overridden by environment variables or API
const defaultFlags: FeatureFlags = {
  showPartnerWithUs: true,
  enableVideoHero: true,
  enableAdvancedFiltering: true,
  showNewsletterPopup: false,
  enableDarkMode: false,
}

// Get feature flags from environment variables or API
export function getFeatureFlags(): FeatureFlags {
  // In a real app, this could fetch from an API or database
  return {
    showPartnerWithUs: process.env.NEXT_PUBLIC_FEATURE_PARTNER_WITH_US === "true" || defaultFlags.showPartnerWithUs,
    enableVideoHero: process.env.NEXT_PUBLIC_FEATURE_VIDEO_HERO === "true" || defaultFlags.enableVideoHero,
    enableAdvancedFiltering:
      process.env.NEXT_PUBLIC_FEATURE_ADVANCED_FILTERING === "true" || defaultFlags.enableAdvancedFiltering,
    showNewsletterPopup:
      process.env.NEXT_PUBLIC_FEATURE_NEWSLETTER_POPUP === "true" || defaultFlags.showNewsletterPopup,
    enableDarkMode: process.env.NEXT_PUBLIC_FEATURE_DARK_MODE === "true" || defaultFlags.enableDarkMode,
  }
}

// Hook for using feature flags in components
export function useFeatureFlags(): FeatureFlags {
  return getFeatureFlags()
}

// Check if a specific feature is enabled
export function isFeatureEnabled(feature: keyof FeatureFlags): boolean {
  const flags = getFeatureFlags()
  return flags[feature]
}
