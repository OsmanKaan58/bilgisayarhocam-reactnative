import { View } from "react-native";
import { Text } from "react-native";
import { Diamond } from "lucide-react-native";

export default function CourseInfo() {
    // give information about computer architecture course
    return (
        <View>
            <View className="p-5 h-full bg-white font-semibold">
                <Text className="text-xl text-center mb-10">Bilgisayar Mimarisi Dersi Hakkında</Text>
                <Text className="text-lg text-center">
                    Bilgisayar Mimarisi dersi, bilgisayar sistemlerinin temel yapı taşlarını ve bu yapı taşlarının nasıl çalıştığını anlamak için tasarlanmıştır. Bu ders, bilgisayar sistemlerinin temel yapı taşlarını ve bu yapı taşlarının nasıl çalıştığını anlamak için tasarlanmıştır. Bu ders, bilgisayar sistemlerinin temel yapı taşlarını ve bu yapı taşlarının nasıl çalıştığını anlamak için tasarlanmıştır. Bu ders, bilgisayar sistemlerinin temel yapı taşlarını ve bu yapı taşlarının nasıl çalıştığını anlamak için tasarlanmıştır.
                </Text>
                <Diamond strokeWidth={2} size={200} className="mx-auto mt-10 color-black" />
            </View>
        </View>
    );





}
