import 'babel-polyfill';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadPosts} from '../actions/posts-action';
import Post from '../components/post/post';

class HomeView extends Component {
    componentWillMount() {
        this.props.loadPosts();
    }

    render() {
        if (!this.props.activePost) {
            return null;
        }
        const {activePost} = this.props;
        return (
            <Post activePost={activePost} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state.posts.contentEntries,
        activePost: state.posts.activePost
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPosts: loadPosts}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeView);
