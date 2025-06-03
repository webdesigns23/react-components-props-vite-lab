import React from "react";
import Article from "./Article";

//Article List a Child of App

function ArticleList({posts}) {
	//create an array of article components with id key
	const articleComponents = posts.map(post => (
		<Article key={post.id} 
		title ={post?.title}
		date ={post?.date} 
		preview={post?.preview}/>
		));

	//display article components
	return(
		<main>
			{articleComponents}
		</main>
	);
}

export default ArticleList;

