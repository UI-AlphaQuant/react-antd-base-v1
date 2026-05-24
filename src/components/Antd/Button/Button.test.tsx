import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '@/test/testUtils'
import { Button } from './Button'

describe('Button', () => {
  // Helper Function
  const setup = (props = {}) => {
    const user = userEvent.setup()
    render(<Button data-testid="btn" {...props} />)
    return { user }
  }

  // Individual Test Cases inside Assertions Section
  it('renders children correctly', () => {
    setup({ children: 'Click Me' })
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    const { user } = setup({ onClick: handleClick, children: 'Click' })

    await user.click(screen.getByTestId('btn'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not fire click when disabled', async () => {
    const handleClick = jest.fn()
    const { user } = setup({ onClick: handleClick, disabled: true })

    await user.click(screen.getByTestId('btn'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    setup({ className: 'my-class' })
    expect(screen.getByTestId('btn')).toHaveClass('my-class')
  })

  it('supports htmlType prop', () => {
    setup({ htmlType: 'submit' })
    expect(screen.getByTestId('btn')).toHaveAttribute('type', 'submit')
  })

  it('is keyboard accessible', async () => {
    const handleClick = jest.fn()
    const { user } = setup({ onClick: handleClick })

    const button = screen.getByTestId('btn')

    button.focus()
    expect(button).toHaveFocus()

    await user.keyboard('{Enter}')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
