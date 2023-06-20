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
	newName?: string;
}

interface IReducer {
	list: IList[];
	dispatch: React.Dispatch<IAction>;
}

const reducer = (state: IList[], action: IAction): IList[] => {
	const now = new Date();
	switch (action.type) {
		case "ADD_SUB":
			return [
				{
					id: state.length + 1,
					title: action.title,
					items: [],
					created: now,
					updated: now,
				},
				...state,
			];
		case "ADD_ITEM":
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
		case "RENAME_SUB":
			return state.map((li) =>
				action.newName && li.title === action.title
					? { ...li, title: action.newName }
					: li
			);
		case "DELETE_SUB":
			return state.filter((li) => li.title !== action.title);
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
