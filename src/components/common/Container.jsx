import React, { Component } from 'react'
import styled from 'styled-components'

const cantainer = styled.div`
    display: inline-block
`

export default class Container extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
