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
    modified: false,
    image: null
  };

  onAvatarPress = async () => {
    await this.getPermissionAsync();
    await this._pickImage();
  };

  onSavePress = async () => {
    const { image } = this.state;

    const payload = {};

    if (image) {
      await this._uploadImage(image);
      const imgUrl = await Firebase.storage()
        .refFromURL(`${config.firebase.storageBucket}/avatar`)
        .getDownloadURL();
      payload.profileImg = imgUrl;
    }
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, camera roll permission is required");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
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
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={this.onAvatarPress}>
            {image ? (
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{ uri: image }}
              />
            ) : (
              <Avatar.Text size={100} label="+" />
            )}
          </TouchableOpacity>
        </View>

        <ValidatedTextInput
          label="Email"
          name="email"
          value={"gsmeter@gmail.com"}
          onChangeText={this.onEmailChange}
        />

        <ValidatedTextInput
          label="Name"
          name="name"
          value={"Yarik Henza"}
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
