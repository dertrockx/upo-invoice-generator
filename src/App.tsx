import React from "react";

import { PDFViewer } from "@react-pdf/renderer";
// import { Call as CallIcon } from "react-ionicons";
import SamplePage from "./components/SamplePage";
import "./App.css";

function App() {
	return (
		<div style={{ height: "100vh" }}>
			<PDFViewer width="100%" height="100%">
				<SamplePage />
			</PDFViewer>
		</div>
	);
}

export default App;
