import React, { useState, useContext, useRef, useEffect } from "react";
import { ListContext } from "../../context/ListContext";
import { ModalContext } from "../../context/ModalContext";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import InputAdornment from "@mui/material/InputAdornment";

const ModalWrapper = styled.div`
	position: absolute;
	padding: 2rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
`;
const Title = styled.h2`
	margin-bottom: 0.5rem;
`;
const Buttons = styled.div`
	display: flex;
	justify-content: center;
	> * {
		margin: 0 0.5rem;
	}
`;

const AddSub = () => {
	const { list, dispatch } = useContext(ListContext);
	const { modalOpen, setModalOpen } = useContext(ModalContext);
	const [name, setName] = useState<string>("");
	const [error, setError] = useState<string>(" ");
	const inputRef = useRef<HTMLInputElement>();

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const onModalClose = () => {
		setModalOpen(false);
		setName("");
		setError(" ");
	};

	const onAddClick = () => {
		if (!name) {
			setError("Enter a subject name.");
			return;
		}
		const existed = list.some((sub) => sub.title === name);
		if (existed) {
			setError("The subject already exists.");
			return;
		}
		dispatch({ type: "CREATE", title: name });
		onModalClose();
	};

	const onEnter = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			onAddClick();
		}
	};

	return (
		<Modal open={modalOpen} onClose={() => onModalClose()}>
			<ModalWrapper>
				<Title>Add new subject</Title>
				<TextField
					sx={{ margin: "1rem 0", minWidth: 300 }}
					error={error !== " "}
					helperText={error}
					id="outlined-basic"
					label="Subject"
					onChange={(v) => {
						setError(" ");
						setName(v.target.value);
					}}
					onKeyDown={(e) => onEnter(e)}
					inputRef={inputRef}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								{name.length ? (
									<IconButton
										sx={{ minWidth: 40 }}
										edge="end"
										onClick={() => {
											setName("");
											if (inputRef.current) {
												inputRef.current.value = "";
												inputRef.current.focus();
											}
										}}
									>
										<ClearIcon />
									</IconButton>
								) : null}
							</InputAdornment>
						),
					}}
				/>
				<Buttons>
					<div>
						<Button variant="contained" onClick={onAddClick}>
							Add
						</Button>
					</div>
					<div>
						<Button variant="text" onClick={() => setModalOpen(false)}>
							Cancel
						</Button>
					</div>
				</Buttons>
			</ModalWrapper>
		</Modal>
	);
};

export default AddSub;
