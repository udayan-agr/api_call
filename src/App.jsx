import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "./components/Table";

function App() {
	const [tData, setData] = useState({
		body: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios(
				"https://run.mocky.io/v3/ff71cb74-7f5b-4243-8f4a-ad2513ad57ea"
			);
			const data = await res.data;
			setData(data);
		};
		fetchData();
	}, []);

	const handleClick = () => {
		const fetchData = async () => {
			const res = await axios(
				"https://run.mocky.io/v3/fa72b667-890b-4c8e-9a7c-6885dec52366"
			);
			const data = await res.data;
			setData(data);
		};
		fetchData();
	};

	return (
		<div className="App" style={{ margin: "auto" }}>
			<Table tableData={tData.body}></Table>
			<button style={{ margin: "auto", padding: "1rem" }} onClick={handleClick}>
				Click To Change Data!
			</button>
		</div>
	);
}

export default App;
