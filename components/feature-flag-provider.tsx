"use client"

import { createContext, useContext, type ReactNode } from "react"
import { type FeatureFlags, getFeatureFlags } from "@/lib/feature-flags"

const FeatureFlagContext = createContext<FeatureFlags | null>(null)

interface FeatureFlagProviderProps {
  children: ReactNode
  initialFlags?: Partial<FeatureFlags>
}

export function FeatureFlagProvider({ children, initialFlags }: FeatureFlagProviderProps) {
  const flags = { ...getFeatureFlags(), ...initialFlags }

  return <FeatureFlagContext.Provider value={flags}>{children}</FeatureFlagContext.Provider>
}

export function useFeatureFlag(flag: keyof FeatureFlags): boolean {
  const context = useContext(FeatureFlagContext)
  if (!context) {
    // Fallback to direct function call if provider is not available
    return getFeatureFlags()[flag]
  }
  return context[flag]
}

export function useFeatureFlags(): FeatureFlags {
  const context = useContext(FeatureFlagContext)
  if (!context) {
    // Fallback to direct function call if provider is not available
    return getFeatureFlags()
  }
  return context
}
