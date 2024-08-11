import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import PlanetHeader from "@/components/planet-header";
import { colors } from "@/theme/colors";
import { PLANET_LIST } from "@/data/planet-list";
import Text from "@/components/text/text";
import { spacing } from "@/theme/spacing";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  navigation: any;
};
export default function Home({ navigation }: Props) {
  const [planetList, setPlanetList] = useState(PLANET_LIST);
  return (
    <View style={styles.container}>
      <PlanetHeader />
      <TextInput
        style={styles.searchInput}
        autoCorrect={false}
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        onChangeText={(text) => {
          setPlanetList(
            PLANET_LIST.filter((planet) =>
              planet.name.toLowerCase().includes(text.toLowerCase())
            )
          );
        }}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={planetList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Details", { planet: item })}
            style={styles.item}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={[styles.circle, { backgroundColor: item.color }]} />
              <Text preset="h3" style={styles.itemName}>
                {item.name}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              color={colors.white}
            />
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: { padding: spacing[4] },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
    gap: spacing[4],
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
