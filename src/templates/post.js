import React, { useEffect } from 'react';
import Layout from '../components/layout';
import ContentBelowHero from '../components/UI/ContentBelowHero';
import BlogContent from '../components/UI/BlogContent';
import ShareToSocial from '../components/UI/ShareToSocial';
import LetsTalk from '../components/UI/LetsTalk';
import BlogList from '../components/BlogList/BlogList';
import HeroPostSquare from '../components/Heros/hero-post-square';

export default ({pageContext}) => {
    const { title, acf: { blog_post: {
        image,
        content
    }} } = pageContext;
    useEffect(() => {
        console.log(pageContext);
    })
    return (
        <Layout>
            <HeroPostSquare {...image} />
            <ContentBelowHero title={title} content={`By ${pageContext.author.name}`} page="blog-post"/>
            <BlogContent content={content} />
            <ShareToSocial content={title} />
            <BlogList />
            <LetsTalk />
        </Layout>
    )
}