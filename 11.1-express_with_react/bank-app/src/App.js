import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get("http://localhost:8000/api/bank/users");
			setData(response.data.users);
		};
		getData();
	}, []);
	return (
		<div className="App">
				<h2>Bank Users</h2>
				{data.map((user, index) => {
					return (
						<div key={index + 1} className="users-container">
							<h3>user: {index + 1}</h3>
							<p>Id: {user.id}</p>
							<p>cash: {user.cash}</p>
							<p>credit: {user.credit}</p>
						</div>
					);
				})}
		</div>
	);
}
export default App;
