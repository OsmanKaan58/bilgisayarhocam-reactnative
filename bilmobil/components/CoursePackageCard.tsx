import { Text, View } from "./Themed";
import { Image } from "expo-image";
import { Pressable } from "react-native";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import RobotoStyledText from "@/components/RobotoStyledText";
type cardprop = {
  name: string;
  price: number;
  description: string;
  image_url: string;
};

export default function CoursePackageCard(props: cardprop) {
  return (
    <View>
      <View className="border-solid border-2 rounded-md w-[300] h-[320] items-center justify-center shadow-lg">
        <View className="w-[250] h-[200]">
          <Image
            source={{ uri: props.image_url }}
            contentFit="cover"
            transition={1000}
            style={styles.image}
          />
        </View>
        <RobotoStyledText className="text-xl">{props.price}$</RobotoStyledText>
        <RobotoStyledText className="text-xl">{props.name}</RobotoStyledText>
        <View
          className="border-2 w-[100] rounded-md bg-black"
        >
          <Link href={{
          pathname: "/course-info",
          params: { id: props.name, price: props.price, description: props.description, image_url: props.image_url},
        }}>
          <RobotoStyledText className="text-white text-center text-2xl">Buy</RobotoStyledText>
          </Link>        
        </View>
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
