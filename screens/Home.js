import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView
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

                <View style={{ borderRadius: SIZES.radius, padding: 8, backgroundColor: COLORS.transparentBlack, position: 'absolute', top: -10, left: '5%', right: 'auto' }}>
                    <Text style={{ color: COLORS.lightGray, ...FONTS.h3 }}>Model</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.blue, ...FONTS.h2 }}>{item.productName}</Text>
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
                    productName: 'GLB-Class AMG Styling',
                    price: 10.00,
                    image: images.mercedesGlb,
                    carousel: images.carouselMercedes,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 2,
                    productName: 'GLB2',
                    price: 10.00,
                    image: images.mercedesGlb,
                    carousel: images.carouselMercedes,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus',
                },
                {
                    productId: 3,
                    productName: 'GLB3',
                    price: 10.00,
                    image: images.mercedesGlb,
                    carousel: images.carouselMercedes,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 4,
                    productName: 'GLB4',
                    price: 10.00,
                    image: images.mercedesGlb,
                    carousel: images.carouselMercedes,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
            ]
        },
        {
            id: 1,
            name: "Audi",
            title: 'Audi',
            productList: [
                {
                    productId: 1,
                    productName: 'Q8',
                    price: 10.00,
                    image: images.audiQ8,
                    carousel: images.carouselAudiQ8,
                    carousel: images.carouselLamboUrus,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 2,
                    productName: 'Q8',
                    price: 10.00,
                    image: images.audiQ8,
                    carousel: images.carouselAudiQ8,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 3,
                    productName: 'Q8',
                    price: 10.00,
                    image: images.audiQ8,
                    carousel: images.carouselAudiQ8,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },

            ]
        },
        {
            id: 2,
            name: "Lamborghini",
            title: 'Lamborghini',
            productList: [
                {
                    productId: 1,
                    productName: 'Urus',
                    price: 10.00,
                    image: images.lamboUrus,
                    carousel: images.carouselLamboUrus,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 2,
                    productName: 'Urus',
                    price: 10.00,
                    image: images.lamboUrus,
                    carousel: images.carouselLamboUrus,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 3,
                    productName: 'Urus',
                    price: 10.00,
                    image: images.lamboUrus,
                    carousel: images.carouselLamboUrus,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },

            ]
        },
        {
            id: 3,
            name: "BMW",
            title: 'BMW',
            productList: [
                {
                    productId: 1,
                    productName: 'X6',
                    price: 10.00,
                    image: images.bmwX6,
                    carousel: images.carouselBmwX6,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 2,
                    productName: 'X6',
                    price: 10.00,
                    image: images.bmwX6,
                    carousel: images.carouselBmwX6,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },
                {
                    productId: 3,
                    productName: 'X6',
                    price: 10.00,
                    image: images.bmwX6,
                    carousel: images.carouselBmwX6,
                    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Mercedes",
        title: "Mercedes",
        productList: [
            {
            productId: 1,
            productName: 'GLB-Class AMG Styling',
            price: 10.00,
            image: images.mercedesGlb,
            carousel: images.carouselMercedes,
            productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, in rutrum dui auctor sed. Ut eget felis rhoncus, interdum eros sit amet, sodales nisl. Sed pharetra lectus eget lacinia dapibus.',
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

    //About section

    function renderAboutCard() {
        
        return (
            <View
                style={[styles.shadow,{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                }]}
            >

                {/* Wordings section */}
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                        About us
                    </Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus euismod lacus, 
                        in rutrum dui auctor sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>

                    <Text style={{ marginTop: 30, color: COLORS.white, ...FONTS.h2 }}>
                        Found a car yet?
                    </Text>
                    <Text style={{marginTop: 8, color: COLORS.gray, ...FONTS.body3 }}>
                        Use our 'smart-sort' feature in the top to sort between brands 
                        and go to the cars page.{"\n"}{"\n"}

                        Use the Phone icon to dial us immediately and recieve a great deal on your soughtafter car.
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

            <View style={{ flex: 1, marginBottom: SIZES.padding }}>
                <ScrollableCard 
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>

            {/* Footer - Promo Card */}
            <View style={{ justifyContent: 'flex-end' 
                }}
            >
            </View>

            <ScrollView style={{ height: 100, }}>
            {renderAboutCard()}
            </ScrollView>
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