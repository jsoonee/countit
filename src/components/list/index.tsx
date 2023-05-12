import { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import Subject from "./Subject";
import ListItem from "./ListItem";

const List = () => {
	const { subject } = useContext(SubjectContext);
	return (
		<div>
			{subject ? (
				<>
					<ListItem />
				</>
			) : (
				<>
					<Subject />
				</>
			)}
		</div>
	);
};

export default List;
