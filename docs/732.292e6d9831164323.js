"use strict";(self.webpackChunkprodapt_weather_app=self.webpackChunkprodapt_weather_app||[]).push([[732],{6732:(vt,w,i)=>{i.r(w),i.d(w,{WeatherModule:()=>gt});var m=i(6814),x=i(1303),d=i(6223),M=i(3620),O=i(2181),o=i(2169);const f=(0,o.PH)("[Locations] Load Data",(0,o.Ky)()),y=(0,o.PH)("[Locations] Load Data Success",(0,o.Ky)()),Z=(0,o.PH)("[Locations] Load Data Failure",(0,o.Ky)()),C=(0,o.PH)("[SelectedLocation] Load Data",(0,o.Ky)()),g=(0,o.PH)("[Weather] Load Data",(0,o.Ky)()),T=(0,o.PH)("[Weather] Load Data Success",(0,o.Ky)()),L=(0,o.PH)("[Weather] Load Data Failure",(0,o.Ky)()),H=(0,o.ZF)("locations"),N=(0,o.P1)(H,e=>e.data),b=(0,o.ZF)("selectedLocation"),I=(0,o.P1)(b,e=>e.data),P=(0,o.ZF)("weather"),J=(0,o.P1)(P,e=>e.data);var r=i(5313),t=i(5879),D=i(9481),Q=i(3680),S=i(9157),E=i(2032),W=i(3566),B=i(617);function K(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-option",7),t.NdJ("click",function(){const l=t.CHM(a).$implicit,h=t.oxw();return t.KtG(h.getWeather(l))}),t._uU(1),t.qZA()}if(2&e){const a=n.$implicit;t.Q6J("value",a.name),t.xp6(1),t.AsE(" ",a.name," - ",a.country," ")}}function z(e,n){if(1&e&&(t.TgZ(0,"div")(1,"h1",22),t._uU(2),t.qZA(),t.TgZ(3,"h4",23),t._uU(4),t.ALo(5,"date"),t.TgZ(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"h1",24),t._uU(9),t._UZ(10,"img",25),t.qZA(),t.TgZ(11,"span",26),t._uU(12),t.qZA(),t.TgZ(13,"span",26),t._uU(14),t.qZA()()),2&e){const a=n.ngIf,s=t.oxw().ngIf;t.xp6(2),t.AsE("",null==a?null:a.name,", ",a.country,""),t.xp6(2),t.hij("",t.xi3(5,8,1e3*s.current.dt,"short")," - "),t.xp6(3),t.Oqu(s.current.weather[0].description),t.xp6(2),t.hij(" ",s.current.temp," C "),t.xp6(1),t.Q6J("src","https://openweathermap.org/img/w/"+s.current.weather[0].icon+".png",t.LSH),t.xp6(2),t.hij("Feels like ",s.current.feels_like," C"),t.xp6(2),t.hij(" Humidity: ",s.current.humidity,"")}}function j(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"th",27),t.NdJ("click",function(){t.CHM(a);const c=t.oxw(2);return t.KtG(c.reverseSort())}),t._uU(1,"Day"),t.qZA()}}function G(e,n){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.ALo(2,"date"),t._UZ(3,"img",25),t._uU(4),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij("",t.xi3(2,3,1e3*a.dt,"EEE, MMM d")," "),t.xp6(2),t.Q6J("src","https://openweathermap.org/img/w/"+a.weather[0].icon+".png",t.LSH),t.xp6(1),t.hij(" ",a.weather[0].description," ")}}function R(e,n){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Maximum Tempreture"),t.qZA())}function k(e,n){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.temp.max)}}function q(e,n){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Minimum Tempreture"),t.qZA())}function X(e,n){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.temp.min)}}function V(e,n){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Humidity"),t.qZA())}function tt(e,n){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.humidity)}}function et(e,n){1&e&&t._UZ(0,"tr",30)}function at(e,n){1&e&&t._UZ(0,"tr",31)}function ot(e,n){if(1&e&&(t.TgZ(0,"div")(1,"div",8),t.YNc(2,z,15,11,"div",9),t.ALo(3,"async"),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"div",10)(6,"h2"),t._uU(7,"5 days forcast:"),t.qZA(),t.TgZ(8,"div",11)(9,"table",12),t.ynx(10,13),t.YNc(11,j,2,0,"th",14),t.YNc(12,G,5,6,"td",15),t.BQk(),t.ynx(13,16),t.YNc(14,R,2,0,"th",17),t.YNc(15,k,2,1,"td",15),t.BQk(),t.ynx(16,18),t.YNc(17,q,2,0,"th",17),t.YNc(18,X,2,1,"td",15),t.BQk(),t.ynx(19,19),t.YNc(20,V,2,0,"th",17),t.YNc(21,tt,2,1,"td",15),t.BQk(),t.YNc(22,et,1,0,"tr",20),t.YNc(23,at,1,0,"tr",21),t.qZA()()()()),2&e){const a=t.oxw();t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,a.selectedLocation$)),t.xp6(7),t.Q6J("dataSource",a.forcastDataSource),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns)}}function nt(e,n){1&e&&(t.TgZ(0,"div",32),t._UZ(1,"img",33),t.qZA())}const st=[{path:"",component:(()=>{class e{constructor(a){this.store=a,this.searchInput=new d.NI,this.forcastDataSource=new r.by,this.displayedColumns=["date","minTemp","maxTemp","humidity"]}ngOnInit(){this.watchTheState(),this.searchTextSubscriber(),this.weatherSubscription=this.weatherData$.subscribe(a=>{this.forcastDataSource.data=a?.daily})}watchTheState(){this.locations$=this.store.pipe((0,o.Ys)(N)),this.weatherData$=this.store.pipe((0,o.Ys)(J)),this.selectedLocation$=this.store.pipe((0,o.Ys)(I)),this.selectedLocationSubscription=this.selectedLocation$.subscribe(a=>{this.searchInput.patchValue(a?.name)})}searchTextSubscriber(){this.searchLocationSubscription=this.searchInput.valueChanges.pipe((0,M.b)(300),(0,O.h)(a=>!!a)).subscribe(a=>this.store.dispatch(f({searchText:a})))}getWeather(a){this.store.dispatch(C({data:a})),this.store.dispatch(g({lat:a.lat,lon:a.lon,numberOfDays:5}))}reverseSort(){this.forcastDataSource.data=this.forcastDataSource.data.slice().reverse()}ngOnDestroy(){this.searchLocationSubscription.unsubscribe(),this.selectedLocationSubscription.unsubscribe(),this.weatherSubscription.unsubscribe()}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(o.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-show-weather"]],decls:14,vars:9,consts:[["appearance","fill",2,"width","100%"],["matPrefix",""],["matInput","","type","text","placeholder","Search for your city",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"value","click"],[1,"container"],[4,"ngIf"],[1,"forcast"],[1,"mat-elevation-z8"],["mat-table","","mat-table","","matSortDisableClear","","matSort","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",3,"click",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","maxTemp"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","minTemp"],["matColumnDef","humidity"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"city"],[1,"date","text-danger"],[1,"temp"],["alt","Weather Icon",3,"src"],[1,"feels-like"],["mat-header-cell","","mat-sort-header","",3,"click"],["mat-cell",""],["mat-header-cell",""],["mat-header-row",""],["mat-row",""],[1,"no-data"],["src","../../../assets/imgs/no-data.svg"]],template:function(s,c){if(1&s&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2,"Search for your city"),t.qZA(),t.TgZ(3,"mat-icon",1),t._uU(4,"search"),t.qZA(),t._UZ(5,"input",2),t.TgZ(6,"mat-autocomplete",null,3),t.YNc(8,K,2,3,"mat-option",4),t.ALo(9,"async"),t.qZA()(),t.YNc(10,ot,24,6,"div",5),t.ALo(11,"async"),t.YNc(12,nt,2,0,"ng-template",null,6,t.W1O)),2&s){const l=t.MAs(7),h=t.MAs(13);t.xp6(5),t.Q6J("formControl",c.searchInput)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(9,5,c.locations$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(11,7,c.weatherData$))("ngIfElse",h)}},dependencies:[m.sg,m.O5,d.Fj,d.JJ,d.oH,D.XC,Q.ey,D.ZL,S.KE,S.hX,S.qo,E.Nt,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,W.YE,W.nU,B.Hw,m.Ov,m.uU],styles:[".current-weather[_ngcontent-%COMP%]{width:100%;height:100%}.city[_ngcontent-%COMP%]{font-size:30px;font-weight:700}.date[_ngcontent-%COMP%]{margin-top:-15px}.temp[_ngcontent-%COMP%]{font-size:40px;margin-top:20px;font-weight:700}.feels-like[_ngcontent-%COMP%]{font-size:20px;color:#7c7c7c;font-weight:400}.forcast[_ngcontent-%COMP%]{margin-top:30px}.no-data[_ngcontent-%COMP%]{width:50%;align-items:center;display:block;margin:auto}"]})}return e})()}];let it=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[x.Bz.forChild(st),x.Bz]})}return e})();var ct=i(2123),p=i(5154);const v={data:null,loading:!1,error:null},rt=(0,o.Lq)(v,(0,o.on)(f,e=>({...e,error:null,loading:!0})),(0,o.on)(y,(e,{data:n})=>({...e,data:n,loading:!1})),(0,o.on)(Z,(e,{error:n})=>({...e,error:n,loading:!1}))),ht=(0,o.Lq)(v,(0,o.on)(C,(e,{data:n})=>({...e,data:n}))),lt=(0,o.Lq)(v,(0,o.on)(g,e=>({...e,loading:!0,error:null})),(0,o.on)(T,(e,{data:n})=>({...e,data:n,loading:!1})),(0,o.on)(L,(e,{error:n})=>({...e,error:n,loading:!1})));var A=i(4664),_=i(7398),U=i(6306),F=i(2096),pt=i(9862);const Y="https://api.openweathermap.org/",$="abe1eb51289c21c167c66ce790c2fac3";let mt=(()=>{class e{constructor(a){this.http=a}searchLocations(a){return this.http.get(`${Y}geo/1.0/direct`,{params:{q:a,limit:5,appid:$}})}getWeather(a,s){const c={lat:a.toString(),lon:s.toString(),exclude:"hourly,minutely,alerts",units:"metric",appid:$};return this.http.get(`${Y}data/2.5/onecall`,{params:c})}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(pt.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ut=i(2939);let dt=(()=>{class e{constructor(a){this.snackBar=a}showSuccess(a){this.snackBar.open(a,"Close",{duration:3e3,panelClass:["success-toast"]})}showError(a){this.snackBar.open(a,"Close",{duration:3e3,panelClass:["error-toast"]})}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(ut.ux))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ft=(()=>{class e{constructor(a,s,c){this.actions$=a,this.openWeatherService=s,this.toastService=c,this.loadLocationsData$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(f),(0,A.w)(({searchText:l})=>this.openWeatherService.searchLocations(l).pipe((0,_.U)(h=>y({data:h})),(0,U.K)(h=>(this.toastService.showError(h),(0,F.of)(Z({error:h})))))))),this.loadWeatherData$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(g),(0,A.w)(({lat:l,lon:h,numberOfDays:St})=>this.openWeatherService.getWeather(l,h).pipe((0,_.U)(u=>(this.toastService.showSuccess("Weather data has been loaded successfully"),T({data:{...u,daily:u.daily.slice(1,St+1)}}))),(0,U.K)(u=>(this.toastService.showError(u),(0,F.of)(L({error:u}))))))))}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(p.eX),t.LFG(mt),t.LFG(dt))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})(),gt=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[m.ez,it,ct.m,o.Aw.forFeature("locations",rt),o.Aw.forFeature("selectedLocation",ht),o.Aw.forFeature("weather",lt),p.sQ.forFeature([ft])]})}return e})()}}]);