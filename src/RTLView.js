import _ from 'lodash'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class RTLView extends Component {

  render() {
    let style = StyleSheet.flatten(this.props.style || {})
    let locale = this.props.locale == 'ar' || null
    let flexDirection = _.get(style, 'flexDirection', 'row')
    if (locale && flexDirection == 'row') { flexDirection = 'row-reverse' }
    else if (locale && flexDirection == 'row-reverse') { flexDirection = 'row' }
    style = _.extend(style, { flexDirection: flexDirection })

    return (
      <View
        {...this.props}
        style={style}>
        {this.props.children}
      </View>
    )
  }
}