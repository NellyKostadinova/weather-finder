(this["webpackJsonpweather-finder"]=this["webpackJsonpweather-finder"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(10),n(4)),l=n(1);n(11);var s=function(e){var t=r.a.createRef(),n=r.a.createRef();return r.a.createElement("div",{className:"weatherForm"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var r=t.current.value,c=n.current.value,o="";c?fetch("https://restcountries.eu/rest/v2/name/".concat(c,"?fullText=true")).then((function(t){return e.handleErrors(t)})).then((function(e){return e.json()})).then((function(e){return o="q=".concat(r,",").concat(e[0].alpha2Code)})).then((function(){return e.fetchWeather(o)})).catch((function(t){return e.changeErrorMessage()})):e.fetchWeather("q=".concat(r)),t.current.value="",n.current.value=""}},r.a.createElement("input",{ref:t,placeholder:"City"}),r.a.createElement("input",{ref:n,placeholder:"Country"}),r.a.createElement("button",{type:"submit"},"Show weather")),r.a.createElement("div",{className:"error-message"},e.errorMessage),r.a.createElement("button",{id:"positionBtn",onClick:function(){navigator.geolocation.getCurrentPosition((function(t){e.fetchWeather("lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude))}),(function(e){console.log(e)}))}},"Use my position"))};n(12);var u=function(e){return r.a.createElement("div",{className:"weatherDisplay"},r.a.createElement("div",{className:"one-column"},r.a.createElement("h3",{className:"city"},e.city),r.a.createElement("h2",{className:"weather-description"},e.weather),r.a.createElement("div",{className:"weather-icon"},r.a.createElement("img",{src:e.icon,alt:e.weather}))),r.a.createElement("div",{className:"two-column"},r.a.createElement("div",{className:"two-column__left"},r.a.createElement("div",{className:"current-temp"},r.a.createElement("p",null,e.currentTemp)),r.a.createElement("div",{className:"min-temp"},e.minTemp),r.a.createElement("div",{className:"max-temp"},e.maxTemp)),r.a.createElement("div",{className:"two-column__right"},r.a.createElement("h5",null,"Details:"),r.a.createElement("p",null,"Humidity: ",e.humidity),r.a.createElement("p",null,"Pressure: ",e.pressure),r.a.createElement("p",null,"Sunrise: ",e.sunrise),r.a.createElement("p",null,"Sunset: ",e.sunset))))};n(13);var m=function(){var e=Object(a.useState)([{}]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),m=Object(l.a)(o,2),h=m[0],p=m[1];function f(e){if(!e.ok)throw Error(e.statusText);return e}var d=function(){p("Please enter a correct location.")},E=function(e){console.log(e),c([].concat(Object(i.a)(n),[{city:e.name,weather:e.weather[0].main,icon:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),currentTemp:"".concat(Math.round(e.main.temp-273.15),"\xb0"),maxTemp:"".concat(Math.round(e.main.temp_max-273.15),"\xb0"),minTemp:"".concat(Math.round(e.main.temp_min-273.15),"\xb0"),humidity:"".concat(e.main.humidity,"%"),pressure:"".concat(e.main.pressure,"hPa"),sunrise:new Date(1e3*e.sys.sunrise).toLocaleTimeString(),sunset:new Date(1e3*e.sys.sunset).toLocaleTimeString()}])),p("")};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Weather Finder"),r.a.createElement(s,{fetchWeather:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?".concat(e,"&appid=3c102a502b2f3a1e4de7ea4ee566ec9b")).then((function(e){return f(e)})).then((function(e){return e.json()})).then((function(e){return E(e)})).catch((function(e){return d()}))},handleErrors:f,changeErrorMessage:d,errorMessage:h})),r.a.createElement("main",null,n.map((function(e){return e.weather?r.a.createElement(u,Object.assign({key:n.indexOf(e)},e)):null}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.0753cc51.chunk.js.map