(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,n){t.exports=n.p+"img/eee6a8e.png"},150:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-item"},[e("img",{staticStyle:{height:"9vh",width:"auto"},attrs:{src:n(149),alt:""}})])}],r={data:function(){return{active:!1}},mounted:function(){var t=this;setTimeout((function(){return t.active=!0}),100)}},c=n(17),l={props:["panels","position","active"],methods:{wheel:function(t,e){var n=this;if(!0!==this.position.paused){if(this.position.paused=!0,this.active.i!==e&&(this.active.i=e),t.deltaY>=1)e!==this.panels.length-1&&(this.panels[this.active.i].progress=-100,this.active.i+=1);t.deltaY<=-1&&0!==e&&(this.panels[this.active.i-1].progress=0,this.active.i-=1),setTimeout((function(){return n.position.paused=!1}),2220)}},mouseDown:function(t,e){var n=this;!0!==this.position.paused&&(this.position.paused=!0,this.active.i!==e&&(this.active.i=e),this.position.firstPos=t.clientY,window.addEventListener("mousemove",this.scroll),setTimeout((function(){return n.position.paused=!1}),2220))},scroll:function(t){this.active.t=0,this.position.lastPos=t.clientY;var e=100*this.position.lastPos/this.position.firstPos-100;if(e>0){if(this.position.next=!1,0!==this.active.i){this.panels[this.active.i-1].progress=e/.5-100;this.panels[this.active.i-1].progress;this.panels[this.active.i-1].progress<-90?this.position.back=!0:this.position.back=!1}}else{this.position.next=!0;var n=this.panels.length;this.active.i!==n-1&&(this.panels[this.active.i].progress=0+e/.5,this.panels[this.active.i].progress>-10?this.position.back=!0:this.position.back=!1)}},mouseUp:function(t,e){var n=this;if(window.removeEventListener("mousemove",this.scroll),this.active.t=2.2,!0===this.position.next){var o=this.panels.length;this.active.i!==o-1&&(!1===this.position.back?setTimeout((function(){return n.panels[n.active.i].progress=-100}),100):setTimeout((function(){return n.panels[n.active.i].progress=0}),100))}else!1===this.position.next&&0!==this.active.i&&(!1===this.position.back?setTimeout((function(){return n.panels[n.active.i-1].progress=0}),100):setTimeout((function(){return n.panels[n.active.i-1].progress=-100}),100))}},components:{navDesktop:Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-desktop",class:t.active?"top-active":""},[t._m(0),t._v(" "),n("div",{staticClass:"nav-spacer-5"}),t._v(" "),n("div",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[t._v("o mnie")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"link",attrs:{to:"/services"}},[t._v("usługi")])],1),t._v(" "),n("div",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"link",attrs:{to:"/contact"}},[t._v("kontakt")])],1),t._v(" "),n("div",{staticClass:"nav-spacer-1"})])}),o,!1,null,null,null).exports},mounted:function(){var t=this;setTimeout((function(){return t.active.animate=!0}),100),setTimeout((function(){return t.position.paused=!1}),4e3)}},v=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navDesktop"),t._v(" "),t._l(t.panels,(function(e,o){return n("div",{key:o,staticClass:"panel",style:[{top:e.progress+"%",zIndex:t.panels.length-o,transition:t.active.t+"s"},-100!==e.progress?{boxShadow:"0px 0px 60px 30px"}:"",0!==o?{filter:"brightness("+-t.panels[o-1].progress/100+")"}:""],on:{wheel:function(e){return t.wheel(e,o)},mousedown:function(e){return t.mouseDown(e,o)},mouseup:function(e){return t.mouseUp(e,o)}}},[n("div",{staticClass:"left",class:t.active.animate&&0===o||0!==o?"bg":"non-bg",style:[o%2!=0?{order:"2"}:{},{transition:t.active.t+"s",transitionDelay:t.active.t/2+"s"}]},[n("div",{staticClass:"bg",style:{backgroundImage:e.img}}),t._v(" "),n("div",{staticClass:"content",style:[-100!==e.progress?{boxShadow:"0px 0px 150px 20px",transition:t.active.t+"s"}:{transition:t.active.t+"s"}]},[n("h1",[t._v("Kancelaria Adwokacka")]),t._v(" "),n("div",{staticClass:"line",style:[0!==o?{width:-t.panels[o-1].progress+t.panels[o-1].progress/5+"%"}:{width:"80%",transitionDelay:1.2*t.active.t},{transition:t.active.t+t.active.t/2+"s"}]}),t._v(" "),n("h3",[t._v("Barbara Semeniuk")]),t._v(" "),t._m(0,!0)])]),t._v(" "),n("div",{staticClass:"right"},[n("div",{staticClass:"box",style:[0!==o?{opacity:-t.panels[o-1].progress/100,transform:"translateY("+(3*t.panels[o-1].progress+300)+"px)"}:{},{transition:t.active.t+"s"}]},[n("h1",{class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:.7*t.active.t+"s"}},[t._v(t._s(e.title))]),t._v(" "),n("h3",{class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:t.active.t+"s"}},[t._v(t._s(e.subtitle))]),t._v(" "),e.text?n("p",{class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:1.2*t.active.t+"s"}},[t._v(t._s(e.text))]):n("div",{class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:1.2*t.active.t+"s"}},t._l(e.options,(function(option,e){return n("li",{key:e},[t._v(t._s(option.text))])})),0),t._v(" "),n("div",{staticClass:"line",class:t.active.animate&&0===o||0!==o?"":"animate",style:[0!==o?{width:-t.panels[o-1].progress+"%",transition:1.5*t.active.t+"s"}:{transition:1.5*t.active.t+"s",transitionDelay:1.7*t.active.t+"s"}]}),t._v(" "),n("strong",{class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:1.5*t.active.t+"s"}},[t._v("zapraszam do współpracy")]),t._v(" "),n("small",{class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:1.7*t.active.t+"s"}},[t._v("Barbara Semeniuk")])])]),t._v(" "),o!==t.panels.length-1?n("div",{staticClass:"slider",class:t.active.animate&&0===o||0!==o?"":"animate",style:{transition:t.active.t+"s",transitionDelay:1.8*t.active.t+"s"}},[n("div",{staticClass:"dot"})]):t._e()])}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"info"},[n("p",[t._v("Telefon: "),n("small",[t._v("508 35 99 33")])]),t._v(" "),n("p",[t._v("e-mail: "),n("small",[t._v("barbara.semeniuk@wp.pl")])]),t._v(" "),n("p",[t._v("Godziny otwarcia: "),n("small",[t._v("Pon-Pt 10:00-18:00")]),t._v(" ( po uprzednim umówieniu się telefonicznie )")]),t._v(" "),n("p",[t._v("Adres: "),n("small",[t._v("ul. J. Kwiatka 29 lok 3. 09-402 Płock")])]),t._v(" "),n("p",[t._v("NIP: "),n("small",[t._v("7742569710")])])])])}],!1,null,null,null);e.a=v.exports},151:function(t,e,n){"use strict";var o={},r=n(17),c={components:{navMobile:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-mobile"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("o mnie")]),this._v(" "),e("nuxt-link",{attrs:{to:"/services"}},[this._v("usługi")]),this._v(" "),e("nuxt-link",{attrs:{to:"/contact"}},[this._v("kontakt")])],1)}),[],!1,null,null,null).exports}},l=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navMobile"),this._v("\n    mobile version\n")],1)}),[],!1,null,null,null);e.a=l.exports},155:function(t,e,n){"use strict";n.r(e);var o=n(150),r=n(151),c={head:function(){return{title:"Adwokat Płock. Kancelaria Adwokacka Barbara Semeniuk - Płock i okolice"}},data:function(){return{panels:[{progress:0,title:"Adwokat w Płocku",subtitle:"Kancelaria Adwokacka Barbara Semeniuk - Płock i okolice",img:"url('/images/img1.jpeg')",text:"Wizyta na stronie mojej kancelarii wskazuje,że potrzebujecie Państwo rozwiązania problemu, który wymaga pomocy prawnika.Poniżej przedstawiam informacje dotyczące mojego doświadczenia zawodowego i wykształcenia,które mam nadzieję przekonają Państwa do skorzystania z usług kancelarii."},{progress:0,title:"Doświadczenie zawodowe",subtitle:"Od ukończenia studiów w 1998 roku aktywnie działam w zawodzie i dalej się rozwijam.",img:"url('/images/img2.jpeg')",options:[{text:"Studia prawnicze ukończone z wynikiem bardzo dobrym."},{text:"Ukończona aplikacja sądowa i zdany egzamin sędziowski."},{text:"Trzy lata pracy w sądzie."},{text:"10 lat prowadzenia kancelarii jako adwokat."},{text:"6 lat w obsłudze prawnej jednostek samorządu terytorialnego."},{text:"Członek rady nadzorczej."}]},{progress:0,title:"Usługi",subtitle:"Celem kancelari jest świadczenie klientom indywidualnym oraz biznesowym kompleksowej, rzetelnej i skutecznej obsługi oraz pomocy prawnej w podejmowaniu trudnych decyzji.",img:"url('/images/img3.jpeg')",options:[{text:"Udzielanie porad prawnych."},{text:"Zastępstwo procesowe przed sądami, organami ścigania, organami administracji publicznej."},{text:"Stała obsługa prawna."},{text:"Sporządzanie pism procesowych, w tym: pozwów, wniosków, apelacji, zażaleń, skarg i innych."},{text:"Reprezentacja przed sądem i prokuratorem."},{text:"Dochodzenie należności od dłużników."}]},{progress:0,title:"Adwokat w Płocku",subtitle:"zakres usług świadczonych przez kancelarię Prawną Barbara Semeniuk w Płocku i okolicach",img:"url('/images/img4.jpeg')",options:[{text:"Prawo Cywilne"},{text:"Prawo Gospodarcze"},{text:"Prawo Administracyjne"},{text:"Prawo Karne"},{text:"Prawo Rodzinne"},{text:"Prawo Spadkowe"}]}],position:{paused:!0,firstPos:null,lastPos:null,next:!0,back:!1},active:{i:0,t:2.2,animate:!1}}},computed:{mobile:function(){return this.$store.getters.mobile}},components:{desktop:o.a,mobile:r.a}},l=n(17),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.mobile?e("mobile"):e("desktop",{attrs:{panels:this.panels,position:this.position,active:this.active}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);