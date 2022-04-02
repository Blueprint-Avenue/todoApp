import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./styles/appStyles";
import Home from "./component/Home";

export default function App() {
	return (
		<Container>
			<Home />
			<StatusBar style="light" />
		</Container>
	);
}
