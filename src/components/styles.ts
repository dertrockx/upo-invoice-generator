import { StyleSheet } from "@react-pdf/renderer";

export const colors = {
	brand: "#5E383C",
	accent: "#3E4D3F",
	white: "#fff",
	black: "#000",
};

export const text = StyleSheet.create({
	header: {
		fontSize: 24,
		letterSpacing: -0.72,
	},

	title: {
		fontSize: 16,
	},
	subtitle: {
		fontSize: 12,
	},
	paragraph: {
		fontSize: 10,
	},
	alignLeft: {
		justifyContent: "flex-start",
	},
	alignCenter: {
		justifyContent: "center",
	},
	alignEnd: {
		justifyContent: "flex-end",
	},
});

export const globals = StyleSheet.create({
	inlineContent: {
		flexDirection: "row",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
	},
	col5: {
		flex: 5,
	},
	col1: {
		flex: 1,
	},
	col2: {
		flex: 2,
	},
});
