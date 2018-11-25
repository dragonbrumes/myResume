import React from "react";
import PropTypes from "prop-types";

// import "./title.styl"

/**
 * Functional component
 * Render a title synchronized with the balise prop
 * @param {node} children - content to render as a title
 * @param {string} className - className to apply style on title
 * @param {string} balise - string representation of a html balise
 */
const Heading = ({ children, className, tag }) => (
  <React.Fragment>
    {tag === "h1" && <h1 className={className}>{children}</h1>}
    {tag === "h2" && <h2 className={className}>{children}</h2>}
    {tag === "h3" && <h3 className={className}>{children}</h3>}
    {tag === "h4" && <h4 className={className}>{children}</h4>}
    {tag === "h5" && <h5 className={className}>{children}</h5>}
    {tag === "h6" && <h6 className={className}>{children}</h6>}
  </React.Fragment>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Heading;
