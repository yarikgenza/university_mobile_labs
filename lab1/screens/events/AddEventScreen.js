import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ActivityIndicator, Colors, Snackbar } from "react-native-paper";

import Screens from '../../constants/Screens';
import Button from '../../components/Button';
import ValidatedTextInput from '../../components/ValidatedTextInput';
import { addEvent } from "../../api/events.api";

const imgPlaceholderUrl = 'https://via.placeholder.com/250x200'

class AddEventScreen extends Component {
   static navigationOptions = {
    title: "New Event"
  };

  state = {
    isLoading: false,
    fields: {
      title: '',
      description: '',
      age: '',
      price: '',
    }
  }

  onSubmitPress = async () => {
    const { navigation } = this.props;
    const { fields } = this.state;
    
    fields.imageUrl = imgPlaceholderUrl;

    this.setState({ isLoading: true });

    await addEvent(fields);

    navigation.reset([
      NavigationActions.navigate({ routeName: Screens.HOME })
    ], 0);
  }

  onFieldChange = (key, value) => this.setState(state => ({
    fields: { ...state.fields, [key]: value }
  }));

  render() {
    const {
      isLoading,
      fields: { title, description, age, price }
    } = this.state;

    if (isLoading) {
      return <ActivityIndicator animating color={Colors.red800} size="large" />
    }

    return (
      <>
        <ValidatedTextInput
          label="title"
          name="title"
          value={title}
          onChangeText={(v) => this.onFieldChange('title', v)}
        />

        <ValidatedTextInput
          label="description"
          name="description"
          value={description}
          onChangeText={(v) => this.onFieldChange('description', v)}
        />

        <ValidatedTextInput
          label="age"
          name="age"
          value={age}
          onChangeText={(v) => this.onFieldChange('age', v)}
        />

        <ValidatedTextInput
          label="price"
          name="price"
          value={price}
          onChangeText={(v) => this.onFieldChange('price', v)}
        />

        <Button title="Submit" type="primary" onPress={this.onSubmitPress} />
      </>
    )
  }
}

export default AddEventScreen;
