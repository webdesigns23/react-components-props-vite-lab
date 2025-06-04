import React from "react";
//child components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

//to pass blog data down to children
import blogData from "../data/blog";
console.log("blogData", blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
