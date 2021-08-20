/**
 * @version 0.50
 * @author Vadym
 */

import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import { useTheme } from '@app/theme/ThemeProvider'

const NftTokenInfo = (props) => {

    const {
        colors,
        GRID_SIZE
    } = useTheme()

    const {
        title,
        subTitle,
        containerStyles
    } = props

    return (
        <View style={{ marginBottom: GRID_SIZE, ...containerStyles }}>
            <Text numberOfLines={2} style={[styles.title, { color: colors.common.text1 }]}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

export default NftTokenInfo

const styles = StyleSheet.create({
    subTitle: {
        color: '#999999',
        fontFamily: 'SFUIDisplay-Bold',
        fontSize: 13,
        letterSpacing: 1.75,
        textTransform: 'uppercase'
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 17
    }
})
