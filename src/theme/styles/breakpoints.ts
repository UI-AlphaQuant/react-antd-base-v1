// Style Media query constants
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

// Media query helpers
export const media = {
  below: (size: keyof typeof breakpoints) =>
    `@media (max-width: ${breakpoints[size] - 0.02}px)`,
  above: (size: keyof typeof breakpoints) =>
    `@media (min-width: ${breakpoints[size]}px)`,
  between: (min: keyof typeof breakpoints, max: keyof typeof breakpoints) =>
    `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max] - 0.02}px)`
}
