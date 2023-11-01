import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Dimensions, View } from 'react-native'
import yelp from '../api/yelp';

const RestaurantScreen =  ({ navigation, route }) => {
    const { id } = route.params;
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);

    const fetchBusiness = async () => {
        try {
            setLoading(true)
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
            setLoading(false)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        fetchBusiness()
    }, [])


    const dimentions = Dimensions.get("window")
    const imageWidth = dimentions.width
    const imageHeight = Math.round((dimentions.width * 9) / 16)

    if (loading) return <ActivityIndicator size={'large'} />
    return (
    <View>
        <FlatList data={result.photos}
            keyExtractor={(photo) => photo}
                renderItem={({ item }) => <Image source={{ uri: item }} style={{ height: imageHeight, width: imageWidth}} />}
        />
    </View>
)
}

export default RestaurantScreen