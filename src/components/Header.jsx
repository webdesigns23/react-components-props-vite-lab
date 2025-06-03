import React from "react";

//Header Child of App

function Header({name}) {
	return(
		<header>
			<h1>
			{name}
			</h1>
		</header>		
	);
}

export default Header;