import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ListContext } from "../../context/ListContext";
import { SubjectContext } from "../../context/SubjectContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ListStyle = styled(List)`
	.list-item:hover .more {
		visibility: visible;
	}
	.list-item:hover .length,
	.list-item:focus .length {
		display: none;
	}
`;
const RightBox = styled.div`
	position: relative;
	width: 36px;
	height: 36px;
`;
const Length = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 36px;
	width: 36px;
`;
const MoreStyle = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	visibility: hidden;
`;

const SubMenu = () => {
	const [expand, setExpand] = useState<boolean>(true);
	const [moreTitle, setMoreTitle] = useState<string>("");
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenu = Boolean(anchorEl);
	const { list, dispatch } = useContext(ListContext);
	const { subject, setSubject } = useContext(SubjectContext);

	const onSubClick = () => {
		setSubject("");
	};
	const onExpandClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setExpand(!expand);
	};
	const onListClick = (title: string) => {
		if (subject === title) return;
		setSubject(title);
		console.log("listclick");
	};
	const onMoreClick = (e: any, title: string) => {
		e.stopPropagation();
		setAnchorEl(e.currentTarget);
		setMoreTitle(title);
	};
	const onMenuClick = () => {
		setAnchorEl(null);
	};
	const onDeleteClick = (title: string) => {
		if (subject === title) setSubject("");
		dispatch({ type: "DELETE_SUB", title: title });
		onMenuClick();
	};
	return (
		<div>
			<List>
				<ListItemButton onClick={onSubClick}>
					<ListItemIcon>
						<FormatListBulletedIcon />
					</ListItemIcon>
					<ListItemText primary="Subjects" />
					<div onClick={(e: React.MouseEvent) => onExpandClick(e)}>
						{expand ? (
							<IconButton>
								<ExpandLess fontSize="small" />
							</IconButton>
						) : (
							<IconButton>
								<ExpandMore fontSize="small" />
							</IconButton>
						)}
					</div>
				</ListItemButton>
				<Collapse in={expand} timeout="auto" unmountOnExit>
					{!list.length && <div>no subjects</div>}
					<ListStyle disablePadding>
						{list.map(({ id, title, items }) => (
							<>
								<ListItemButton
									key={id}
									selected={title === subject}
									sx={{ pl: 4 }}
									onClick={() => onListClick(title)}
									className="list-item"
								>
									<ListItemIcon>
										<CircleIcon sx={{ fontSize: "small" }} />
									</ListItemIcon>
									<ListItemText primary={title} />
									<RightBox>
										<Length className="length">{items.length || ""}</Length>
										<MoreStyle
											onClick={(e) => onMoreClick(e, title)}
											className="more"
										>
											<IconButton>
												<MoreHorizIcon fontSize="small" />
											</IconButton>
										</MoreStyle>
									</RightBox>
								</ListItemButton>
							</>
						))}
					</ListStyle>
				</Collapse>
			</List>
			<Menu anchorEl={anchorEl} open={isMenu} onClose={() => setAnchorEl(null)}>
				<MenuItem onClick={() => onDeleteClick(moreTitle)}>delete</MenuItem>
			</Menu>
		</div>
	);
};

export default SubMenu;
