import styled from "styled-components";
import User from "./User";
import Search from "./Search";
import Option from "./Option";
import SubMenu from "./SubMenu";
import AddButton from "./AddButton";

const Wrapper = styled.nav`
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	width: 400px;
	margin: 0 0.5rem;
`;

const Nav = () => {
	return (
		<Wrapper>
			<div>
				<User />
				<Search />
				<Option />
				<SubMenu />
			</div>
			<AddButton />
		</Wrapper>
	);
};

export default Nav;
