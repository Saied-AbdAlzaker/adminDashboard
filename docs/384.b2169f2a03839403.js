"use strict";(self.webpackChunkadminDashboard=self.webpackChunkadminDashboard||[]).push([[384],{5384:(P,c,a)=>{a.r(c),a.d(c,{AdminModule:()=>O});var u=a(6814),t=a(5879),l=a(1941),d=a(3224),p=a(3680),g=a(2296);let m=(()=>{class e{constructor(){this.foods=[{value:"steak-0",viewValue:"Steak"},{value:"pizza-1",viewValue:"Pizza"},{value:"tacos-2",viewValue:"Tacos"}],this.selected="option2"}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],decls:64,vars:1,consts:[[1,"container"],[1,"text-second","my-3"],[1,"row"],[1,"col-md-5"],["type","text","placeholder","Search...",1,"form-controll","w-100","px-2","py-3","mx-3","rounded-5","border-1"],[1,"col-md-4"],[1,"w-100"],[1,"text-white"],["value","option1"],["value","option2"],["value","option3"],[1,"col-md-3"],["mat-button","",1,"w-75","text-white","px-5","py-4","rounded-5"],[1,"table","table-hover","my-3"],[1,"bg-second","text-white"],[1,"rounded-left-top"],[1,"rounded-right-top"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"h3",1),t._uU(2,"Home >> Product"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label",7),t._uU(9,"Choose Category"),t.qZA(),t.TgZ(10,"mat-select",7)(11,"mat-option"),t._uU(12,"None"),t.qZA(),t.TgZ(13,"mat-option",8),t._uU(14,"Option 1"),t.qZA(),t.TgZ(15,"mat-option",9),t._uU(16,"Option 2"),t.qZA(),t.TgZ(17,"mat-option",10),t._uU(18,"Option 3"),t.qZA()()(),t.TgZ(19,"p"),t._uU(20),t.qZA()(),t.TgZ(21,"div",11)(22,"button",12),t._uU(23,"Create"),t.qZA()()(),t.TgZ(24,"table",13)(25,"thead",14)(26,"th",15),t._uU(27,"ID"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Category Name"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"product Name"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"New Price"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Old Price"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Extra"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Hideden"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Img"),t.qZA(),t.TgZ(42,"th",16),t._uU(43,"Action"),t.qZA()(),t.TgZ(44,"tbody")(45,"tr")(46,"td"),t._uU(47,"ID"),t.qZA(),t.TgZ(48,"td"),t._uU(49,"Category Name"),t.qZA(),t.TgZ(50,"td"),t._uU(51,"product Name"),t.qZA(),t.TgZ(52,"td"),t._uU(53,"New Price"),t.qZA(),t.TgZ(54,"td"),t._uU(55,"Old Price"),t.qZA(),t.TgZ(56,"td"),t._uU(57,"Extra"),t.qZA(),t.TgZ(58,"td"),t._uU(59,"Hideden"),t.qZA(),t.TgZ(60,"td"),t._uU(61,"Img"),t.qZA(),t.TgZ(62,"td"),t._uU(63,"Action"),t.qZA()()()()()),2&o&&(t.xp6(20),t.hij("You selected: ",r.selected,""))},dependencies:[l.KE,l.hX,d.gD,p.ey,g.lW]})}return e})();var h=a(8645),Z=a(3620),f=a(9862);let v=(()=>{class e{constructor(n){this._http=n,this.imageUrl="http://foodsystem.tryasp.net"}getCategory(n){return this._http.get("http://foodsystem.tryasp.net/Category",{params:n})}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(f.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var i=a(6223);function A(e,S){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",10),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t._UZ(11,"td"),t.qZA()),2&e){const n=S.$implicit,o=t.oxw();t.xp6(2),t.Oqu(n.id),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Q6J("src",o.imagePath+n.image,t.LSH)("alt",n.name),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.Oqu(n.isDelete)}}let T=(()=>{class e{constructor(n){this._adminServices=n,this.categoryList=[],this.imagePath="",this.searchValue="",this.searchSubject=new h.x,this.imagePath=n.imageUrl}ngOnInit(){this.getAllCategory(),this.searchSubject.pipe((0,Z.b)(1e3)).subscribe({next:n=>{console.log(n),this.getAllCategory()}})}getAllCategory(){this._adminServices.getCategory({name:this.searchValue}).subscribe({next:o=>{console.log(o),this.categoryList=o}})}onSearchInputChange(){this.searchSubject.next(this.searchValue)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(v))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-category"]],decls:23,vars:2,consts:[[1,"container"],[1,"text-second","my-3"],[1,"d-flex"],["type","text","placeholder","Search...",1,"form-controll","w-75","mx-3","rounded-5","px-2","border-1",3,"ngModel","ngModelChange","keyup"],[1,"btn","bg-main","px-5","text-white","rounded-5"],[1,"table","table-hover","my-5"],[1,"bg-second","text-white"],[1,"rounded-left-top"],[1,"rounded-right-top"],[4,"ngFor","ngForOf"],[1,"imgWidth",3,"src","alt"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"h3",1),t._uU(2,"Home >> Category"),t.qZA(),t.TgZ(3,"div",2)(4,"input",3),t.NdJ("ngModelChange",function(L){return r.searchValue=L})("keyup",function(){return r.onSearchInputChange()}),t.qZA(),t.TgZ(5,"button",4),t._uU(6,"Create"),t.qZA()(),t.TgZ(7,"table",5)(8,"thead",6)(9,"th",7),t._uU(10,"ID"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Image"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Desc"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Statues"),t.qZA(),t.TgZ(19,"th",8),t._uU(20,"Action"),t.qZA()(),t.TgZ(21,"tbody"),t.YNc(22,A,12,6,"tr",9),t.qZA()()()),2&o&&(t.xp6(4),t.Q6J("ngModel",r.searchValue),t.xp6(18),t.Q6J("ngForOf",r.categoryList))},dependencies:[u.sg,i.Fj,i.JJ,i.On],styles:[".imgWidth[_ngcontent-%COMP%]{width:50px}"]})}return e})(),y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-order"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"order works!"),t.qZA())}})}return e})(),U=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-user"]],decls:2,vars:0,template:function(o,r){1&o&&(t.TgZ(0,"p"),t._uU(1,"user works!"),t.qZA())}})}return e})();var s=a(4581);let b=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar"]],decls:24,vars:0,consts:[[1,"bg-main","text-white","text-center","vh-100"],[1,"container"],[1,"icon","py-5"],[1,"sidebar"],[1,"list-type"],[1,"my-3"],["href","admin/category",1,"text-decoration-none","text-white"],[1,"fa-solid","fa-layer-group"],["href","admin/product",1,"text-decoration-none","text-white"],[1,"fa-brands","fa-product-hunt"],["href","admin/order",1,"text-decoration-none","text-white"],[1,"fa-solid","fa-list"],["href","admin/user",1,"text-decoration-none","text-white"],[1,"fa-solid","fa-user"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"div",2)(4,"h2"),t._uU(5,"LOGO"),t.qZA()()(),t.TgZ(6,"div",3)(7,"ul",4)(8,"li",5)(9,"a",6),t._UZ(10,"i",7),t._uU(11," Category"),t.qZA()(),t.TgZ(12,"li",5)(13,"a",8),t._UZ(14,"i",9),t._uU(15," Product"),t.qZA()(),t.TgZ(16,"li",5)(17,"a",10),t._UZ(18,"i",11),t._uU(19," Order"),t.qZA()(),t.TgZ(20,"li",5)(21,"a",12),t._UZ(22,"i",13),t._uU(23," User"),t.qZA()()()()()())}})}return e})(),x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-navbar"]],decls:18,vars:0,consts:[[1,"navbar","navbar-expand-lg","border","border-top-0","border-start-0","border-end-0","border-primary"],[1,"container"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0","border-1"],[1,"nav-item"],["routerLink","home","routerLinkActive","bg-info text-white",1,"nav-link","fw-bold","mx-3","cursor"],["routerLink","message","routerLinkActive","bg-info text-white",1,"nav-link","fw-bold","mx-3","cursor"],["routerLink","notifiaction","routerLinkActive","bg-info text-white",1,"nav-link","fw-bold","mx-3","cursor"],["routerLink","language","routerLinkActive","bg-info text-white",1,"nav-link","fw-bold","mx-3","cursor"]],template:function(o,r){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),t._UZ(3,"span",3),t.qZA(),t.TgZ(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Profile"),t.qZA()(),t.TgZ(9,"li",6)(10,"a",8),t._uU(11,"Message"),t.qZA()(),t.TgZ(12,"li",6)(13,"a",9),t._uU(14,"Notification"),t.qZA()(),t.TgZ(15,"li",6)(16,"a",10),t._uU(17,"Language"),t.qZA()()()()()())},styles:[".nav-link[_ngcontent-%COMP%]{color:#1f2071}.cursor[_ngcontent-%COMP%]{cursor:pointer}"]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin"]],decls:6,vars:0,consts:[[1,"row"],[1,"col-md-2"],[1,"col-md-10"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-sidebar"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-navbar")(5,"router-outlet"),t.qZA()())},dependencies:[s.lC,b,x]})}return e})();var q=a(2722),_=a(3980);const w=[{path:"",component:C,children:[{path:"",redirectTo:"product",pathMatch:"full"},{path:"product",canActivate:[(()=>{class e{constructor(n,o){this._Router=n,this._AuthService=o,o.getProfile()}canActivate(n,o){return null!==localStorage.getItem("userToken")&&"SuperAdmin"==localStorage.getItem("role")||(this._Router.navigate(["/admin"]),!1)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(s.F0),t.LFG(_.e))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()],title:"Home | product",component:m},{path:"category",title:"Home | category",component:T},{path:"order",title:"Home | order",component:y},{path:"user",title:"Home | user",component:U}]}];let O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[u.ez,s.Bz.forChild(w),q.m]})}return e})()}}]);