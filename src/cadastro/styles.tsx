import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LinearGradientCad: {
        width: width,
        height: height,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerIconCad: {
        alignItems: 'center',
        justifyContent: 'center',
        top: -45
    },
    containerUserCad: {
        alignItems: 'center',
        justifyContent: 'center',
        top: -37
    },
    titleCad: {
        color: '#000',
        fontSize: 23,
        fontWeight: 'bold'
    },
    subTitleCad: {
        color: '#b0b0b0',
        fontSize: 18
    },
    containerTipUserCad: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerUserIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    linearUserCad: {
        margin: 5,
        borderRadius: 500,
        height: 165,
        width: 165,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'baseline'
    },
    containerFooterCad: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: 122
    },
    containerTextFooterCad: {
        top: -35,
        flexDirection: 'row'
    },
});