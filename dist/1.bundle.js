(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{359:function(n,e,t){var a=t(75),r=t(360);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var c={insert:"head",singleton:!1};a(r,c);n.exports=r.locals||{}},360:function(n,e,t){(e=t(76)(!1)).push([n.i,".Item{\n    padding: 20px;\n    margin: 20px;\n    width: 220px;\n    height: 350px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 15px #282c34;\n    text-align: center;\n      \n    }\n  \n  .Img{\n      width: 150px;\n      height: 200px;\n  }\n  \n  .btn{\n    background-color: crimson;\n    color: white;\n    font-size: 14px;\n    border: crimson;\n    border-radius: 5px;\n    padding: 8px;\n    box-shadow: 0px 0px 10px #282c34;\n    margin: 5px;\n  }\n  \n  .cart {\n      /* text-align: center; */\n\n      \n      \n    }\n    \n    .Products{\n      display: flex;\n      \n      flex-wrap: wrap;\n      \n      /*grid-template-columns: auto auto auto;*/\n      padding: 100px;\n    }\n    \n    \n\n    .cart-summary{\n      display: inline-block;\n      padding: 50px;\n      \n    }\n\n    .cart-empty{\n      display: flex;\n      flex-direction: column;\n        padding: 5%;\n        margin: 150px;\n        margin-left: 27%;\n        width: 50%;\n        /*height: 300px;*/\n        border-radius: 10px;\n        box-shadow: 0px 0px 15px #282c34;\n        text-align: center;\n        vertical-align: auto;\n    }",""]),n.exports=e},361:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(55),i=(t(359),t(33)),l=t(112);e.default=function(n){var e=n.clist;return void 0===e||null==e.prod||0==e.prod.length?r.a.createElement("div",{className:"cart-empty"},r.a.createElement("h2",null,"You have not added any products to the cart yet !"),r.a.createElement("p",null,"Please go through our E-shop and add products to this cart."),r.a.createElement(i.b,{to:"/firstPage/",style:{textDecoration:"none"}},r.a.createElement(l.b,{type:"button",className:"btn btn-danger"},"Back"))):r.a.createElement("div",{className:"cart"},r.a.createElement("h3",null,"E-Cart"),r.a.createElement("p",null,"You have ",c.a.getState().cart.prod.length," items waiting in your cart "),r.a.createElement("div",{className:"Products"},e.prod.map((function(n){return r.a.createElement("div",{className:"Item",key:n.cid},r.a.createElement("img",{src:n.url,alt:n.name,className:"Img"}),r.a.createElement("h5",{className:"card-title"},n.name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},n.price),r.a.createElement(l.b,{type:"button",className:"btn btn-danger",onClick:function(){return c.a.dispatch({type:"DEL",payload:{id:n.cid}})}}," delete"))}))))}}}]);