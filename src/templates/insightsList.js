import React, { useEffect } from 'react';
import Layout from '../components/layout';
import BlogListItem from '../components/BlogList/BlogListItem';
import LetsTalk from '../components/UI/LetsTalk';

export default ({pageContext}) => {
    const {posts} = pageContext;

    useEffect(() => {
        console.log(pageContext);
    });

    return (
        <Layout>
            <div className="text-container">
                <h1>Our insights.</h1>
                <p>In a world that's awlays evolving, stay one step ahead.</p>
            </div>
            <BlogListItem insights={posts}/>
            <LetsTalk />
        </Layout>
    )
}