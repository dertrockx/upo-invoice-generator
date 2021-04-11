import React from "react";
import { Image } from "@react-pdf/renderer";
import phoneIcon from "../../assets/phone-icon.png";
import fbIcon from "../../assets/fb-icon.png";
import geopointIcon from "../../assets/geopoint-icon.png";
import igIcon from "../../assets/ig-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";

export const PhoneIcon = ({ width = 10, height = 10 }) => (
	<Image src={phoneIcon} style={{ width, height }} />
);
export const FBIcon = ({ width = 10, height = 10 }) => (
	<Image src={fbIcon} style={{ width, height }} />
);
export const GeopointIcon = ({ width = 10, height = 10 }) => (
	<Image src={geopointIcon} style={{ width, height }} />
);
export const InstagramIcon = ({ width = 10, height = 10 }) => (
	<Image src={igIcon} style={{ width, height }} />
);
export const MailIcon = ({ width = 10, height = 10 }) => (
	<Image src={mailIcon} style={{ width, height }} />
);
export const TwitterIcon = ({ width = 10, height = 10 }) => (
	<Image src={twitterIcon} style={{ width, height }} />
);
