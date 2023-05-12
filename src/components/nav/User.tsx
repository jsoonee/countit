// import { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const User = () => {
	// const [login, setLogin] = useState<boolean>(false);
	return (
		<Wrapper>
			<AccountCircleIcon />
			<div>
				<div>User</div>
				<div>user1@countit.com</div>
			</div>
		</Wrapper>
	);
};

export default User;
