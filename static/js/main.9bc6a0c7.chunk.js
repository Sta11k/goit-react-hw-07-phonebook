(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={radio__btn:"Form_radio__btn__2kniY",title:"Form_title__YRdrH"}},12:function(t,e,n){t.exports={contacts__list:"Todolist_contacts__list__313fp",item:"Todolist_item__1CEw3"}},20:function(t,e,n){t.exports={label:"Filter_label__nhQP0",input:"Filter_input__2NmL9"}},32:function(t,e,n){},33:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),i=(n(31),n(32),n(33),n(8)),s=n(10),u=n.n(s),l=n(21),d=n(17),b=n(22),j=n(6),O=Object(b.a)({reducerPath:"contactsApi",tagTypes:["Contacts"],baseQuery:Object(j.d)({baseUrl:"https://61935e66d3ae6d0017da850e.mockapi.io/"}),endpoints:function(t){return{fetchContact:t.query({query:function(){return"/contacts"},providesTags:function(t){return t?[].concat(Object(d.a)(t.map((function(t){return{type:"Contacts",id:t.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContacts:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:Object(l.a)({},t)}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),deleteContacts:t.mutation({query:function(t){return{url:"contacts/".concat(t),method:"DELETE"}},invalidatesTags:[{type:"Contacts",id:"LIST"}]})}}}),m=O.useFetchContactQuery,p=O.useAddContactsMutation,h=O.useDeleteContactsMutation,f=n(2);var x=function(t){t.contact;var e=p(),n=Object(i.a)(e,1)[0],c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),b=d[0],j=d[1],O=Object(a.useState)("Other"),m=Object(i.a)(O,2),h=m[0],x=m[1];return Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n({name:o,phone:b,association:h}),s(""),j(""),x("Other")},className:u.a.m,children:[Object(f.jsx)("h2",{className:u.a.title,children:"Phonebook"}),Object(f.jsxs)("label",{className:u.a.form__name,children:["Name",Object(f.jsx)("input",{onChange:function(t){return s(t.currentTarget.value)},type:"text",value:o,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:u.a.form__number,children:["Number",Object(f.jsx)("input",{onChange:function(t){return j(t.currentTarget.value)},type:"tel",value:b,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsxs)("div",{className:u.a.radio__btn,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Work",onChange:function(t){return x(t.currentTarget.value)},checked:"Work"===h}),"Work"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Family",onChange:function(t){return x(t.currentTarget.value)},checked:"Family"===h}),"Family"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Friends",onChange:function(t){return x(t.currentTarget.value)},checked:"Friends"===h}),"Friends"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"radio",name:"association",value:"Other",onChange:function(t){return x(t.currentTarget.value)},checked:"Other"===h}),"Other"]})]}),Object(f.jsx)("button",{type:"submit",children:"Add contacts"})]})},_=n(12),v=n.n(_);var y=function(t){var e=t.contact,n=h(),a=Object(i.a)(n,1)[0];return Object(f.jsx)("ul",{className:v.a.contacts__list,children:e.map((function(t){var e=t.id,n=t.name,c=t.phone,r=t.association;return Object(f.jsxs)("li",{className:v.a.item,children:[" ",Object(f.jsxs)("p",{className:v.a.name__contact,children:["Association: ",r," | ",Object(f.jsxs)("span",{children:[" name: ",n," | "]}),Object(f.jsxs)("span",{children:["number: ",c," |"]})]}),Object(f.jsxs)("button",{className:v.a.btn,type:"button",onClick:function(){return a(e)},children:[" ","DELETE contact"]})]},e)}))})},g=n(20),C=n.n(g),T=n(1),k=n(24),N=n.n(k),A=(Object(T.createAction)("contacts/add",(function(t,e,n){return{payload:{id:N.a.generate(),name:t,number:e,association:n}}})),Object(T.createAction)("contacts/delete"),Object(T.createAction)("filter/value")),F=n(5),S=function(t){return t.contacts.filter};var E=function(){var t=Object(F.d)(),e=Object(F.e)(S);return Object(f.jsxs)("label",{className:C.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:C.a.input,type:"text",value:e,onChange:function(e){return t(A(e.target.value))}})]})};function L(){var t=m().data;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(x,{}),Object(f.jsx)(E,{contact:t}),t&&Object(f.jsx)(y,{contact:t})]})}var w=n(16),q=n(26),z=n(25),I=n.n(z),P=n(9),D=n(4),M=Object(T.createReducer)([],{"contacts/add":function(t,e){var n=e.payload;return[].concat(Object(d.a)(t),[n])},"contacts/delete":function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))}}),R=Object(T.createReducer)("",{"filter/value":function(t,e){return e.payload}}),J=Object(D.combineReducers)({contact:M,filter:R}),Q=Object(T.configureStore)({reducer:Object(w.a)({contacts:J},O.reducerPath,O.reducer),middleware:function(t){return t({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}}).concat(I.a).concat(O.middleware)},devTools:!1});Object(q.setupListeners)(Q.dispatch),o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F.a,{store:Q,children:Object(f.jsx)(L,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9bc6a0c7.chunk.js.map