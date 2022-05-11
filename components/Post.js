import React from "react";

//Remember to add export to components/index.js
export const Post = ({ component }) => {
    const { title, author } =
    component?.parameters?.event?.value?.fields ?? {};
    return (
        <div>
            <hr />
            <div>Title: {title}</div>
            <div>Author: {author}</div>
        </div>
    );
};