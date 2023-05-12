import { useContext } from "react";
import styled from "styled-components";
import { ListContext } from "../../context/ListContext";
import Top from "../top";
import List from "../list";
import Empty from "./Empty";
import AddSub from "./AddSub";

const Wrapper = styled.main`
	width: 100%;
	padding: 1rem 2rem;
`;

const Main = () => {
	const { list } = useContext(ListContext);
	return (
		<Wrapper>
			<AddSub />
			{list.length ? (
				<>
					<Top />
					<List />
				</>
			) : (
				<Empty />
			)}
		</Wrapper>
	);
};

export default Main;
