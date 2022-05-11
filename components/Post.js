import React from "react";

//Remember to add export to components/index.js
export const Post = ({ component }) => {
    const variables = component?.parameters?.post?.value?.fields ?? {};
    const { title, author } = variables;

    console.log(JSON.stringify(variables, null, 4));

    return (
        <div>
            <hr />
            <div>Title: {title}</div>
            <div>Author: {author}</div>
        </div>
    );
};