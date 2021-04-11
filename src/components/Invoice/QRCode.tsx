import React from "react";
import QRCOde from "qrcode";
import { Image } from "@react-pdf/renderer";
/**
 *
 * @param {string} url - URL to point the qr code to
 * @param {number} width - Width of QR Code ( style )
 * @param {number} height - Width of QR Code ( style )
 */
function QRCode({
	url = "https://facebook.com",
	width = 200,
	height = 200,
	...props
}) {
	const canvas = document.createElement("canvas");
	QRCOde.toCanvas(canvas, url);
	const qr = canvas.toDataURL();
	return <Image src={qr} style={{ width, height }} {...props} />;
}

export default QRCode;
