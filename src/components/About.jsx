import React from "react";

//About Child of App

export default function About({image, about}) {
	//error handling if no image
	const imageUrl = image ?? "https://via.placeholder.com/215";

	return(
		<aside>
			<img src={imageUrl} alt="blog logo" />
			<p>{about}</p>
		</aside>
	);
}

