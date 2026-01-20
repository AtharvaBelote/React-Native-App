import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

interface Props {
  onPress?: () => void;
  placeholder: string;
}
const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#AB8BFF" />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#A8B5DB"
          className="flex-1 ml-2 text-white"
          onPress={onPress}
          onChangeText={() => {}}
        />
    </View>
  );
};

export default SearchBar;
