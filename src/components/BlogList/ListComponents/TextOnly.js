import React, { useRef } from "react"
import { Link } from "gatsby";
import { useOnScreen } from "../../../shared/hooks/useOnScreen";

const TextOnly = (edge) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px', 0);

  const { id, title, author, blog_title, date, slug } = edge.node;
  return (
    <Link to={`/insight/${slug}`} ref={ref} className={onScreen ? 'fade-up' : ''}>
      <div className="insight-wrapper blog-post" ref={ref}  key={id}>
        <h3 className="insight-type">{blog_title}</h3>
        <div className="text-container">
          <h1 className="insight-title">{title}</h1>
          <span className="posted-on"></span>
          <span className="byline">By {author.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default TextOnly;