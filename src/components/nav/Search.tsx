import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	border-radius: 5px;
	background-color: #eee;
	padding: 0.3rem;
	padding-right: 1rem;
`;

const SearchInput = styled.input`
	background-color: transparent;
	border: 0;
	width: 100%;
`;

const Search = () => {
	return (
		<Wrapper>
			<IconButton>
				<SearchIcon />
			</IconButton>
			<SearchInput placeholder="Search" />
		</Wrapper>
	);
};

export default Search;
