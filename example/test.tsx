import * as React from 'react'
import { render } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import App from './App'

test('renders correctly', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('foo')).toHaveTextContent('Here will be a dragons')
})
