(this.webpackJsonpsuperheros=this.webpackJsonpsuperheros||[]).push([[0],{34:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),l=a.n(s),i=(a(39),a(40),a(41),a(42),a(15)),o=a(17),c=a.n(o),m=a(22),p=a(23),h=a(24),u=a(30),g=a(32),d=a(52),b=a(53),E=a(54),v=a(58),y=a(59),f=a(55),N=a(56),w=a(57),A=a(60);a(44);function C(e,t,a,r,s,l){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Eye Color:")," ",e)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Gender:")," ",t)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Height:")," ",a)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Hair Color:")," ",r)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Race:")," ",s)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Weight:")," ",l)))}function x(e,t,a,r,s,l,i){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Full Name:")," ",e)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Place of birth:")," ",t)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Alignment:")," ",a)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Aliases:")," ",r)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Alter Egos:")," ",s)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"First Appearance:")," ",l)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Publisher:")," ",i)))}function k(e,t){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Group Affiliations:")," ",e)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Relatives:")," ",t)))}function B(e,t){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Base:")," ",e)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Occupation:")," ",t)))}function O(e,t,a,r,s,l){return n.a.createElement("div",null,n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Combat:")," ",e)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Durability:")," ",t)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Intelligence:")," ",a)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Power:")," ",r)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Speed:")," ",s)),n.a.createElement("div",{className:"border-bottom"},n.a.createElement("p",{className:"biography"},n.a.createElement("strong",null,"Strength:")," ",l)))}var j=function(e){Object(g.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).superheroFetch=Object(m.a)(c.a.mark((function e(){var t,a,n,s,l,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://superhero-search.p.rapidapi.com/?hero=".concat(r.state.superhero),e.next=3,fetch(t,{headers:{"x-rapidapi-host":"superhero-search.p.rapidapi.com","x-rapidapi-key":"2496fa6213msh5b286d3f657429cp173040jsn13b456d4488f"}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,n.biography.aliases.join(", ");case 9:return s=e.sent,e.next=12,n.appearance.height.join(", ");case 12:return l=e.sent,e.next=15,n.appearance.weight.join(", ");case 15:i=e.sent,r.setState({image:n.images.lg,superheroAPI:n.name,fullName:n.biography.fullName,aliases:s,alignment:n.biography.alignment,alterEgos:n.biography.alterEgos,firstApperance:n.biography.firstApperance,publisher:n.biography.publisher,placeOfBirth:n.biography.placeOfBirth,eyeColor:n.appearance.eyeColor,gender:n.appearance.gender,hairColor:n.appearance.hairColor,height:l,race:n.appearance.race,weight:i,groupAffiliation:n.connections.groupAffiliation,relatives:n.connections.relatives,base:n.work.base,occupation:n.work.occupation,combat:n.powerstats.combat,durability:n.powerstats.durability,intelligence:n.powerstats.intelligence,power:n.powerstats.power,speed:n.powerstats.speed,strength:n.powerstats.strength,bgColor:"container-bg-color"}),console.log(n);case 18:case"end":return e.stop()}}),e)}))),r.state={image:null,superhero:"",superheroAPI:"",fullName:"",aliases:[],alignment:"",alterEgos:"",firstApperance:"",publisher:"",placeOfBirth:"",eyeColor:"",gender:"",hairColor:"",height:[],race:"",weight:[],groupAffiliation:[],relatives:[],base:"",occupation:"",combat:"",durability:"",intelligence:"",power:"",speed:"",strength:"",bgColor:"",width:window.innerWidth},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.windowResize.bind(this))}},{key:"testFunction",value:function(){alert("hi")}},{key:"windowResize",value:function(){this.setState({width:window.innerWidth})}},{key:"render",value:function(){var e,t=this;return n.a.createElement("div",{className:"bg-color"},n.a.createElement(d.a,{className:this.state.bgColor},n.a.createElement(b.a,null,n.a.createElement(E.a,null,n.a.createElement("div",{className:"div-super-small lg-mt"},n.a.createElement(v.a,null,n.a.createElement(y.a,{placeholder:"Superhero","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(e){return t.setState({superhero:e.target.value})}}),n.a.createElement(v.a.Append,null,n.a.createElement(f.a,{variant:"outline-secondary",className:"btn-color",onClick:function(){return t.superheroFetch()}},"Search")))))),"3"!==this.state.strength&&n.a.createElement("div",null,n.a.createElement(b.a,null,n.a.createElement(E.a,{xs:12},n.a.createElement("div",{className:"img-center"},n.a.createElement(N.a,{src:this.state.image,className:"img-super",rounded:!0})))),n.a.createElement(b.a,null,n.a.createElement(E.a,(e={xs:12},Object(i.a)(e,"xs",{order:"first"}),Object(i.a)(e,"md",6),Object(i.a)(e,"lg",4),e),n.a.createElement("div",{className:"div-super-small"},this.state.width<600&&n.a.createElement("h4",null,this.state.superheroAPI))),this.state.width>800&&n.a.createElement(E.a,{xs:12,md:6,lg:8,style:{marginTop:"-400px"}},n.a.createElement("div",null,n.a.createElement(w.a,{defaultActiveKey:"Biography",id:"uncontrolled-tab-example",className:"nav-tabs",style:{marginTop:"10px"}},n.a.createElement(A.a,{eventKey:"Biography",title:"Biography"},x(this.state.fullName,this.state.placeOfBirth,this.state.alignment,this.state.aliases,this.state.alterEgos,this.state.firstApperance,this.state.publisher)),n.a.createElement(A.a,{eventKey:"Apperance",title:"Apperance"},C(this.state.eyeColor,this.state.gender,this.state.height,this.state.hairColor,this.state.race,this.state.weight)),n.a.createElement(A.a,{eventKey:"Connections",title:"Connections"},k(this.state.groupAffiliation,this.state.relatives)),n.a.createElement(A.a,{eventKey:"Work",title:"Work"},B(this.state.base,this.state.occupation)),n.a.createElement(A.a,{eventKey:"Powerstats",title:"Powerstats"},O(this.state.combat,this.state.durability,this.state.intelligence,this.state.power,this.state.speed,this.state.strength)))))),this.state.width<800&&n.a.createElement(w.a,{defaultActiveKey:"Biography",id:"uncontrolled-tab-example",className:"nav-tabs",style:{marginTop:"10px"}},n.a.createElement(A.a,{eventKey:"Biography",title:"Biography"},x(this.state.fullName,this.state.placeOfBirth,this.state.alignment,this.state.aliases,this.state.alterEgos,this.state.firstApperance,this.state.publisher)),n.a.createElement(A.a,{eventKey:"Apperance",title:"Apperance"},C(this.state.eyeColor,this.state.gender,this.state.height,this.state.hairColor,this.state.race,this.state.weight)),n.a.createElement(A.a,{eventKey:"Connections",title:"Connections"},k(this.state.groupAffiliation,this.state.relatives)),n.a.createElement(A.a,{eventKey:"Work",title:"Work"},B(this.state.base,this.state.occupation)),n.a.createElement(A.a,{eventKey:"Powerstats",title:"Powerstats"},O(this.state.combat,this.state.durability,this.state.intelligence,this.state.power,this.state.speed,this.state.strength))))))}}]),a}(r.Component);var K=function(){return n.a.createElement("div",null,n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.649f51e6.chunk.js.map