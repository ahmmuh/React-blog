import React, { Component } from "react";
import PostDetail from './PostDetail'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button className="readMore">Read More
        
        </button>
      </div>
    );
  }
}

export default Post;
