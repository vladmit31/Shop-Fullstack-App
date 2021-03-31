import { Switch, Route } from "react-router-dom";
import React from "react";
import MyInfo from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import useToken from "./Hooks/useToken";
import jwt_decode from "jwt-decode";

function App() {
	const { token, setToken } = useToken();

	const isLoggedIn = () => {
		if (token == null) {
			return false;
		} else {
			return true;
		}
	};

	if (isLoggedIn() === false) {
		return <Login setToken={setToken} />;
	}

	return (
		<>
			<NavBar loggedIn={isLoggedIn()} username={jwt_decode(token).email} />
			<Switch>
				{!isLoggedIn() && (
					<Route path="/login">
						<Login setToken={setToken} />
					</Route>
				)}
				<Route path="/">
					<MyInfo />
				</Route>
			</Switch>
		</>
	);
}

export default App;
