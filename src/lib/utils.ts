/**
 * Utility functions for the application.
 */

/**
 * Joins class names, filtering out falsy values.
 * Compatible with Tailwind CSS class merging patterns.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formats a number as a currency string.
 */
export function formatCurrency(
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Formats a number as a percentage string.
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`
}

/**
 * Formats a large number with abbreviations (K, M, B, T).
 */
export function formatCompactNumber(value: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value)
}

/**
 * Safely accesses deeply nested object properties.
 */
export function getNestedValue<T>(
  obj: Record<string, unknown>,
  path: string,
  fallback?: T
): T | undefined {
  const result = path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)

  return (result as T) ?? fallback
}
