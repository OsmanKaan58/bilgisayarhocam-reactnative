import { Text, View } from './Themed';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
type cardprop = {
    name: string;
    price: number;
    description: string;
    image_url: string;
}

export default function CoursePackageCard(props: cardprop) {
    return (
        <View className='grid grid-cols-1'>
            <Image source={require(props.image_url)}/>
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
            <Pressable onPress={
                () => {
                    console.log('Buy button pressed');
                    router.push('/');
                }
            }>
                <Text>Buy</Text>
            </Pressable>
            
        </View>
    )
}

