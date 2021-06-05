import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'

import { images, icons, COLORS, SIZES, FONTS } from '../constants';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
    
    const renderItem = ({item}) => (
        <TouchableOpacity
            style={{ marginHorizontal: SIZES.padding }}
            onPress={() =>onPress(item)}
        >
            <Text style={{ color: COLORS.blue, ...FONTS.body2 }}>{item.name}</Text>

            {
                selectedTab.id ===item.id &&
                <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue }}></View>
                </View>
            }
        </TouchableOpacity>
    );

    return(
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={() => navigation.navigate("ItemDetail", {"itemInfo": item })}
        >
            <View style={{ width: SIZES.width / 1.2 }}>
                <Image 
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%', borderRadius: SIZES.radius * 2 }}
                />

                <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}>
                    <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Model</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => item.productId}
            />
        </View>
    )
}

const Home = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Mercedes",
            title: "Mercedes",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.mercedes,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Audi",
            title: 'Audi',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Lamborghini",
            title: 'Lamborghini',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "BMW",
            title: 'BMW',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Cars",
        title: 'Cars',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.mercedes,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

    // Render

    function renderTitle(title) {
        return(
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.gray, ...FONTS.largeTitle }}>Collection of</Text>
                <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        )
    }

    function renderPromotionCard() {
        
        return (
            <View
                style={[styles.shadow,{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 100,
                    borderRadius: 20,
                }]}
            >

                {/* Wordings section */}
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                        About us
                    </Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, 
                        in rutrum dui auctor sed.
                    </Text>
                </View>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>

            {renderTitle(selectedTab.title)}


            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />

            <View style={{ flex: 1 }}>
                <ScrollableCard 
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>

            {/* Footer - Promo Card */}
            <View style={{ height: "25%", justifyContent: 'flex-end' }}>
                {renderPromotionCard()}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.black,
    },
})

export default Home;