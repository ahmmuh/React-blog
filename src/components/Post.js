import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <span className="readMore">Read More</span>
      </div>
    );
  }
}

export default Post;
