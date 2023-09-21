// import TituloPrincipal from "./components/TituloPrincipal.jsx";
// import BlogPost from "./components/BlogPost";
// import BlogPostModel from "./models/BlogPostModel";
import BlogPage from "./components/BlogPage";

import "./App.css";
function App() {
  // const blogModel = new BlogPostModel(
  //   "Primera postagem!",
  //   "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
  // );
  return (
    <div className="ExemploDeClasseCss">
      {/* <TituloPrincipal titulo="Título passado como parâmetro"/> */}
      {/* <BlogPost post={blogModel}></BlogPost> */}
      <BlogPage></BlogPage>
    </div>
  );
}
export default App;
