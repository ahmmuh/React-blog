import React, { Component } from "react";
class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <button className="readMore">Read more</button>
      </div>
    );
  }
}

export default Post;
