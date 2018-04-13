import * as React from 'react'

export default class Stage extends React.Component<{
  id?: string
}> {
  render() {
    const { id } = this.props

    return <div id={id}>Here will be a dragons.</div>
  }
}
