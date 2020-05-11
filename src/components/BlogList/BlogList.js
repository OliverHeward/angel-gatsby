import React from 'react';
import BlogListItem from './BlogListItem';
import useWordpressBlogList from '../../shared/hooks/get-blog-list';

const BlogList = () => {
  const { edges } = useWordpressBlogList();
    return (    
        <div className="blog-list-section">
        <h1>Our Insights.</h1>
        <p>In a world that's always evolving, stay one step ahead.</p>
            <BlogListItem insights={edges}/>
        </div>
    )
};

export default BlogList;