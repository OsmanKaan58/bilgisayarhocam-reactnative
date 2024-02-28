import { Text, View } from "./Themed";
import { Image } from "expo-image";
import { Pressable } from "react-native";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
type cardprop = {
  name: string;
  price: number;
  description: string;
  image_url: string;
};

export default function CoursePackageCard(props: cardprop) {
  return (
    <View>
      <View className="border-solid border-2 rounded-md w-40 h-40 items-center justify-center">
        <View className="w-20 h-20">
          <Image
            source={{ uri: props.image_url }}
            contentFit="cover"
            transition={1000}
            style={styles.image}
          />
        </View>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
        <Pressable
          onPress={() => {
            console.log("Buy button pressed");
            router.push("/");
          }}
        >
          <Text>Buy</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
