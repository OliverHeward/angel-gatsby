import React, { useEffect } from 'react';
import Layout from '../components/layout';
import BlogListItem from '../components/BlogList/BlogListItem';
import LetsTalk from '../components/UI/LetsTalk';

export default ({pageContext}) => {
    const {posts} = pageContext;

    return (
        <Layout>
            <div className="text-container insights-header">
                <h1 className="entry-title">Our Insights.</h1>
                <p className="entry-text">In a world that's awlays evolving, stay one step ahead.</p>
            </div>
            <BlogListItem insights={posts}/>
            <LetsTalk />
        </Layout>
    )
}