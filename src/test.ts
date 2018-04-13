import { Stage } from '.'
import { default as StageOrig } from './Stage'

test('entries reexported correctly', () => {
  expect(Stage).toEqual(StageOrig)
})
