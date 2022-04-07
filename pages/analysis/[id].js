import React from "react";

const ArticlePage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Article Page</h1>
        </div>
    );
};

export default ArticlePage;

export async function getServerSideProps(context) {
    const id = context.params.id; // Get ID from slug `/book/1`
    return {
        props: { id },
    };
}
