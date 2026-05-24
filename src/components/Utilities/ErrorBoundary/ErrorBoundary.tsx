import React, { Component, ReactNode } from 'react'
import {
  BoundryCard,
  CenteredLayout,
  ErrorMessage
} from './ErrorBoundary.style'
import { H2 } from '../Typography/Typography'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    window.console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    const { fallback } = this.props

    if (this.state.hasError) {
      return (
        fallback || (
          <CenteredLayout>
            <BoundryCard>
              <H2>Something went wrong.</H2>
              <ErrorMessage>{this.state.error?.message}</ErrorMessage>
            </BoundryCard>
          </CenteredLayout>
        )
      )
    }

    return this.props.children
  }
}
