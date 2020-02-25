import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import post from "./components/Post";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      posts: data
    });
    console.log(data);
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="postContainer">
          {posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
