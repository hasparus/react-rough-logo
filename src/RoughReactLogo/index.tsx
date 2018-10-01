import React from "react";
import rough from "roughjs";

import "./styles.css";
import { RoughSVG } from "roughjs/bin/svg";

const defaultConfig = {
  roughness: 2,
};

type Config = typeof defaultConfig;

function mountShapes(
  svgElement: SVGSVGElement,
  { config, scale }: { config: Config; scale: number }
) {
  svgElement.innerHTML = "";
  const rc = rough.svg(svgElement) as RoughSVG;
  for (let i = 0; i < 3; i++) {
    svgElement.appendChild(
      rc.ellipse(
        0,
        0,
        scale * 570,
        scale * 220,
        defaultConfig
      )
    );
  }
  svgElement.appendChild(rc.circle(0, 0, scale * 100));
}

const defaultProps = {
  scale: 1.5,
  config: defaultConfig,
};

type Props = typeof defaultProps &
  React.AllHTMLAttributes<SVGSVGElement>;

class RoughReactLogo extends React.PureComponent<Props> {
  static displayName =
    process.env.NODE_ENV === "production"
      ? null
      : "RoughReactLogo";
  static defaultProps = defaultProps;

  svg = React.createRef<SVGSVGElement>();

  _mountShapes() {
    if (this.svg.current) {
      mountShapes(this.svg.current, this.props);
    }
  }

  componentDidMount() {
    this._mountShapes();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this._mountShapes();
    }
  }

  render() {
    const { style, ...rest } = this.props;
    return (
      <svg
        className={"react-rough-logo"}
        ref={this.svg}
        viewBox="-500 -500 1000 1000"
        style={{
          height: "100%",
          width: "100%",
          ...style,
        }}
        {...rest}
      />
    );
  }
}

export default RoughReactLogo;
