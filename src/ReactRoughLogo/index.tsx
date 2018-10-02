import React from "react";
import rough from "roughjs";

import "./styles.css";
import { RoughSVG } from "roughjs/bin/svg";

// https://github.com/pshihn/rough/wiki
type RoughOptions = {
  roughness?: number;
  bowing?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillStyle?:
    | "hachure"
    | "solid"
    | "zigzag"
    | "cross-hatch"
    | "dots";
  fillWeight?: number;
  hachureAngle?: number;
  hachureGap?: number;
  curveStepCount?: number;
  simplification?: number;
};

const defaultConfig = {
  scale: 1.5,
  ellipsesOptions: { roughness: 2 } as RoughOptions,
  circleOptions: {} as RoughOptions,
};

type Config = typeof defaultConfig;

function mountShapes(
  svgElement: SVGSVGElement,
  { circleOptions, ellipsesOptions, scale }: Config
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
        ellipsesOptions
      )
    );
  }
  svgElement.appendChild(
    rc.circle(0, 0, scale * 100, circleOptions)
  );
}

type Props = typeof defaultConfig &
  React.SVGProps<SVGSVGElement>;

class ReactRoughLogo extends React.PureComponent<Props> {
  static displayName =
    process.env.NODE_ENV === "production"
      ? null
      : "RoughReactLogo";
  static defaultProps = defaultConfig;

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
    const {
      style,
      scale,
      ellipsesOptions,
      circleOptions,
      ...rest
    } = this.props;
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

export default ReactRoughLogo;
