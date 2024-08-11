import { View, StyleSheet, ScrollView, Pressable, Linking } from "react-native";
import React from "react";
import PlanetHeader from "@/components/planet-header";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "@/components/svg";
import Text from "@/components/text/text";
import { Ionicons } from "@expo/vector-icons";
import { PLANET_LIST } from "@/data/planet-list";

type Props = {
  route: any;
};
export default function Details({ route }: Props) {
  const { planet }: { planet: (typeof PLANET_LIST)[0] } = route.params;
  const renderImage = () => {
    switch (planet.name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
      default:
        return null;
    }
  };

  const onPress = () => {
    Linking.openURL(planet.wikiLink);
  };
  return (
    <View style={styles.container}>
      <PlanetHeader isBackButton />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {planet.name}
          </Text>
          <Text style={styles.description}>{planet.description}</Text>
          <Pressable onPress={onPress} style={styles.link}>
            <Text style={{ color: colors.grey }}>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
            <Text style={{ marginLeft: spacing[1] }}>
              <Ionicons name="open-outline" size={18} />
            </Text>
          </Pressable>
        </View>
        <View style={styles.planetSectionContainer}>
          <PlanetSection title="ROTATION TIME" value={planet.rotationTime} />
          <PlanetSection
            title="REVOLUTION TIME"
            value={planet.revolutionTime}
          />
          <PlanetSection title="RADIUS" value={planet.radius} />
          <PlanetSection title="AVERAGE TEMP." value={planet.avgTemp} />
        </View>
      </ScrollView>
    </View>
  );
}

const PlanetSection = ({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) => (
  <View style={styles.planetSection}>
    <Text
      preset="small"
      style={{
        textTransform: "uppercase",
        color: colors.grey,
        fontWeight: "bold",
      }}
    >
      {title}
    </Text>
    <Text preset="h2">{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    paddingHorizontal: spacing[6],
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
    color: colors.grey,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing[5],
  },
  wikipedia: {
    textTransform: "capitalize",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSectionContainer: {
    gap: spacing[3],
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[7],
  },
  planetSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: colors.grey,
  },
});
