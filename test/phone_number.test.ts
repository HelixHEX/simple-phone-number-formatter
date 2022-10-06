import { formatPhoneNumber } from '../src';

describe('phone number format', () => {
  it('should return phone number format (edge case 1)', () => {
    expect(formatPhoneNumber('1234567890')).toEqual('(123) 456-7890');
  });

  it('should return phone number format (edge case 2)', () => {
    expect(formatPhoneNumber('123-456-7890')).toEqual('(123) 456-7890');
  })

  it('should return phone number format (edge case 3)', () => {
    expect(formatPhoneNumber('123 456 7890')).toEqual('(123) 456-7890');
  })

  it('should return phone number format (edge case 4)', () => {
    expect(formatPhoneNumber('(123)456-7890')).toEqual('(123) 456-7890');
  })
});