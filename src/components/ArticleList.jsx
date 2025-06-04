import React from "react";
import Article from "./Article";

//Article List a Child of App

export default function ArticleList({posts}) {
//create an array of article components with id key

	//display article components
	return(
		<main>
			{posts.map(post => (
			<Article key={post.id} 
			title ={post?.title}
			date ={post?.date} 
			preview={post?.preview}/>
		))}
		</main>
	);
}





//<Article title={posts[0].title} date={posts[0].date} preview={posts[0].preview} />
//<Article title={posts[1].title} date={posts[1].date} preview={posts[1].preview} />
//<Article title={posts[2].title} date={posts[2].date} preview={posts[2].preview} />



