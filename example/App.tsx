import * as React from 'react'
import { Stage } from '..'

export default class App extends React.Component {
  render() {
    return (
      <div data-testid="foo">
        <Stage id="foo" />
      </div>
    )
  }
}
