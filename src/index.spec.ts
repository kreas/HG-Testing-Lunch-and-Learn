import { formatPhoneNumber } from './index'

describe('utils', () => {
  it('normalizes a phone number to the prescribed format', () => {
    expect(formatPhoneNumber('555-555-5555')).toBe('555-555-5555')
    expect(formatPhoneNumber('(555)555-5555')).toBe('555-555-5555')
    expect(formatPhoneNumber('555 555 5555')).toBe('555-555-5555')
    expect(formatPhoneNumber('5555555555')).toBe('555-555-5555')
    expect(formatPhoneNumber('555 555-555 5555')).toBe(null)
    expect(formatPhoneNumber('555')).toBe(null)
  })
})
