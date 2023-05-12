import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import { SubjectContext } from "../../context/SubjectContext";

const ListItem = () => {
	const { list } = useContext(ListContext);
	const { subject } = useContext(SubjectContext);
	console.log(list);
	return (
		<div>
			{list
				.find((li) => li.title === subject)
				?.items.map(({ id, name, count }) => (
					<div key={id}>
						{name}: {count}
					</div>
				))}
		</div>
	);
};

export default ListItem;
