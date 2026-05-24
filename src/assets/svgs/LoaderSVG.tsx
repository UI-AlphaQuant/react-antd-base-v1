import { AppTheme } from '@/theme'
import React, { useId } from 'react'
import { useTheme } from 'styled-components'

interface LoaderSVGProps {
  size?: number | string
  color?: string
  className?: string
}

export const LoaderSVG: React.FC<LoaderSVGProps> = ({
  size = '1em',
  color = 'currentColor',
  className
}) => {
  const gradientId = useId()

  const theme = useTheme() as AppTheme
  const svgColor = color || theme.colors['primary-500']

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Loading"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient
          id={gradientId}
          cx=".66"
          cy=".3125"
          fx=".66"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0%" stopColor={svgColor} />
          <stop offset="30%" stopColor={svgColor} stopOpacity="0.9" />
          <stop offset="60%" stopColor={svgColor} stopOpacity="0.6" />
          <stop offset="80%" stopColor={svgColor} stopOpacity="0.3" />
          <stop offset="100%" stopColor={svgColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="20"
        strokeLinecap="round"
        strokeDasharray="200 1000"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 100 100"
          to="0 100 100"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke={svgColor}
        opacity="0.2"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  )
}
