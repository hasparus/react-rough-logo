!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("react"),require("roughjs")):"function"==typeof define&&define.amd?define(["react","roughjs"],e):t.reactRoughLogo=e(t.react,t.roughjs)}(this,function(t,e){t=t&&t.hasOwnProperty("default")?t.default:t,e=e&&e.hasOwnProperty("default")?e.default:e;var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};var r=function(){return(r=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};var n={scale:1.5,config:{roughness:2}};return function(i){function p(){var e=null!==i&&i.apply(this,arguments)||this;return e.svg=t.createRef(),e}return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(p,i),p.prototype._mountShapes=function(){this.svg.current&&function(t,o){var r=o.config,n=o.scale;t.innerHTML="";for(var i=e.svg(t),p=0;p<3;p++)t.appendChild(i.ellipse(0,0,570*n,220*n,r));t.appendChild(i.circle(0,0,100*n))}(this.svg.current,this.props)},p.prototype.componentDidMount=function(){this._mountShapes()},p.prototype.componentDidUpdate=function(t){t!==this.props&&this._mountShapes()},p.prototype.render=function(){var e=this.props,o=e.style,n=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&(o[r[n]]=t[r[n]])}return o}(e,["style"]);return t.createElement("svg",r({className:"react-rough-logo",ref:this.svg,viewBox:"-500 -500 1000 1000",style:r({height:"100%",width:"100%"},o)},n))},p.displayName="production"===process.env.NODE_ENV?null:"RoughReactLogo",p.defaultProps=n,p}(t.PureComponent)});
//# sourceMappingURL=index.umd.js.map
