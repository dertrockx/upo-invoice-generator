import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import QRCode from "./QRCode";

import {
	PhoneIcon,
	FBIcon,
	GeopointIcon,
	MailIcon,
	InstagramIcon,
	TwitterIcon,
} from "../Icons";
import { globals, text } from "../styles";

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 50,
		marginTop: 13,
	},
});

function Footer() {
	return (
		<>
			<View
				style={{
					...styles.container,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View>
					<Text style={[text.alignLeft, text.title]}>Payment Info:</Text>
					<View>
						<Text style={{ ...text.paragraph, marginTop: 10 }}>
							Account #: 09618016463
						</Text>
						<Text style={{ ...text.paragraph, marginTop: 2 }}>
							Account Name: 09618016463
						</Text>
						<Text style={{ ...text.paragraph, marginTop: 2 }}>
							Type: Paymaya
						</Text>
					</View>
					<View style={{ marginTop: 15 }}>
						<View style={{ ...globals.inlineContent, marginBottom: 8 }}>
							<PhoneIcon />
							<Text style={{ ...text.paragraph, marginLeft: 5 }}>
								(+63)998-324-1818
							</Text>
						</View>
						<View style={{ ...globals.inlineContent, marginBottom: 8 }}>
							<GeopointIcon />
							<Text style={{ ...text.paragraph, marginLeft: 5 }}>Address</Text>
						</View>
						<View style={{ ...globals.inlineContent, marginBottom: 8 }}>
							<MailIcon />
							<Text style={{ ...text.paragraph, marginLeft: 5 }}>
								contact@upo.org
							</Text>
						</View>
						<View style={{ ...globals.inlineContent, marginBottom: 8 }}>
							<FBIcon />
							<Text style={{ ...text.paragraph, marginLeft: 5 }}>
								facebook.com/upo1992
							</Text>
						</View>
						<View style={{ ...globals.inlineContent, marginBottom: 8 }}>
							<InstagramIcon />
							<Text style={{ ...text.paragraph, marginLeft: 5 }}>@upo1992</Text>
						</View>
						<View style={{ ...globals.inlineContent, marginBottom: 8 }}>
							<TwitterIcon />
							<Text style={{ ...text.paragraph, marginLeft: 5 }}>@upo1992</Text>
						</View>
					</View>
				</View>
				<View>
					<QRCode height={126} width={126} />
				</View>
			</View>
			<View style={{ marginTop: 15 }}>
				<View
					style={{
						height: 0.5,
						backgroundColor: "#000",
						marginBottom: 5,
						width: 142,
						margin: "auto",
					}}
				/>
				<Text style={{ ...text.paragraph, textAlign: "center" }}>
					Authorized Sign
				</Text>
			</View>
		</>
	);
}

export default Footer;
