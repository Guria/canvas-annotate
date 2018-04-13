import * as React from 'react'
import { render } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import Stage from '.'

test('renders correctly', () => {
  const { getByText } = render(<Stage />)
  expect(getByText('dragons')).toBeInTheDOM()
  expect(getByText('dragons')).not.toHaveAttribute('id')
})

test('supports id attribute', () => {
  const { getByText } = render(<Stage id="foobar" />)
  expect(getByText('dragons')).toHaveAttribute('id', 'foobar')
})
