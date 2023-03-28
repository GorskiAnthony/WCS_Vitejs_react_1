const User = ({ name, skill, woman }) => {
	return (
		<div>
			<h1>
				Hello {name} 👋
				{woman ? "🦄" : "🍺"}
			</h1>
			<h1>Tu fais du "{skill}"</h1>
			<img src="https://picsum.photos/200/300" />
		</div>
	);
};

export default User;
