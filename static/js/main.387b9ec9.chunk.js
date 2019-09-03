(window["webpackJsonpreact-clicky-game"]=window["webpackJsonpreact-clicky-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"name":"Mad Scientist","image":"assets/images/MadScientist.jpg","isClicked":false},{"id":1,"name":"Nerd","image":"assets/images/Nerdsnotthecandy.jpg","isClicked":false},{"id":2,"name":"Gummy Bear","image":"assets/images/Pink_Robot_Chicken_gummy_bear.png","isClicked":false},{"id":3,"name":"Munson","image":"assets/images/MunsonInfoBox.png","isClicked":false},{"id":4,"name":"Aliens","image":"assets/images/Badunkadunk.jpg","isClicked":false},{"id":5,"name":"Unicorn","image":"assets/images/unicorn.jpg","isClicked":false},{"id":6,"name":"Little Drummer Boy","image":"assets/images/Drummer_Boy_RC.png","isClicked":false},{"id":7,"name":"Composite Santa","image":"assets/images/Composite_Santa.jpg","isClicked":false},{"id":8,"name":"Doug Goldstein","image":"assets/images/Doug_as_a_toy.jpg","isClicked":false},{"id":9,"name":"Petroleum Pete","image":"assets/images/Ppete.jpg","isClicked":false},{"id":10,"name":"Robot","image":"assets/images/Robot.jpg","isClicked":false},{"id":11,"name":"Santa","image":"assets/images/Image.png","isClicked":false}]')},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(3),c=a.n(r),i=(a(16),a(4)),o=a(5),l=a(6),m=a(9),u=a(7),g=a(1),d=a(10),f=(a(17),function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{className:"brand"},n.a.createElement("a",{href:"/"},"Click Game")),n.a.createElement("li",{className:e.messageClass},e.message),n.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topscore)))}),h=(a(18),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"Robot Chicken Click Game!"),n.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))}),p=(a(19),function(e){var t=e.name,a=e.image,s=e.onClick;return n.a.createElement("img",{className:"click-item",src:a,alt:t,name:t,onClick:function(){return s(t)}})}),C=(a(20),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer-bottom"},"Click Game!",n.a.createElement("img",{alt:"react",src:"assets/images/react.svg"})))}),k=a(8);a(21);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={score:0,topScore:0,maxScore:12,message:"Click an image to begin!",messageClass:"",characters:k},e.shuffle=function(e){for(var t,a,s=e.length;0!==s;)a=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[a],e[a]=t;return e},e.handleCorrectSelection=function(){e.state.score+1>e.state.topScore&&e.setState({topScore:e.state.topScore+1}),e.state.score+1===e.state.maxScore?e.setState({score:e.state.score+1,message:"Congrats! You win!",messageClass:"correct"}):e.setState({score:e.state.score+1,message:"You guessed correctly!",messageClass:"correct"})},e.handleResetWin=function(t){return e.state.score+1===e.state.maxScore?(e.setState({score:0,topScore:0}),t.map(function(e){return b({},e,{isClicked:!1})})):t},e.handleIncorrectSelection=function(){return e.setState({score:0,message:"You guessed incorrectly!"}),e.state.characters.map(function(e){return!0===e.isClicked?b({},e,{isClicked:!1}):e})},e.handleShuffleChararcters=function(t){var a=!1,s=e.state.characters.map(function(s){return s.name===t?!1===s.isClicked?(e.handleCorrectSelection(),b({},s,{isClicked:!0})):(a=!0,b({},s,{isClicked:!1})):s});a?e.setState({characters:e.shuffle(e.handleIncorrectSelection()),messageClass:"incorrect"}):e.setState({characters:e.shuffle(e.handleResetWin(s))})},e.handleRenderCharacters=function(){return e.state.characters.map(function(t){return n.a.createElement(p,{image:t.image,name:t.name,key:t.id,onClick:e.handleShuffleChararcters})})},e.handleShuffleChararcters=e.handleShuffleChararcters.bind(Object(g.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{score:this.state.score,topscore:this.state.topScore,message:this.state.message,messageClass:this.state.messageClass}),n.a.createElement(h,null),n.a.createElement("div",{className:"content"},this.handleRenderCharacters()),n.a.createElement(C,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.387b9ec9.chunk.js.map