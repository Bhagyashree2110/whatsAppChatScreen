import React, { useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { chatData } from '../../Constants/ChatData/index';
import BottomButtonComponent from '../../component/Buttons/BottomButtonComponent';
import ChatSheet from '../../component/Chats/chatSheet';
import Header from '../../component/Header/HeaderComponent';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

const renderMessage = (item: any) => {
    return <ChatSheet item={item} />
}
const ChatScreen = () => {
    const [typing, setTyping] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
            </View>
            <View style={styles.flatListView}>
                <FlatList
                    data={chatData}
                    renderItem={renderMessage}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <BottomButtonComponent
                buttonView={styles.bottomButtonView}
                onPress={(data: React.SetStateAction<string>) => {
                    if (data.length >= 1) {
                        setTyping(true);
                    } else {
                        setTyping(false);
                    }
                }}
                isTyping={typing}
            />
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        width: deviceWidth,
    },
    bottomButtonView: {
        bottom: 20,
        backgroundColor: '#eee',
        width: '100%',
        paddingHorizontal: 10
    },
    createdText: {
        fontSize: 12, color: '#9C9B9B', alignSelf: 'flex-end', paddingLeft: 10, position: 'relative'
    },
    flatListView: {
        flex: 1,
        padding: 20
    }
})