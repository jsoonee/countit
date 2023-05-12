import styled from "styled-components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const ButtonStyle = styled(Button)`
	width: 100%;
`;
const ButtonWrap = styled.div`
	width: 100%;
	padding: 0.5rem 0;
	display: flex;
	justify-content: center;
`;
const Div = styled.div`
	margin-left: 1rem;
`;

const AddButton = () => {
	const { setModalOpen } = useContext(ModalContext);
	return (
		<ButtonStyle onClick={() => setModalOpen(true)}>
			<ButtonWrap>
				<AddIcon />
				<Div>Add New Subject</Div>
			</ButtonWrap>
		</ButtonStyle>
	);
};

export default AddButton;
