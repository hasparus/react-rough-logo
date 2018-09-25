import React from "react";

import GithubMark from "./GitHub-Mark-64px.png";

import "./styles.css";

type Props = React.AllHTMLAttributes<HTMLAnchorElement>;

const href = "https://github.com/hasparus/react-rough-logo";

const GithubLink = ({ style, ...props }: Props) => (
  <a
    className="github-link"
    href={href}
    {...props}
    style={{
      width: "40px",
      height: "40px",
      ...style,
    }}
    title={href}
  >
    <img
      src={GithubMark}
      alt="link to github"
      style={{
        width: "100%",
      }}
    />
  </a>
);

export default GithubLink;
