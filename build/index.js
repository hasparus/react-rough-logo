function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var rough = _interopDefault(require('roughjs'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var defaultConfig = {
    scale: 1.5,
    ellipsesOptions: {
        roughness: 2
    },
    circleOptions: {}
};
function mountShapes(svgElement, _a) {
    var circleOptions = _a.circleOptions, ellipsesOptions = _a.ellipsesOptions, scale = _a.scale;
    svgElement.innerHTML = "";
    var rc = rough.svg(svgElement);
    for (var i = 0;i < 3; i++) {
        svgElement.appendChild(rc.ellipse(0, 0, scale * 570, scale * 220, ellipsesOptions));
    }
    svgElement.appendChild(rc.circle(0, 0, scale * 100, circleOptions));
}

var ReactRoughLogo = (function (_super) {
    __extends(ReactRoughLogo, _super);
    function ReactRoughLogo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.svg = React.createRef();
        return _this;
    }
    
    ReactRoughLogo.prototype._mountShapes = function () {
        if (this.svg.current) {
            mountShapes(this.svg.current, this.props);
        }
    };
    ReactRoughLogo.prototype.componentDidMount = function () {
        this._mountShapes();
    };
    ReactRoughLogo.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps !== this.props) {
            this._mountShapes();
        }
    };
    ReactRoughLogo.prototype.render = function () {
        var _a = this.props, style = _a.style, scale = _a.scale, className = _a.className, ellipsesOptions = _a.ellipsesOptions, circleOptions = _a.circleOptions, rest = __rest(_a, ["style",
            "scale","className","ellipsesOptions","circleOptions"]);
        return React.createElement("svg", __assign({
            className: className ? "react-rough-logo " + className : "react-rough-logo",
            ref: this.svg,
            viewBox: "-500 -500 1000 1000",
            style: __assign({
                height: "100%",
                width: "100%"
            }, style)
        }, rest));
    };
    ReactRoughLogo.displayName = process.env.NODE_ENV === "production" ? null : "RoughReactLogo";
    ReactRoughLogo.defaultProps = defaultConfig;
    return ReactRoughLogo;
})(React.PureComponent);

module.exports = ReactRoughLogo;
//# sourceMappingURL=index.js.map
