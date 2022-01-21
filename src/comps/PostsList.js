import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Button
        onClick={() => {
          navigate(`/editPost/${post.id}`);
        }}
      >
        编辑
      </Button>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
