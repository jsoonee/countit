import React, { createContext, SetStateAction, useState } from "react";

interface IState {
	modalOpen: boolean;
	setModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<IState>({
	modalOpen: false,
	setModalOpen: () => null,
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<ModalContext.Provider value={{ modalOpen, setModalOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
