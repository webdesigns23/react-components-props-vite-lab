import React from "react";

//Article Child of Article List

function Article({title, date, preview}) {
	return(
		<>
			<article>
				<h3>{title}</h3>
			</article>
			<small>
				{date}
			</small>
			<p>
				{preview}
			</p>
		</>
	);
}

export default Article;