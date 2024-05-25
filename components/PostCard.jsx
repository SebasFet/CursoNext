"use client";

import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <h2>
          {post.id}. {post.title}
        </h2>
      </Link>

      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("click funcionando");
        }}
      >
        Ver más
      </button>
    </div>
  );
} // Path: components/PostCard.jsx

export default PostCard;
