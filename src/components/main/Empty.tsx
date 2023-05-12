import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Button from "@mui/material/Button";

const Empty = () => {
	const { setModalOpen } = useContext(ModalContext);
	return (
		<div>
			<div>No subjects</div>
			<Button variant="contained" onClick={() => setModalOpen(true)}>
				Add New Subject
			</Button>
		</div>
	);
};

export default Empty;
