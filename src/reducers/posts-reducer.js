const getInitialState = () => ({
    activePost: null,
    contentEntries: null
});

const loadPosts = (state, data) => {
    const activePost = data[1].fields;

    return {
        ...state,
        activePost,
        contentEntries: data
    };
};

const reducerMap = {
    ['LOAD_POSTS']: loadPosts
};

export default (state = getInitialState(), {data, type}) => {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
};
