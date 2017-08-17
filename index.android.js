'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import Navigation from './src/layout/Navigation';

class MyProject extends Component {
  render() {
    return (
        <Navigation/>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
