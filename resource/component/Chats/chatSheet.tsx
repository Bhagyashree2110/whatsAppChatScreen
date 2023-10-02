import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    item: any;
}

const chatSheet = (props: Props) => {
    const {
        item,
    } = props;
    return (
        <View
            style={[styles.chatSheetMainView, { justifyContent: item.item.user.id === 'user1' ? 'flex-end' : 'flex-start' }]}>
            <View
                style={{
                    backgroundColor: item.item.user.id === 'user1' ? '#DCF8C5' : 'white',
                    padding: 12,
                    marginRight: item.item.user.id === 'user2' ? 70 : 0,
                    marginLeft: item.item.user.id === 'user1' ? 70 : 0,
                    flexDirection: item.item.text.length > 31 ? 'column' : 'row',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: item.item.user.id === 'user2' ? 20 : 0,
                    borderTopLeftRadius: item.item.user.id === 'user1' ? 20 : 0,
                }}
            >
                <Text style={styles.chatTextStyle}>{item.item.text}</Text>
                <Text style={styles.createdText}>{item.item.createdAt}</Text>
            </View>

        </View>
    )
}

export default chatSheet
const styles = StyleSheet.create({
    chatSheetMainView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 6,
        width: '100%',

    },
    createdText: {
        fontSize: 12,
        color: '#9C9B9B',
        alignSelf: 'flex-end',
        paddingLeft: 10,
        position: 'relative'
    },
    chatTextStyle: {
        fontSize: 14,
        color: '#1C1B1F',
        lineHeight: 18
    }
})