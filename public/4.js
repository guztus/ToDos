(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(s,a,o){"use strict";var t=o(70);o.n(t).a},192:function(s,a,o){(s.exports=o(8)(!1)).push([s.i,"\n.row[data-v-36476700] {\n  padding-top: 100px;\n}\n",""])},258:function(s,a,o){"use strict";o.r(a);var t=o(2),r={name:"Login",data:function(){return{password:"",newPassword:"",newPasswordAgain:"",data:null,showError:!1,error:null}},methods:{onSubmit:function(s){var a=this;this.newPassword!==this.newPasswordAgain?(s.preventDefault(),this.showError=!0,this.error="Paroles nesakrīt."):(this.showError=!1,s.preventDefault(),axios.post("api/change-password",{password:this.password,newPassword:this.newPassword,sessionId:sessionStorage.getItem("sessionId")}).then((function(s){a.data=s.data,void 0!==s.data.Errors?t.a.error(s.data.Errors[0].ClientMessage):(a.$store.commit("setExpiryTime"),a.$store.state.kiest.length)})).catch((function(s){console.log(s)})))}}},e=(o(191),o(3)),i={name:"ChangePasswordView",components:{ChangePassword:Object(e.a)(r,(function(){var s=this,a=s.$createElement,o=s._self._c||a;return o("div",{staticClass:"container"},[o("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:s.showError,callback:function(a){s.showError=a},expression:"showError"}},[s._v(s._s(s.error))]),s._v(" "),o("div",{staticClass:"col-md-6 offset-md-3"},[o("b-form",{on:{submit:s.onSubmit}},[o("b-form-group",{attrs:{id:"password-group",label:"Jūsu esošā parole:","label-for":"password-input",description:"Ievadiet veco paroli"}},[o("b-form-input",{attrs:{id:"password-group",type:"password",required:"",autocomplete:"current-password",oninvalid:"this.setCustomValidity('Lūdzu aizpildiet šo lauku.')",onchange:"this.setCustomValidity('')",placeholder:"********"},model:{value:s.password,callback:function(a){s.password=a},expression:"password"}})],1),s._v(" "),o("b-form-group",{attrs:{id:"new-password-group",label:"Jaunā parole:","label-for":"new-password-input",description:"Parolei jāsākas ar lielo burtu, nedrīkst saturēt jebkādus Jūsu datus, 9-30 simboli, vismaz viens lielais un viens mazais burts, vismaz viens cipars un #, $ vai _ simbols."}},[o("b-form-input",{attrs:{id:"new-password-group",type:"password",required:"",autocomplete:"new-password",oninvalid:"this.setCustomValidity('Lūdzu aizpildiet šo lauku.')",onchange:"this.setCustomValidity('')",placeholder:"********"},model:{value:s.newPassword,callback:function(a){s.newPassword=a},expression:"newPassword"}})],1),s._v(" "),o("b-form-group",{attrs:{id:"new-password-again-group",label:"Jaunā parole vēlreiz:","label-for":"new-password-again-input",description:"Ievadiet jauno paroli vēlreiz"}},[o("b-form-input",{attrs:{id:"new-password-again-group",type:"password",required:"",autocomplete:"new-password",oninvalid:"this.setCustomValidity('Lūdzu aizpildiet šo lauku.')",onchange:"this.setCustomValidity('')",placeholder:"********"},model:{value:s.newPasswordAgain,callback:function(a){s.newPasswordAgain=a},expression:"newPasswordAgain"}})],1),s._v(" "),o("b-button",{staticClass:"submit-button",attrs:{type:"submit"}},[s._v("Atjaunot paroli")])],1)],1)],1)}),[],!1,null,"36476700",null).exports}},n=Object(e.a)(i,(function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"content"},[a("ChangePassword")],1)}),[],!1,null,null,null);a.default=n.exports},70:function(s,a,o){var t=o(192);"string"==typeof t&&(t=[[s.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(9)(t,r);t.locals&&(s.exports=t.locals)}}]);
//# sourceMappingURL=4.js.map