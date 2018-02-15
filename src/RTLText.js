import _ from 'lodash'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class RTLText extends Component {
  render() {
    let style = StyleSheet.flatten(this.props.style || {})
    let locale = this.props.locale == 'ar' || null
    let fontSize = _.get(style, 'fontSize', this.props.fontSize || 18)
    let textAlign = (locale && locale == 'ar' ? 'right' : 'left')
    style = _.extend(style, { fontSize: fontSize })
    return (
      <Text
        {...this.props}
        textAlign={textAlign}
        style={style}>
        {this.props.children}
      </Text>
    )
  }
}