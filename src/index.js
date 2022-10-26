import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./assets/css/index.css";
import { UsersProvider } from "context/usersContext";

ReactDOM.render(
	<UsersProvider>
		<App />
	</UsersProvider>,
	document.getElementById("root")
);

