import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  // state = {
  //   post: null,
  // };
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then((res) => {
  //       this.setState({
  //         post: res.data,
  //       });
  //     });
  // }

  render() {

    let styles = {
      //inline-styling
      fontWeight: 'bold',
      fontSize: '1em',
    };
    const post = this.props.post ? ( //this.state
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center" style={styles}>
        Loading post...
      </div>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: 'DELETE_POST', id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
