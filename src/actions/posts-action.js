import {getContentEntriesData} from '../services/content-service';

export const loadPosts = () => async(dispatch) => {
    const entries = await getContentEntriesData('blogPost');

    dispatch ({
        type: 'LOAD_POSTS',
        data: entries
    });
}
