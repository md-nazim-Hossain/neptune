import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "@/theme/spacing";
import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  isBackButton?: boolean;
  title?: string;
};
export default function PlanetHeader({
  isBackButton = false,
  title = "The Planets",
}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {isBackButton && (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={colors.white}
          />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    textTransform: "uppercase",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[4],
  },
});
