import React from "react";

//Remember to add export to components/index.js
export const Post = ({ component }) => {
    const variables = component?.parameters?.postContent?.value?.fields ?? {};
    const { title, author } = variables;

    return (
        <div>
            <hr />
            <div>Title: {title}</div>
            <div>Author: {author}</div>
        </div>
    );
};