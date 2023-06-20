import { useState, useContext } from "react";
import { ListContext } from "../../context/ListContext";
import { SubjectContext } from "../../context/SubjectContext";
import { ModalContext } from "../../context/ModalContext";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	display: flex;
	align-items: center;
`;

const NameInput = styled.input`
	display: block;
	font-size: 1.2rem;
	padding: 0;
	font-weight: bold;
`;

const Title = () => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { dispatch } = useContext(ListContext);
	const { subject, setSubject } = useContext(SubjectContext);
	const [newName, setNewName] = useState<string>(subject);
	const { setModalOpen } = useContext(ModalContext);

	const clickBack = () => {
		setSubject("");
		setIsEdit(false);
		setNewName(subject);
	};
	const clickCancel = () => {
		setNewName(subject);
		setIsEdit(false);
	};
	const clickCheck = () => {
		if (newName.length && subject !== newName) {
			dispatch({ type: "RENAME_SUB", title: subject, newName: newName });
			setSubject(newName);
		}
		setIsEdit(false);
	};
	console.log(subject);
	return (
		<Wrapper>
			<Left>
				{subject && (
					<>
						<IconButton onClick={clickBack}>
							<ArrowBackIosNewIcon />
						</IconButton>
						{isEdit ? (
							<>
								<NameInput
									defaultValue={subject}
									onChange={(e) => setNewName(e.target.value)}
								/>
								<IconButton onClick={clickCancel}>
									<CancelIcon />
								</IconButton>
								<IconButton onClick={clickCheck}>
									<CheckCircleIcon />
								</IconButton>
							</>
						) : (
							<>
								<h1>{subject}</h1>
								<IconButton onClick={() => setIsEdit(true)}>
									<EditIcon />
								</IconButton>
							</>
						)}
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
