import React from "react";

//About Child of App

function About({image, about}) {
	const defaultImage = "https://via.placeholder.com/215";
	const imageUrl = image ?? defaultImage;

	return(
		<aside>
			<img src={imageUrl} alt="blog logo" />
			<p>{about}</p>
		</aside>
	);
}

export default About;