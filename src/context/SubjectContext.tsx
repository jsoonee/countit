import React, { useState, createContext } from "react";

interface IState {
	subject: string;
	setSubject: React.Dispatch<React.SetStateAction<string>>;
}

const SubjectContext = createContext<IState>({
	subject: "",
	setSubject: () => null,
});

const SubjectProvider = ({ children }: { children: React.ReactNode }) => {
	const [subject, setSubject] = useState<string>("");
	return (
		<SubjectContext.Provider value={{ subject, setSubject }}>
			{children}
		</SubjectContext.Provider>
	);
};

export { SubjectContext, SubjectProvider };
