import React from "react";
import "./styles.css";
declare const defaultProps: {
    scale: number;
    config: {
        roughness: number;
    };
};
declare type Props = typeof defaultProps & React.AllHTMLAttributes<SVGSVGElement>;
declare class RoughReactLogo extends React.PureComponent<Props> {
    static displayName: string | null;
    static defaultProps: {
        scale: number;
        config: {
            roughness: number;
        };
    };
    svg: React.RefObject<SVGSVGElement>;
    _mountShapes(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
export default RoughReactLogo;
