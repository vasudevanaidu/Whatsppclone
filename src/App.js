import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Chat from "pages/Chat";

function App() {

	return (
		<div className="app">
			<p className="app__mobile-message"> Only available on desktop 😊. </p>
			<Router>
				<div className="app-content">
					<Sidebar />
					<Switch>
						<Route component={Chat} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
