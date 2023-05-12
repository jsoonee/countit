import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import { ListProvider, SubjectProvider, ModalProvider } from "./context";
import GlobalStyle from "./globalStyle";

const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<ListProvider>
				<SubjectProvider>
					<ModalProvider>
						<Nav />
						<Main />
					</ModalProvider>
				</SubjectProvider>
			</ListProvider>
		</div>
	);
};

export default App;
