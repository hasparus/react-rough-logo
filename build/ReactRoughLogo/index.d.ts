import React from "react";
import "./styles.css";
declare type RoughOptions = {
    roughness?: number;
    bowing?: number;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    fillStyle?: "hachure" | "solid" | "zigzag" | "cross-hatch" | "dots";
    fillWeight?: number;
    hachureAngle?: number;
    hachureGap?: number;
    curveStepCount?: number;
    simplification?: number;
};
declare const defaultConfig: {
    scale: number;
    ellipsesOptions: RoughOptions;
    circleOptions: RoughOptions;
};
declare type Props = typeof defaultConfig & React.SVGProps<SVGSVGElement>;
declare class ReactRoughLogo extends React.PureComponent<Props> {
    static displayName: string | null;
    static defaultProps: {
        scale: number;
        ellipsesOptions: RoughOptions;
        circleOptions: RoughOptions;
    };
    svg: React.RefObject<SVGSVGElement>;
    _mountShapes(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
export default ReactRoughLogo;
