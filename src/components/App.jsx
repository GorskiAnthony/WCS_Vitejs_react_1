import User from "./User";

const users = [
	{
		id: 1,
		name: "Anthony",
		skill: "JS",
		woman: false,
	},
	{
		id: 2,
		name: "Mathieu",
		skill: "JS/React",
		woman: false,
	},
	{
		id: 3,
		name: "Roxanne",
		skill: "JS/React",
		woman: true,
	},
	{
		id: 4,
		name: "Hafsa",
		skill: "JS",
		woman: true,
	},
];

const App = () => (
	<div style={{ display: "flex", flexWrap: "wrap" }}>
		{users.map((user) => {
			return <User key={user.id} {...user} />;
		})}
		{
			// users.map((user) => (
			//      <User {...user} />;
			// ))
		}
	</div>
);

export default App;
