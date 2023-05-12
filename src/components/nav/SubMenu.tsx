import { useContext, useState } from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { SubjectContext } from "../../context/SubjectContext";

const SubMenu = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { subject } = useContext(SubjectContext);
	return (
		<div>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<FormatListBulletedIcon />
						</ListItemIcon>
						<ListItemText primary="Subjects" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<div></div>
					</Collapse>
				</ListItem>
			</List>
		</div>
	);
};

export default SubMenu;
