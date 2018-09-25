import React from "react";
import rough from "roughjs-es5";

import "./styles.css";

const defaultConfig = {
  roughness: 2,
};

type Config = typeof defaultConfig;

function mountShapes(
  svgElement: SVGSVGElement,
  { config, scale }: { config: Config, scale: number }
) {
  svgElement.innerHTML = "";
  const rc = rough.svg(svgElement);
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

type Props = typeof defaultProps;

class RoughReactLogo extends React.PureComponent<Props> {
  static defaultProps = defaultProps;

  svg = React.createRef();

  _mountShapes() {
    mountShapes(this.svg.current, this.props);
  }

  componentDidMount() {
    this._mountShapes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this._mountShapes();
    }
  }

  render() {
    return (
      <svg
        className={"react-rough-logo"}
        ref={this.svg}
        viewBox="-500 -500 1000 1000"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      />
    );
  }
}

export default RoughReactLogo;
