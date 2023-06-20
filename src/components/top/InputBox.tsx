import { useContext } from "react";
import { ListContext } from "../../context/ListContext";
import { SubjectContext } from "../../context/SubjectContext";

const InputBox = () => {
	const { subject } = useContext(SubjectContext);
	const { list, dispatch } = useContext(ListContext);

	const onSubmit = (e: any) => {
		e.preventDefault();
		const item = e.target.item.value;
		if (!item) return;
		const exi = list
			.find((li) => li.title === subject)
			?.items.some((el) => el.name === item);
		exi
			? dispatch({ type: "INCREMENT", title: subject, name: item })
			: dispatch({ type: "ADD_ITEM", title: subject, name: item });
	};

	console.log(subject);
	return subject ? (
		<div>
			<form onSubmit={(e) => onSubmit(e)}>
				<input type="text" name="item" placeholder="item" />
				<button type="submit">go</button>
			</form>
		</div>
	) : null;
};

export default InputBox;
