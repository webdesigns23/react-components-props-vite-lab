import React from "react";

//Article Child of Article List

export default function Article({title, date, preview}) {
	//error handling default date
	const dispayDate = date || "January 1, 1970";

	return(
		<article>
			<h3>{title}</h3>
			<small>
				{dispayDate}
			</small>
			<p>
				{preview}
			</p>
		</article>
	);
}

