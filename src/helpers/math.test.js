import { evaluate } from './math'

/* eslint-env jest */
describe('evaluate()', () => {
  describe('add', () => {
    test('should do simple addition', () => {
      expect(evaluate('1 + 1')).toBe(2)
    })
  })

  describe('minus', () => {
    test('should do simple minus', () => {
      expect(evaluate('1 - 1')).toBe(0)
    })

    test('should preserve associativity', () => {
      expect(evaluate('1 - 1 - 1')).toBe(-1)
    })
  })

  describe('multiply', () => {
    test('should do simple multiply', () => {
      expect(evaluate('3 * 3')).toBe(9)
    })

    test('multiply has precedence over add', () => {
      expect(evaluate('3 + 3 * 3')).toBe(12)
    })
  })

  describe('parenthesis', () => {
    test('should resolve addition first', () => {
      expect(evaluate('3 * (1 + 1)')).toBe(6)
    })
  })
})
