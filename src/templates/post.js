import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Hero from '../components/AboutPage/Hero';
import ContentBelowHero from '../components/UI/ContentBelowHero';
import BlogContent from '../components/UI/BlogContent';
import ShareToSocial from '../components/UI/ShareToSocial';
import LetsTalk from '../components/UI/LetsTalk';
import BlogList from '../components/BlogList/BlogList';

export default ({pageContext}) => {
    const { title, acf: { blog_post: {
        image,
        content
    }} } = pageContext;
    useEffect(() => {
        console.log(content);
    })
    return (
        <Layout>
            <Hero {...image} />
            <ContentBelowHero title={title} content="" />
            <BlogContent content={content} />
            <ShareToSocial content={title} />
            <BlogList />
            <LetsTalk />
        </Layout>
    )
}