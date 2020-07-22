import React from 'react';
import BlogListItem from './BlogListItem';
import useWordpressBlogList from '../../shared/hooks/get-blog-list';

const BlogList = () => {
  const { edges } = useWordpressBlogList();
    return (    
        <div className="blog-list-section overspill-width">
        <h1 className="blog-list-title">Our Insights.</h1>
        <p className="blog-list-copy">In a world that's always evolving, stay one step ahead.</p>
            <BlogListItem insights={edges}/>
        </div>
    )
};

export default BlogList;