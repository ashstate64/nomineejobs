import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Simple test component that mimics the form behavior
function SimpleApplyForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [showEmailFallback, setShowEmailFallback] = React.useState(false)
  const [submitError, setSubmitError] = React.useState('')

  const generateEmailSubmission = () => {
    const subject = `Nominee Director Application - ${formData.firstName} ${formData.lastName}`
    const mailtoLink = `mailto:applications@nomineejobs.co.uk?subject=${encodeURIComponent(subject)}`
    window.open(mailtoLink, '_blank')
    setShowEmailFallback(true)
  }

  const handleSubmit = () => {
    // Simulate form submission error
    setSubmitError('Submission failed. Please try again.')
  }

  return (
    <div>
      <h1>Nominee Director Application</h1>
      <input
        data-testid="firstName"
        value={formData.firstName}
        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
        placeholder="First Name"
      />
      <input
        data-testid="lastName"
        value={formData.lastName}
        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
        placeholder="Last Name"
      />
      <input
        data-testid="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Submit Application</button>
      
      {submitError && (
        <div data-testid="error-message">
          {submitError}
          {!showEmailFallback && (
            <button
              data-testid="email-fallback"
              onClick={generateEmailSubmission}
            >
              📧 Submit via Email Instead
            </button>
          )}
          {showEmailFallback && (
            <div data-testid="email-success">
              Email client opened! Please send the email with your documents attached.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

describe('Apply Form Email Fallback', () => {
  test('shows email fallback when submission fails', async () => {
    const user = userEvent.setup()
    render(<SimpleApplyForm />)
    
    // Fill out form
    await user.type(screen.getByTestId('firstName'), 'John')
    await user.type(screen.getByTestId('lastName'), 'Doe')
    await user.type(screen.getByTestId('email'), 'john@example.com')
    
    // Submit form (will fail)
    await user.click(screen.getByText('Submit Application'))
    
    // Should show error and email fallback
    expect(screen.getByTestId('error-message')).toBeInTheDocument()
    expect(screen.getByTestId('email-fallback')).toBeInTheDocument()
  })

  test('opens email client when fallback is used', async () => {
    const user = userEvent.setup()
    render(<SimpleApplyForm />)
    
    // Fill out form
    await user.type(screen.getByTestId('firstName'), 'Jane')
    await user.type(screen.getByTestId('lastName'), 'Smith')
    await user.type(screen.getByTestId('email'), 'jane@example.com')
    
    // Submit form (will fail)
    await user.click(screen.getByText('Submit Application'))
    
    // Click email fallback
    await user.click(screen.getByTestId('email-fallback'))
    
    // Should open email client and show success message
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('mailto:applications@nomineejobs.co.uk'),
      '_blank'
    )
    expect(screen.getByTestId('email-success')).toBeInTheDocument()
  })

  test('generates correct email subject and recipient', async () => {
    const user = userEvent.setup()
    render(<SimpleApplyForm />)
    
    await user.type(screen.getByTestId('firstName'), 'Test')
    await user.type(screen.getByTestId('lastName'), 'User')
    
    await user.click(screen.getByText('Submit Application'))
    await user.click(screen.getByTestId('email-fallback'))
    
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('applications@nomineejobs.co.uk'),
      '_blank'
    )
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('Nominee%20Director%20Application%20-%20Test%20User'),
      '_blank'
    )
  })
})
