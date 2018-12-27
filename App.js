import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';

import Nfc from './Nfc';
import App from 'react-native-nfc-manager/example/App';

export default class Navigator extends Component<Props> {
  render() {
    return <Nfc/>;
  }
}

AppRegistry.registerComponent('NfcManagerDev', () => App);
