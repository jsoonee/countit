import { useState, useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import { ModalContext } from "../../context/ModalContext";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	display: flex;
`;
const NameInput = styled.input`
	display: block;
	font-size: 2em;
	padding: 0.5rem 0;
	font-weight: bold;
`;

const Title = () => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { subject, setSubject } = useContext(SubjectContext);
	const { setModalOpen } = useContext(ModalContext);

	return (
		<Wrapper>
			<Left>
				{subject && (
					<>
						<IconButton onClick={() => setSubject("")}>
							<ArrowBackIosNewIcon />
						</IconButton>
						{isEdit ? <NameInput defaultValue={subject} /> : <h1>{subject}</h1>}
						<IconButton onClick={() => setIsEdit(true)}>
							<EditIcon />
						</IconButton>
					</>
				)}
				{/* <h1>{subject ? subject : "Subjects"}</h1> */}
			</Left>
			{!subject && (
				<div>
					<IconButton color="primary" onClick={() => setModalOpen(true)}>
						<AddCircleIcon sx={{ fontSize: 40 }} />
					</IconButton>
				</div>
			)}
		</Wrapper>
	);
};

export default Title;
