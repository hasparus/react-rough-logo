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
            var _a = this.props, style = _a.style, scale = _a.scale, ellipsesOptions = _a.ellipsesOptions, circleOptions = _a.circleOptions, rest = __rest(_a, ["style",
                "scale","ellipsesOptions","circleOptions"]);
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
        ReactRoughLogo.defaultProps = defaultConfig;
        return ReactRoughLogo;
    })(React.PureComponent);


    //# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLEdBQUEsQ0FBeUIsWUFBekIsR0FDdkIsT0FDQTtJQUNOLGNBQUEsQ0FBZSxZQUFmLENBQUEsQ0FBQSxDQUE4QjtJQUM5QixPQUFPO0FBQ1gsRUE3Qm9DLENBNkJsQyxLQUFBLENBQU07QUFDUixlQUFlO0FBaERmIiwiZmlsZSI6ImluZGV4LnRzeChvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3VnaCBmcm9tIFwicm91Z2hqc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxudmFyIGRlZmF1bHRDb25maWcgPSB7XHJcbiAgICBzY2FsZTogMS41LFxyXG4gICAgZWxsaXBzZXNPcHRpb25zOiB7IHJvdWdobmVzczogMiB9LFxyXG4gICAgY2lyY2xlT3B0aW9uczoge31cclxufTtcclxuZnVuY3Rpb24gbW91bnRTaGFwZXMoc3ZnRWxlbWVudCwgX2EpIHtcclxuICAgIHZhciBjaXJjbGVPcHRpb25zID0gX2EuY2lyY2xlT3B0aW9ucywgZWxsaXBzZXNPcHRpb25zID0gX2EuZWxsaXBzZXNPcHRpb25zLCBzY2FsZSA9IF9hLnNjYWxlO1xyXG4gICAgc3ZnRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdmFyIHJjID0gcm91Z2guc3ZnKHN2Z0VsZW1lbnQpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHJjLmVsbGlwc2UoMCwgMCwgc2NhbGUgKiA1NzAsIHNjYWxlICogMjIwLCBlbGxpcHNlc09wdGlvbnMpKTtcclxuICAgIH1cclxuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocmMuY2lyY2xlKDAsIDAsIHNjYWxlICogMTAwLCBjaXJjbGVPcHRpb25zKSk7XHJcbn1cclxudmFyIFJlYWN0Um91Z2hMb2dvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVhY3RSb3VnaExvZ28sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSZWFjdFJvdWdoTG9nbygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zdmcgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBSZWFjdFJvdWdoTG9nby5wcm90b3R5cGUuX21vdW50U2hhcGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Zy5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG1vdW50U2hhcGVzKHRoaXMuc3ZnLmN1cnJlbnQsIHRoaXMucHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdFJvdWdoTG9nby5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fbW91bnRTaGFwZXMoKTtcclxuICAgIH07XHJcbiAgICBSZWFjdFJvdWdoTG9nby5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW91bnRTaGFwZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVhY3RSb3VnaExvZ28ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBzdHlsZSA9IF9hLnN0eWxlLCBzY2FsZSA9IF9hLnNjYWxlLCBlbGxpcHNlc09wdGlvbnMgPSBfYS5lbGxpcHNlc09wdGlvbnMsIGNpcmNsZU9wdGlvbnMgPSBfYS5jaXJjbGVPcHRpb25zLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcInN0eWxlXCIsIFwic2NhbGVcIiwgXCJlbGxpcHNlc09wdGlvbnNcIiwgXCJjaXJjbGVPcHRpb25zXCJdKTtcclxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgdHNsaWJfMS5fX2Fzc2lnbih7IGNsYXNzTmFtZTogXCJyZWFjdC1yb3VnaC1sb2dvXCIsIHJlZjogdGhpcy5zdmcsIHZpZXdCb3g6IFwiLTUwMCAtNTAwIDEwMDAgMTAwMFwiLCBzdHlsZTogdHNsaWJfMS5fX2Fzc2lnbih7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9LCBzdHlsZSkgfSwgcmVzdCkpKTtcclxuICAgIH07XHJcbiAgICBSZWFjdFJvdWdoTG9nby5kaXNwbGF5TmFtZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICAgID8gbnVsbFxyXG4gICAgICAgIDogXCJSb3VnaFJlYWN0TG9nb1wiO1xyXG4gICAgUmVhY3RSb3VnaExvZ28uZGVmYXVsdFByb3BzID0gZGVmYXVsdENvbmZpZztcclxuICAgIHJldHVybiBSZWFjdFJvdWdoTG9nbztcclxufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Um91Z2hMb2dvO1xyXG4iXX0=

    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc3BhY2VcXHJlYWN0LXJvdWdoLWxvZ29cXHNyY1xcaW5kZXgudHN4KG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFBLENBQVMsUUFBZSxNQUFBO0FBQ3hCLGNBQWMsa0JBQUE7QUFEZCIsImZpbGUiOiJEOlxcd29ya3NwYWNlXFxyZWFjdC1yb3VnaC1sb2dvXFxzcmNcXGluZGV4LnRzeChvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vUmVhY3RSb3VnaExvZ29cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vUmVhY3RSb3VnaExvZ29cIjtcclxuIl19

    return ReactRoughLogo;

})));
//# sourceMappingURL=index.umd.js.map
