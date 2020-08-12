import React, { useEffect } from "react";
import Layout from "../components/layout";

export default ({ pageContext }) => {

    return (
        <Layout>
            <h1 className="page-title">{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{__html: pageContext.context}} />
        </Layout>
    )
}