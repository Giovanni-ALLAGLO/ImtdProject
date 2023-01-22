import React, { Component } from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View, Alert} from 'react-native'

class ImageContainer extends Component {
    render() {
      return (
        <View style= {styles.container}>
            <TouchableOpacity  onPress={() =>{Alert.alert(
          "Current result",
          "My Alert Msg"
        );}}>
              <Image source={this.props.source} style={this.props.style}  />
            </TouchableOpacity>
            <Text style={styles.text}>{this.props.name}</Text>
        </View>
      );
}};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        alignSelf:'auto',
        marginBottom:10
    }
});

export default ImageContainer;