import { View } from "react-native";
import { Text } from "react-native";
import { Laptop } from 'lucide-react-native';

export default function Three() {
  return (
    <View>
      <View className="p-5 h-full bg-white font-semibold">
        <Text className="text-xl text-center mb-10">Bilgisayarhocam kimdir?</Text>
        <Text className="text-lg text-center">
          Bilgisayarhocam, 2015 yılında kurulmuş, Türkiye'nin en büyük eğitim platformlarından biridir. Bilgisayar Hocam, eğitimde teknolojiyi kullanarak, öğrencilere ve öğretmenlere yönelik eğitim materyalleri sunmaktadır. Bilgisayarhocam platformunda automata teoriden, bilgisayar mimarisine dijital sistem tasarımından nesne yönelimli programlamaya kadar geniş bir yelpazade eğitim içerikleri tüm teknoloji tutkunlarına sunulmaktadır.</Text>
          <Laptop strokeWidth={2}  size={200} className="mx-auto mt-10 color-black" />
      </View>
    </View>
  );
}
