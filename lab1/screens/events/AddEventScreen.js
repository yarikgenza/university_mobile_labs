import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ValidatedTextInput from '../../components/ValidatedTextInput';

class AddEventScreen extends Component {
   static navigationOptions = {
    title: "New Event"
  };

  state = {
    title: '',
    description: '',
  }

  onFieldChange = (key, value) => this.setState({ [key]: value });

  render() {
    const { title } = this.state;

    return (
      <View>
        <ValidatedTextInput
          label="title"
          name="title"
          value={title}
          onChangeText={(v) => this.onFieldChange('title', v)}
        />
      </View>
    )
  }
}

export default AddEventScreen;
