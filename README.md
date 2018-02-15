# react-native-rtl-layout [![Build Status](https://travis-ci.org/rensamatar/react-native-rtl-layout.svg?branch=master)](https://travis-ci.org/rensamatar/react-native-rtl-layout)

This component make you easy to handle the RTL layout with View component that have flexDirection `row`

## Installation
```npm install react-native-rtl-layout``` or ```yarn add react-native-rtl-layout```


## How to use
```js
import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

...

// Import { RTLView, RTLText } from react-native-rtl-layout
import { RTLView, RTLText } from 'react-native-rtl-layout'

export default class Sample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locale: 'en',
    }
  }

  toggleLocale = () => {
    this.setState({
      locale: (this.state.locale == 'ar' ? 'en' : 'ar')
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <RTLView locale={this.state.locale}>
          <Text>Lorem ipsum dollar amet</Text>
        </RTLView>
        <RTLView locale={this.state.locale}>
          <RTLText locale={this.state.locale} fontSize={20}>This is RTL text component</RTLText>
        </RTLView>
          <Button style={{ margin: 20}} onPress={this.toggleLocale} title={'Toggle locale'} />
      </View>
    )
  }
}

```

### Props

```locale``` - The locale type of device to handle (en, ar)

```fontSize``` - Custom font-size for Arabic text `RTLText`.

## Contributing
This is pretty basic at the moment, but if you have new features, requests, or would like to contribute feel free to open a PR and ping me!