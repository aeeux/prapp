import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Touchable,
    ScrollView
} from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants';

const ItemDetail = ({ route, navigation }) => {

    // Render

    function renderInfo() {
        let { itemInfo } = route.params;

        if(itemInfo) {

            return (
                
                <ImageBackground
                    source={itemInfo.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '70%' }}
                >
                    <ScrollView style={{ top: '70%', height: 100, }}>
                        <View
                            style={{
                                marginHorizontal: SIZES.padding,
                            }}
                        >
                            <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h1 }}>{itemInfo.productName}</Text>
                        </View>
                        <View
                            style={{
                                marginHorizontal: SIZES.padding,
                            }}
                        >
                        <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h3 }}>{itemInfo.productDescription}</Text>
                        </View>
                    </ScrollView>
                </ImageBackground>
            )
        } else {
            <View>

            </View>
        }
    }

    function renderFooter() {
        return (

        <View
            style={{
                position: 'absolute',
                bottom: '5%',
                left: '25%',
                right: '25%',
                flexDirection: 'row',
                height: 50,
                backgroundColor: COLORS.gray,
                borderRadius: 35
            }}
        >
            <View style={{ flex: 2, alignitems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.home}
                        style={{
                            tintColor: COLORS.dark,
                            width: 25,
                            height: 25,
                            left: '30%',
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignitems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => console.log("Profile-on clicked")}
                >
                    <Image 
                        source={icons.phone}
                        style={{
                            tintColor: COLORS.dark,
                            width: 25,
                            height: 25,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
        )
    }

    return(
        <View style={styles.container}>
            {renderInfo()}
            {renderFooter()}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.black,
    },
    shadow: {
        shadowColor: COLORS.white,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default ItemDetail;