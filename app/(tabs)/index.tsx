import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView className="flex-1 px-5" contentContainerStyle={{ flexGrow: 1 }}>
        <Image className="w-12 h-10 mt-20 mb-5 mx-auto" resizeMode="contain" source={icons.logo} />
      </ScrollView>
    </View>
  );
}
