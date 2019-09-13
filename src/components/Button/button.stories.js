import React from 'react';
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button', module)
  .add('default', () => (
    <Button onPress={action('default button pressed')}><Text>Default Button</Text></Button>
  ))