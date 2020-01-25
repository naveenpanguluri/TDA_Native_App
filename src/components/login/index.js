import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Button,
  TextInput,
  Image,
  Text,
  StatusBar,
} from 'react-native';

class Login extends Component {

  render() {
    return (
      <ScrollView style={styles.bgW}>
        <KeyboardAvoidingView behavior="padding" enabled>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

          <View style={styles.container}>
            <View style={[styles.mb20, styles.logoView]}>
              <Image
                style={{width: 180, height: 80}}
                source={require('../../images/logo.png')}
              />
            </View>

            <View style={styles.mb20}>
              <TextInput
                style={{ height: 40, paddingHorizontal: 10, borderColor:'gray', borderWidth: 1 }}
                placeholder="Username"
              />
            </View>
            <View style={styles.mb20}>
              <TextInput
                style={{ height: 40, paddingHorizontal: 10, borderColor:'gray', borderWidth: 1 }}
                placeholder="Password"
              />
            </View>

            <Button
              style={{fontSize: 20, height: 40}}
              title="Login"
              color="#ff751a"
              onPress={() => this.props.navigation.navigate('Home')}
            />

          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 15,
    paddingTop: 150,
  },
  bgW:{
    backgroundColor: '#fff'
  },
  logoView:{
    alignItems: 'center',
    marginBottom: 50
  },
  mb20:{
    marginBottom: 20
  }
});

export default Login;