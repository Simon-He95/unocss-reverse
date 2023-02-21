import { describe, it, expect } from 'vitest'
import { generator } from '../src/generator'
describe("position", () => {
  it('position:absolute', () => {
    expect(generator("position:absolute")).toBe("pos-absolute")
  })

})