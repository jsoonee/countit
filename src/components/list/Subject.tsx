import { useContext } from "react";
import styled from "styled-components";
import { ListContext } from "../../context/ListContext";
import { SubjectContext } from "../../context/SubjectContext";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	gap: 1rem;
`;
const Name = styled.h3`
	/* font-size: 1.2rem; */
`;
const CardWrap = styled.div`
	padding: 1rem;
`;

const Subject = () => {
	const { list } = useContext(ListContext);
	const { setSubject } = useContext(SubjectContext);
	const onClick = (sub: string) => {
		setSubject(sub);
	};
	const forNow = (updated: Date) => {
		const milliSeconds = new Date().valueOf() - updated.valueOf();
		const seconds = milliSeconds / 1000;
		if (seconds < 60) return `${Math.floor(seconds)} seconds ago`;
		const minutes = seconds / 60;
		if (minutes === 1) return "a minute ago";
		if (minutes < 60) return `${Math.floor(minutes)} minutes ago`;
		const hours = minutes / 60;
		if (hours === 1) return "an hour ago";
		if (hours < 24) return `${Math.floor(hours)} hours ago`;
		const days = hours / 24;
		if (days === 1) return "a day ago";
		if (days < 7) return `${Math.floor(days)} days ago`;
		const weeks = days / 7;
		if (weeks === 1) return "a week ago";
		if (weeks < 5) return `${Math.floor(weeks)} weeks ago`;
		const months = days / 30;
		if (months === 1) return "a month ago";
		if (months < 12) return `${Math.floor(months)} months ago`;
		const years = days / 365;
		if (years === 1) return "a year ago";
		return `${Math.floor(years)} years ago`;
	};
	console.log(list);
	return (
		<Grid>
			{list.map(({ id, title, items, updated }) => (
				<Card key={id} onClick={() => onClick(title)}>
					<CardActionArea>
						<CardWrap>
							<Name>{title}</Name>
							<div>
								{items.length || "No"} {items.length === 1 ? "item" : "items"}
							</div>
							<div>{forNow(updated)}</div>
						</CardWrap>
					</CardActionArea>
				</Card>
			))}
		</Grid>
	);
};

export default Subject;
