import CoursePackageCard from "@/components/CoursePackageCard";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";
import { course_packages } from "@/constants/course_packages";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  //for every course in course_packages.ts we will create a CoursePackageCard within view components
  return (
    <View>
      <View className="p-2">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="h-full space-y-4 items-center mb-[20]">
            {course_packages.map((course) => (
              <View key={course.id}>
                <CoursePackageCard
                  name={course.name}
                  price={course.price}
                  description={course.description}
                  image_url={course.image_url}
                />
              </View>
            ))}
          </View>
        </ScrollView>
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
