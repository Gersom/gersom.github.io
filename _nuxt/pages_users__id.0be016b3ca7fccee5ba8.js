webpackJsonp([2],{FYwz:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"UserId ScreenTransition"},[s("div",{staticClass:"container my-6 mx-auto flex flex-col items-center justify-center"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"mr-6"},[s("figure",{staticClass:"text-center"},[s("img",{staticClass:"UserId__img block mb-4",attrs:{src:t.usersSelected.avatar_url}}),s("caption",{staticClass:"block text-white"},[t._v(t._s(t.usersSelected.name))]),s("p",{staticClass:"block text-white"},[t._v(t._s(t.usersSelected.login))])])]),s("div",{staticClass:"data text-left"},[s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Blog:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.blog))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Company:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.company))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Followers:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.followers))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Following:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.following))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Gists:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.public_gists))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Location:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.location))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Profile:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.html_url))])]),s("p",[s("span",{staticClass:"text-grey-darker"},[t._v("Repositories:")]),s("span",{staticClass:"text-white"},[t._v(t._s(t.usersSelected.public_repos))])])])]),s("div",{staticClass:"flex mt-8"},[s("a",{staticClass:"no-underline block mr-2 flex items-center justify-center border-solid border-red text-red w-32 h-8 hover:bg-red hover:text-white text-sm",attrs:{href:t.usersSelected.html_url,target:"_blank"}},[t._v("Github")]),s("button",{staticClass:"mr-2 border-solid border-red text-red w-32 h-8 hover:bg-red hover:text-white text-sm",on:{click:function(e){t.$router.push({name:"users"})}}},[t._v("Go Back!")])])])])};a._withStripped=!0;var r={render:a,staticRenderFns:[]};e.a=r},GDKD:function(t,e,s){"use strict";var a=s("Dd8w"),r=s.n(a),i=s("NYxO");e.a={methods:r()({},Object(i.mapActions)(["requestUserId"])),computed:r()({},Object(i.mapGetters)(["usersSelected"])),created:function(){this.requestUserId(this.$route.params.id)}}},Mxz7:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".UserId{background-color:#1b1a1f;overflow:auto}.UserId>*{min-height:100vh}.UserId__img{height:10rem;width:auto}",""])},N0hO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("GDKD"),r=s("FYwz"),i=!1;var l=function(t){i||s("QUi+")},c=s("VU/8")(a.a,r.a,!1,l,null,null);c.options.__file="pages\\users\\_id.vue",e.default=c.exports},"QUi+":function(t,e,s){var a=s("Mxz7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("702858c2",a,!1,{sourceMap:!1})}});