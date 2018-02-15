import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import RTLView from '../src/RTLView'
import RTLText from '../src/RTLText'

it('renders correctly', () => {
  const tree = renderer.create(
    <RTLView />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly', () => {
  const tree = renderer.create(
    <RTLText />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})