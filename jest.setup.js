import '@testing-library/jest-dom'

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Mock window.open
Object.defineProperty(window, 'open', {
  value: jest.fn(),
  writable: true,
})

// Mock location using jest.spyOn instead of Object.defineProperty
delete window.location
window.location = {
  href: 'http://localhost:3000',
  origin: 'http://localhost:3000',
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
}