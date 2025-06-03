import React from "react";

//Article Child of Article List

function Article({title, date, preview}) {
	const defaultDate ="January 1, 1970";
	const dispayDate = date || defaultDate;

	return(
		<>
			<article>
				<h3>{title}</h3>
			</article>
			<small>
				{dispayDate}
			</small>
			<p>
				{preview}
			</p>
		</>
	);
}

export default Article;