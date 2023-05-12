import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PushPinIcon from "@mui/icons-material/PushPin";
import LabelIcon from "@mui/icons-material/Label";
import { ListContext } from "../../context/ListContext";
import { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";

const Option = () => {
	const { list } = useContext(ListContext);
	const { subject } = useContext(SubjectContext);
	const curr = list.find((li) => li.title === subject);
	let important = 0;
	if (curr)
		important = curr.items.reduce((acc, item) => (item.star ? acc++ : acc), 0);
	return (
		<>
			{subject ? (
				<>
					<h2>{subject.toUpperCase()}</h2>
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<PushPinIcon />
								</ListItemIcon>
								<ListItemText primary="Important" />
								<div>{important}</div>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<LabelIcon />
								</ListItemIcon>
								<ListItemText primary="Labels" />
							</ListItemButton>
						</ListItem>
					</List>
				</>
			) : null}
		</>
	);
};

export default Option;
