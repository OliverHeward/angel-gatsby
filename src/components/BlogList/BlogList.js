import React from 'react';
import BlogListItem from './BlogListItem';
import useWordpressBlogList from '../../shared/hooks/get-blog-list';

const BlogList = () => {
  const { edges } = useWordpressBlogList();
    return (    
        <div>
            <BlogListItem insights={edges}/>
        </div>
    )
};

export default BlogList;