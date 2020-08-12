import React, { useRef } from "react"
import { Link } from "gatsby";
import { useOnScreen } from "../../../shared/hooks/useOnScreen";
import Moment from "react-moment";

const TextOnly = (edge) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px', 0);

  const { id, title, author, blog_title, slug, modified } = edge.node;

  return (
    <Link to={`/insight/${slug}`} ref={ref} className={onScreen ? 'fade-up' : ''}>
      <div className="insight-wrapper blog-post" ref={ref}  key={id}>
        <h3 className="insight-type">{blog_title}</h3>
        <div className="text-container">
          <h1 className="insight-title">{title}</h1>
          <span className="posted-on"><Moment fromNow ago>{new Date(modified)}</Moment> ago</span>
          <span className="byline">By {author.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default TextOnly;