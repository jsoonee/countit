import React, { useReducer, createContext } from "react";

interface IItem {
	id: number;
	name: string;
	count: number;
	memo: string;
	label: Array<string>;
	star: boolean;
	created: Date;
	updated: Date;
}

interface IList {
	id: number;
	title: string;
	items: IItem[];
	created: Date;
	updated: Date;
}

interface IAction {
	type: string;
	title: string;
	name?: string;
}

interface IReducer {
	list: IList[];
	dispatch: React.Dispatch<IAction>;
}

const reducer = (state: IList[], action: IAction): IList[] => {
	let now = new Date();
	switch (action.type) {
		case "CREATE":
			return [
				...state,
				{
					id: state.length,
					title: action.title,
					items: [],
					created: now,
					updated: now,
				},
			];
		case "ADD":
			return state.map((li) =>
				action.name && li.title === action.title
					? {
							...li,
							items: [
								...li.items,
								{
									id: li.items.length,
									name: action.name,
									count: 1,
									memo: "",
									label: [],
									star: false,
									created: now,
									updated: now,
								},
							],
					  }
					: li
			);
		case "INCREMENT":
			return state.map((li) =>
				action.name && li.title === action.title
					? {
							...li,
							items: li.items.map((item) =>
								item.name === action.name
									? { ...item, count: item.count + 1 }
									: item
							),
					  }
					: li
			);
		default:
			return state;
	}
};

const ListContext = createContext<IReducer>({ list: [], dispatch: () => null });

const ListProvider = ({ children }: { children: React.ReactNode }) => {
	const [list, dispatch] = useReducer(reducer, []);
	return (
		<ListContext.Provider value={{ list, dispatch }}>
			{children}
		</ListContext.Provider>
	);
};

export { ListContext, ListProvider };
