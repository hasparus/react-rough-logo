(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('roughjs')) :
    typeof define === 'function' && define.amd ? define(['react', 'roughjs'], factory) :
    (global.reactRoughLogo = factory(global.react,global.roughjs));
}(this, (function (React,rough) {
    React = React && React.hasOwnProperty('default') ? React['default'] : React;
    rough = rough && rough.hasOwnProperty('default') ? rough['default'] : rough;

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
        roughness: 2
    };
    function mountShapes(svgElement, _a) {
        var config = _a.config, scale = _a.scale;
        svgElement.innerHTML = "";
        var rc = rough.svg(svgElement);
        for (var i = 0;i < 3; i++) {
            svgElement.appendChild(rc.ellipse(0, 0, scale * 570, scale * 220, defaultConfig));
        }
        svgElement.appendChild(rc.circle(0, 0, scale * 100));
    }

    var defaultProps = {
        scale: 1.5,
        config: defaultConfig
    };
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
            var _a = this.props, style = _a.style, rest = __rest(_a, ["style"]);
            return React.createElement("svg", __assign({
                className: "react-rough-logo",
                ref: this.svg,
                viewBox: "-500 -500 1000 1000",
                style: __assign({
                    height: "100%",
                    width: "100%"
                }, style)
            }, rest));
        };
        ReactRoughLogo.displayName = process.env.NODE_ENV === "production" ? null : "RoughReactLogo";
        ReactRoughLogo.defaultProps = defaultProps;
        return ReactRoughLogo;
    })(React.PureComponent);


    //# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFsRGYiLCJmaWxlIjoiaW5kZXgudHN4KG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdWdoIGZyb20gXCJyb3VnaGpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcclxuICAgIHJvdWdobmVzczogMlxyXG59O1xyXG5mdW5jdGlvbiBtb3VudFNoYXBlcyhzdmdFbGVtZW50LCBfYSkge1xyXG4gICAgdmFyIGNvbmZpZyA9IF9hLmNvbmZpZywgc2NhbGUgPSBfYS5zY2FsZTtcclxuICAgIHN2Z0VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHZhciByYyA9IHJvdWdoLnN2ZyhzdmdFbGVtZW50KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChyYy5lbGxpcHNlKDAsIDAsIHNjYWxlICogNTcwLCBzY2FsZSAqIDIyMCwgZGVmYXVsdENvbmZpZykpO1xyXG4gICAgfVxyXG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChyYy5jaXJjbGUoMCwgMCwgc2NhbGUgKiAxMDApKTtcclxufVxyXG52YXIgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2NhbGU6IDEuNSxcclxuICAgIGNvbmZpZzogZGVmYXVsdENvbmZpZ1xyXG59O1xyXG52YXIgUmVhY3RSb3VnaExvZ28gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhSZWFjdFJvdWdoTG9nbywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJlYWN0Um91Z2hMb2dvKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnN2ZyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJlYWN0Um91Z2hMb2dvLnByb3RvdHlwZS5fbW91bnRTaGFwZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ZnLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbW91bnRTaGFwZXModGhpcy5zdmcuY3VycmVudCwgdGhpcy5wcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0Um91Z2hMb2dvLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9tb3VudFNoYXBlcygpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0Um91Z2hMb2dvLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VudFNoYXBlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdFJvdWdoTG9nby5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHN0eWxlID0gX2Euc3R5bGUsIHJlc3QgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1wic3R5bGVcIl0pO1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0c2xpYl8xLl9fYXNzaWduKHsgY2xhc3NOYW1lOiBcInJlYWN0LXJvdWdoLWxvZ29cIiwgcmVmOiB0aGlzLnN2Zywgdmlld0JveDogXCItNTAwIC01MDAgMTAwMCAxMDAwXCIsIHN0eWxlOiB0c2xpYl8xLl9fYXNzaWduKHsgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH0sIHN0eWxlKSB9LCByZXN0KSkpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0Um91Z2hMb2dvLmRpc3BsYXlOYW1lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgPyBudWxsXHJcbiAgICAgICAgOiBcIlJvdWdoUmVhY3RMb2dvXCI7XHJcbiAgICBSZWFjdFJvdWdoTG9nby5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcbiAgICByZXR1cm4gUmVhY3RSb3VnaExvZ287XHJcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xyXG5leHBvcnQgZGVmYXVsdCBSZWFjdFJvdWdoTG9nbztcclxuIl19

    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc3BhY2VcXHJlYWN0LXJvdWdoLWxvZ29cXHNyY1xcaW5kZXgudHN4KG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBLENBQVMsUUFBZSxNQUFBO0FBQ3hCLGNBQWMsa0JBQUE7QUFEZCIsImZpbGUiOiJEOlxcd29ya3NwYWNlXFxyZWFjdC1yb3VnaC1sb2dvXFxzcmNcXGluZGV4LnRzeChvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vUmVhY3RSb3VnaExvZ29cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUmVhY3RSb3VnaExvZ29cIjtcclxuIl19

    return ReactRoughLogo;

})));
//# sourceMappingURL=index.umd.js.map
