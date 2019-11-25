import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Avatar } from "react-native-paper";

import Firebase from "../makers/firebase";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import config from "../config";

import Button from "../components/Button";
import ValidatedTextInput from "../components/ValidatedTextInput";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    image: null,
    displayName: "",
    email: ""
  };

  componentDidMount() {
    const { displayName, email } = Firebase.auth().currentUser;

    this.setState({
      displayName,
      email
    });
  }

  onAvatarPress = async () => {
    await this.getPermissionAsync();
    await this._pickImage();
  };

  onSavePress = async () => {
    const { image, displayName } = this.state;
    const user = Firebase.auth().currentUser;

    const payload = { displayName };

    if (image) {
      await this._uploadImage(image);
      const imgUrl = await Firebase.storage()
        .refFromURL(`${config.firebase.storageBucket}/avatar`)
        .getDownloadURL();
      payload.photoURL = imgUrl;
    }

    await user.updateProfile(payload);
    alert("Profile has been updated");
  };

  onEmailChange = email => this.setState({ email });
  onNameChange = displayName => this.setState({ displayName });

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, camera roll permission is required");
      }
    }
  };

  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _uploadImage = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = Firebase.storage()
      .ref()
      .child("avatar");
    return ref.put(blob);
  };

  render() {
    const { image, displayName, email } = this.state;
    const user = Firebase.auth().currentUser;

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={this.onAvatarPress}>
            {image || user.photoURL ? (
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{ uri: image || user.photoURL }}
              />
            ) : (
              <Avatar.Text size={100} label="+" />
            )}
          </TouchableOpacity>
        </View>

        <ValidatedTextInput
          label="Email"
          name="email"
          value={email}
          onChangeText={this.onEmailChange}
        />

        <ValidatedTextInput
          label="Name"
          name="name"
          value={displayName}
          onChangeText={this.onNameChange}
        />

        <Button title="Save" onPress={this.onSavePress} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10
  },
  avatarContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default ProfileScreen;
