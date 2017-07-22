import React from 'react';

const Post = ({activePost}) =>
    <div className="post">
        <h2>{activePost.title}</h2>
        <p>{activePost.intro}</p>
        {activePost.images.map((imageItem, index) =>
                <img
                    key={index}
                    src={`https:${imageItem.fields.image.fields.file.url}`}
                    width={'1000'}
                />
            )
        }
    </div>;

export default Post;
