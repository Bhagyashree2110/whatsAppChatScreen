import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CameraICon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
  onPress: any;
  buttonView: any;
  isTyping: boolean;
};

const BottomButtonComponent = (props: Props) => {
  const { onPress = () => { }, buttonView, isTyping = false } = props;

  return (
    <View style={buttonView}>
      <View style={styles.buttonMainRow}>
        <View style={styles.buttonLeftView}>
          <Icon name='mood' color={"#9C9B9B"} size={24} />
          <TextInput style={[styles.textinputStyle, { width: isTyping === true ? '80%' : '60%', marginLeft: isTyping === true ? 9.5 : 0 }]}
            underlineColorAndroid="transparent"
            placeholder="Message..."
            placeholderTextColor="#9C9B9B"
            autoCapitalize="none"
            onChangeText={onPress} />
          <Icon name='attachment' color={"#9C9B9B"} size={24} />
          {isTyping === false ? <CameraICon name='camera-outline' color={"#9C9B9B"} size={24} /> : null}
        </View>
        <View style={styles.buttonRightView}>
          {isTyping === false ? <Icon name='mic' color={"#1C1B1F"} size={24} /> : <Icon name='send' color={"#1C1B1F"} size={24} />}
        </View>
      </View>
    </View>
  );
};

export default BottomButtonComponent;
const styles = StyleSheet.create({
  textinputStyle: {
    padding: 2,
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  buttonMainRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  buttonLeftView: {
    width: 282,
    height: 45,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 50,
    backgroundColor: 'white',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonRightView: {
    width: 45,
    height: 45,
    backgroundColor: '#38D15A',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

