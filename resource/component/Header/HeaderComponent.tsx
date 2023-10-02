import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import style from '../Header/HeaderStyleSheet';
import SvgProfile from '../../Assets/svg/profile';
import SvgVideoCam from '../../Assets/svg/videocam';


type Props = {
  onPress?: () => void;
};

const Header = (props: Props) => {
  const {
    onPress = () => { },
  } = props;

  return (
    <View style={style.baseView}>
      <View style={style.mainRowView}>
        <View style={style.leftRowView}>
          <TouchableOpacity onPress={() => { onPress(); }}>
            <Icons name='arrow-back-ios' size={24} color={"#1C1B1F"} />
          </TouchableOpacity>
          <SvgProfile />
          <View style={style.textHeader}>
            <Text style={style.headerNameStyle}>Anna</Text>
            <Text style={style.lastSeenStyle}>Last seen 12:40 AM</Text>
          </View>
        </View>

        <View style={style.rightRowView}>
          <TouchableOpacity onPress={() => { onPress(); }}>
            <SvgVideoCam />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onPress(); }}>
            <Icons name='call' size={24} color={"#1C1B1F"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onPress(); }}>
            <Icons name='more-vert' size={24} color={"#1C1B1F"} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Header;
