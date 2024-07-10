import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function HomeScreen() {
  return (
    <WebView
      style={styles.calcom}
      source={{
        uri: "https://cal.com/rick/get-rick-rolled/embed",
      }}
    />
  );
}

const styles = StyleSheet.create({
  calcom: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    height: 800,
    width: "100%",
    borderRadius: 8,
  },
});
