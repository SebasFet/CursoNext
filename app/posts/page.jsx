import PostCard from "../../components/PostCard";

import { Suspense } from "react";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

await new Promise((resolve) => setTimeout(resolve, 4000));

  return data;
}

//Renderiza los posts RSC (React Stateless Component)
async function PostPages() {
  const posts = await loadPosts();
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <PostCard post ={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;
