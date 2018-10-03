import React from 'react';
import rough from 'roughjs';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc3BhY2VcXHJlYWN0LXJvdWdoLWxvZ29cXHNyY1xcUmVhY3RSb3VnaExvZ29cXHN0eWxlcy5jc3Mob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFBZiIsImZpbGUiOiJEOlxcd29ya3NwYWNlXFxyZWFjdC1yb3VnaC1sb2dvXFxzcmNcXFJlYWN0Um91Z2hMb2dvXFxzdHlsZXMuY3NzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHVuZGVmaW5lZDsiXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDSSxjQUFBLENBQWUsV0FBZixDQUFBLENBQUEsQ0FBNkIsT0FBQSxDQUFRLEdBQVIsQ0FBWSxRQUFaLENBQUEsR0FBQSxDQUF5QixZQUF6QixHQUN2QixPQUNBO0lBQ04sY0FBQSxDQUFlLFlBQWYsQ0FBQSxDQUFBLENBQThCO0lBQzlCLE9BQU87QUFDWCxFQS9Cb0MsQ0ErQmxDLEtBQUEsQ0FBTTtBQUNSLGVBQWU7QUFsRGYiLCJmaWxlIjoiaW5kZXgudHN4KG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdWdoIGZyb20gXCJyb3VnaGpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcclxuICAgIHNjYWxlOiAxLjUsXHJcbiAgICBlbGxpcHNlc09wdGlvbnM6IHsgcm91Z2huZXNzOiAyIH0sXHJcbiAgICBjaXJjbGVPcHRpb25zOiB7fVxyXG59O1xyXG5mdW5jdGlvbiBtb3VudFNoYXBlcyhzdmdFbGVtZW50LCBfYSkge1xyXG4gICAgdmFyIGNpcmNsZU9wdGlvbnMgPSBfYS5jaXJjbGVPcHRpb25zLCBlbGxpcHNlc09wdGlvbnMgPSBfYS5lbGxpcHNlc09wdGlvbnMsIHNjYWxlID0gX2Euc2NhbGU7XHJcbiAgICBzdmdFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB2YXIgcmMgPSByb3VnaC5zdmcoc3ZnRWxlbWVudCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocmMuZWxsaXBzZSgwLCAwLCBzY2FsZSAqIDU3MCwgc2NhbGUgKiAyMjAsIGVsbGlwc2VzT3B0aW9ucykpO1xyXG4gICAgfVxyXG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChyYy5jaXJjbGUoMCwgMCwgc2NhbGUgKiAxMDAsIGNpcmNsZU9wdGlvbnMpKTtcclxufVxyXG52YXIgUmVhY3RSb3VnaExvZ28gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhSZWFjdFJvdWdoTG9nbywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJlYWN0Um91Z2hMb2dvKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnN2ZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJlYWN0Um91Z2hMb2dvLnByb3RvdHlwZS5fbW91bnRTaGFwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ZnLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbW91bnRTaGFwZXModGhpcy5zdmcuY3VycmVudCwgdGhpcy5wcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0Um91Z2hMb2dvLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9tb3VudFNoYXBlcygpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0Um91Z2hMb2dvLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudFNoYXBlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdFJvdWdoTG9nby5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHN0eWxlID0gX2Euc3R5bGUsIHNjYWxlID0gX2Euc2NhbGUsIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgZWxsaXBzZXNPcHRpb25zID0gX2EuZWxsaXBzZXNPcHRpb25zLCBjaXJjbGVPcHRpb25zID0gX2EuY2lyY2xlT3B0aW9ucywgcmVzdCA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJzdHlsZVwiLCBcInNjYWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZWxsaXBzZXNPcHRpb25zXCIsIFwiY2lyY2xlT3B0aW9uc1wiXSk7XHJcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHRzbGliXzEuX19hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgPyBcInJlYWN0LXJvdWdoLWxvZ28gXCIgKyBjbGFzc05hbWVcclxuICAgICAgICAgICAgICAgIDogXCJyZWFjdC1yb3VnaC1sb2dvXCIsIHJlZjogdGhpcy5zdmcsIHZpZXdCb3g6IFwiLTUwMCAtNTAwIDEwMDAgMTAwMFwiLCBzdHlsZTogdHNsaWJfMS5fX2Fzc2lnbih7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9LCBzdHlsZSkgfSwgcmVzdCkpKTtcclxuICAgIH07XHJcbiAgICBSZWFjdFJvdWdoTG9nby5kaXNwbGF5TmFtZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICAgID8gbnVsbFxyXG4gICAgICAgIDogXCJSb3VnaFJlYWN0TG9nb1wiO1xyXG4gICAgUmVhY3RSb3VnaExvZ28uZGVmYXVsdFByb3BzID0gZGVmYXVsdENvbmZpZztcclxuICAgIHJldHVybiBSZWFjdFJvdWdoTG9nbztcclxufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Um91Z2hMb2dvO1xyXG4iXX0=

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc3BhY2VcXHJlYWN0LXJvdWdoLWxvZ29cXHNyY1xcaW5kZXgudHN4KG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBLENBQVMsUUFBZSxNQUFBO0FBQ3hCLGNBQWMsa0JBQUE7QUFEZCIsImZpbGUiOiJEOlxcd29ya3NwYWNlXFxyZWFjdC1yb3VnaC1sb2dvXFxzcmNcXGluZGV4LnRzeChvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vUmVhY3RSb3VnaExvZ29cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUmVhY3RSb3VnaExvZ29cIjtcclxuIl19

export default ReactRoughLogo;
//# sourceMappingURL=index.esm.js.map
