import {createClient} from 'contentful';

const SPACE_ID = '0bvn6j4824i1';
const ACCESS_TOKEN = 'f836f363eebb45c903ec6a730351d94776e7caf360167109e075a4a95f9bec7d';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

export const getContentEntriesData = async(contentType) => {
    this.entries = await client.getEntries({content_type: contentType});
    return this.entries.items;
}
