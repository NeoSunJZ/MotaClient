webpackJsonp([2],{104:function(t,e){},110:function(t,e,o){t.exports=o.p+"e6e27fc741e1f03524e8f144cd683707.png"},111:function(t,e,o){t.exports=o.p+"5f9b26fa93d5dea2254c05c824b47ec8.svg"},114:function(t,e,o){t.exports=o.p+"9c1debe5eba3825b7c44987b296c3115.png"},121:function(t,e,o){t.exports=o.p+"ff54adc3b50a8728b68f5ecc3cc548cd.svg"},127:function(t,e,o){t.exports=o.p+"36b7c0a26f3a5ee84ce1c0083c337e5a.svg"},138:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",{staticClass:"layout",nativeOn:{click:function(e){t.countdownReset()},mousedown:function(e){return t.touchstart(e)}}},[n("Content",{staticStyle:{height:"100%",padding:"2%"},style:this.$root.background},[n("v-exception",{ref:"exceptionModel"}),t._v(" "),n("Modal",{attrs:{width:"720px"},model:{value:t.adminModel,callback:function(e){t.adminModel=e},expression:"adminModel"}},[n("p",{staticStyle:{color:"#2b85e4","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),n("span",[t._v("管理员模式")])],1),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"column"}},[n("img",{attrs:{src:o(79),width:"120"}}),t._v(" "),n("p",{staticStyle:{"text-align":"center","font-size":"18px",margin:"10px"}},[t._v("请选择需要执行的操作（设备ID:"+t._s(this.$root.deviceID)+"）")]),t._v(" "),n("div",{staticStyle:{"flex-direction":"row"}},[n("Button",{staticStyle:{margin:"10px"},attrs:{type:"warning",size:"large"},on:{click:t.exitAndShutdown}},[t._v("立刻关闭设备电源(60s倒计时)")]),t._v(" "),n("Button",{staticStyle:{margin:"10px"},attrs:{type:"warning",size:"large"},on:{click:t.exitAndRebooting}},[t._v("立刻重启设备(60s倒计时)")]),t._v(" "),n("Button",{staticStyle:{margin:"10px"},attrs:{type:"warning",size:"large"},on:{click:t.exit}},[t._v("立刻退出MOTA控制系统")]),t._v(" "),n("Button",{staticStyle:{margin:"10px"},attrs:{type:"warning",size:"large"},on:{click:t.stopServer}},[t._v("立刻停用设备")])],1)])]),t._v(" "),n("Modal",{attrs:{fullscreen:""},model:{value:t.aboutModel,callback:function(e){t.aboutModel=e},expression:"aboutModel"}},[n("p",{staticStyle:{color:"#2b85e4","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),n("span",[t._v("关于本系统")])],1),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"column"}},[n("img",{attrs:{src:o(110),width:"720"}})]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("p",{staticClass:"layout-footer-center"},[t._v("2018-2019 © Oriole Software MOTA 长沙点墨文化传媒有限公司")])])]),t._v(" "),n("Modal",{attrs:{width:"720px"},model:{value:t.adminLoginModel,callback:function(e){t.adminLoginModel=e},expression:"adminLoginModel"}},[n("p",{staticStyle:{color:"#2b85e4","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),n("span",[t._v("管理员模式")])],1),t._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"column"}},[n("img",{attrs:{src:o(79),width:"120"}}),t._v(" "),n("p",{staticStyle:{"text-align":"center","font-size":"18px","margin-top":"10px"}},[t._v("请输入管理员密码（设备ID:"+t._s(this.$root.deviceID)+"）")]),t._v(" "),n("p",{staticStyle:{"margin-bottom":"10px"}},[t._v("若您非墨拓设备管理员请立刻退出本页面")]),t._v(" "),n("Input",{staticStyle:{width:"300px","margin-bottom":"20px"},attrs:{size:"large",placeholder:"请输入本机密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-keyboard",{on:{updatekey:t.getPassword}})],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"success",size:"large"},on:{click:function(e){t.checkPassword()}}},[t._v("确认\n                    ")])],1)]),t._v(" "),n("Modal",{attrs:{width:"800",styles:{top:"40px"}},model:{value:t.statement,callback:function(e){t.statement=e},expression:"statement"}},[n("p",{staticStyle:{color:"#f60","text-align":"center","font-size":"16px"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"ios-ribbon"}}),t._v(" "),n("span",[t._v("内容审查与免责声明")])],1),t._v(" "),n("div",{staticStyle:{"font-size":"12px","text-indent":"20px"}},[n("p",{staticStyle:{color:"#f60","text-align":"center"}},[t._v("第一部分")]),t._v(" "),n("p",[t._v("墨拓会采取必要的技术措施，确保侵权内容或违规内容不能在墨拓设备上印刷或留存。\n                        若墨拓发现您打印、复印、扫描的文件、资料、书籍（包括但不限于列举的材料）内容存在或可能存在侵犯任何第三方知识产权或其他合法权益的情形，\n                        或被认定或可能被认定为违规内容（定义见下文），墨拓有权在不经事先通知的情况下随时终止该侵权或违规内容的打印操作，并对证据进行留存，同时保留移交司法机关处理的权利。\n                    ")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("若墨拓发现您反复打印侵权内容或违规内容，则墨拓有权随时停止为您提供服务，并采取包括移交司法机关处理等各种措施。")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n                        违法信息是指违背《中华人民共和国宪法》和《全国人大常委会关于维护互联网安全的决定》、《互联网信息服务管理办法》所明文严禁的信息以及其它法律法规明文禁止传播的各类信息。对于以下内容（统称“违规内容”），墨拓必须予以终止操作并做证据留存处理：")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("a) 反对宪法所确定的基本原则的；b) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；c) 损害国家荣誉和利益的；d) 煽动民族仇恨、民族歧视，破坏民族团结的；e)\n                        破坏国家宗教政策，宣扬邪教和封建迷信的；f) 散布谣言，扰乱社会秩序，破坏社会稳定的；g) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；h)\n                        侮辱或者诽谤他人，侵害他人合法权益的；i) 含有法律、行政法规禁止的其它内容的。\n                    ")]),t._v(" "),n("p",{staticStyle:{color:"#f60","text-align":"center"}},[t._v("第二部分")]),t._v(" "),n("p",[t._v("\n                        用户承诺对其上传或者使用墨拓设备打印的所有信息、内容（即属于《中华人民共和国著作权法》规定的作品，包括但不限于文字、图片等）均享有完整的知识产权，或者已经得到相关权利人的合法授权。")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n                        当第三方认为用户通过墨拓印刷的印刷物或通过墨拓设备制作的电子书侵犯其权利时，用户同意墨拓提供相关打印历史记录供相关机构调查取证，给涉嫌侵权的用户带来的任何损失，墨拓网不承担任何法律责任。如用户在使用墨拓设备时违反上述任何规定，墨拓网有权采取一切必要的措施（包括但不限于终止用户使用墨拓设备的权利、提供相关用户信息等）以减轻用户不当行为而造成的影响。由此给该用户带来的任何损失，墨拓网不承担任何法律责任。\n\n                    ")]),t._v(" "),n("p",{staticStyle:{color:"#f60","text-align":"center"}},[t._v("第三部分")]),t._v(" "),n("p",[t._v("任何由于黑客攻击、电脑病毒侵入或政府管制而造成的暂时性网络服务终止或设备关闭，除正在进行的付费打印任务将退还费用外，对免费打印与其他业务墨拓不承担任何法律责任。")]),t._v(" "),n("p",[t._v("对免责声明的解释、修改及更新权均属于墨拓所有。")])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"warning",size:"large",long:""},on:{click:t.allow}},[t._v("我完全理解上述内容并接受")])],1)]),t._v(" "),n("Row",[n("p",{staticStyle:{"text-align":"right","font-size":"14px",color:"#000000"}},[t._v("墨拓自助控制终端 V2.1.3 Bate (20191031Update正式版)")]),t._v(" "),n("img",{staticStyle:{margin:"20px"},attrs:{src:o(75),width:"450"}}),t._v(" "),n("p",{staticStyle:{"text-align":"center","font-size":"18px",color:"#000000"}},[t._v("MOTA校园 · 永久免费自助打印")]),t._v(" "),n("p",{staticStyle:{"text-align":"center","font-size":"40px","margin-top":"10px",color:"#000000"}},[t._v("请选择需要进行的操作")])]),t._v(" "),n("Row",{staticStyle:{"margin-top":"3%"}},[n("Col",{attrs:{span:"8"}},[n("Card",{staticClass:"card-button",nativeOn:{click:function(e){t.showClause("scan")}}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[n("img",{staticStyle:{margin:"10px"},attrs:{src:o(127),width:"130",height:"130"}}),t._v(" "),n("h2",[t._v("我 要 扫 描")]),t._v(" "),n("h3",[t._v("Scan")])])])],1),t._v(" "),n("Col",{attrs:{span:"8"}},[n("Card",{staticClass:"card-button",nativeOn:{click:function(e){t.showClause("print")}}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[n("img",{staticStyle:{margin:"10px"},attrs:{src:o(121),width:"130",height:"130"}}),t._v(" "),n("h2",[t._v("我 要 打 印")]),t._v(" "),n("h3",[t._v("Print")])])])],1),t._v(" "),n("Col",{attrs:{span:"8"}},[n("Card",{staticClass:"card-button",nativeOn:{click:function(e){t.showClause("copy")}}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[n("img",{staticStyle:{margin:"10px"},attrs:{src:o(111),width:"130",height:"130"}}),t._v(" "),n("h2",[t._v("我 要 复 印")]),t._v(" "),n("h3",[t._v("Copy")])])])],1)],1),t._v(" "),n("Row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("img",{staticStyle:{margin:"20px"},attrs:{src:o(114),width:"600"}})])],1),t._v(" "),n("Footer",[n("p",{staticClass:"layout-footer-center"},[t._v("2018-2019 © Oriole Software MOTA 长沙点墨文化传媒有限公司")]),t._v(" "),n("Button",{staticStyle:{"font-size":"16px",position:"absolute",right:"10px",bottom:"10px"},attrs:{type:"primary"},on:{click:function(e){t.showAbout()}}},[n("Icon",{attrs:{type:"md-jet"}}),t._v("\n                关于 点墨传媒\n            ")],1),t._v(" "),n("v-countdownButton",{ref:"countdown",staticStyle:{position:"absolute",right:"10px",bottom:"10px"}})],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},52:function(t,e,o){o(104);var n=o(14)(o(89),o(138),"data-v-ce786f28",null);n.options.__file="F:\\Projects\\IdeaProjects\\MotaControlView\\src\\views\\Index.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},58:function(t,e,o){o(62);var n=o(14)(o(59),o(66),"data-v-684d4a5f",null);n.options.__file="F:\\Projects\\IdeaProjects\\MotaControlView\\src\\components\\CountdownButton.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] CountdownButton.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},59:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showButton:!0,router:"/"}},components:{},methods:{countDownStart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"true";clearInterval(this.$root.countdownClock),this.router=o,this.showButton=n,this.$root.countdownReturnTime=t,this.$root.countdownClock=window.setInterval(function(){--e.$root.countdownReturnTime<0&&e.countdownDo()},1e3)},countdownDo:function(){clearInterval(this.$root.countdownClock),this.$router.push(this.router)},countdownReset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60;this.$root.countdownReturnTime=t}}}},60:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(58),i=o.n(n);e.default={components:{"v-countdownButton":i.a},data:function(){return{title:[{title:"执行结果",key:"state",width:90},{title:"代码",key:"code",width:90},{title:"异常信息",key:"msg"}],errorMsg:[],exceptionModel:!1,randomCode:null}},props:{},methods:{openExceptionModel:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-1",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ERROR";arguments[4]?this.$refs.countdown.countDownStart(60,"/StopServer"):this.$refs.countdown.countDownStart(60),this.randomCode=t;var i={};i.code=o,i.state=n,i.msg=e,this.errorMsg.push(i),this.exceptionModel=!0}}}},61:function(t,e){},62:function(t,e){},63:function(t,e,o){t.exports=o.p+"6f5a360e8c66765b60806e3babf78aef.png"},64:function(t,e,o){o(61);var n=o(14)(o(60),o(65),"data-v-0d3998ae",null);n.options.__file="F:\\Projects\\IdeaProjects\\MotaControlView\\src\\components\\ExceptionModel.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] ExceptionModel.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},65:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{width:"700",closable:!1,"mask-closable":!1},model:{value:t.exceptionModel,callback:function(e){t.exceptionModel=e},expression:"exceptionModel"}},[n("p",{staticStyle:{color:"#ed4014","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"ios-information-circle"}}),t._v(" "),n("span",[t._v("系统发生错误或异常")])],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{margin:"10px"},attrs:{src:o(63),width:"200"}}),t._v(" "),n("p",{staticStyle:{"font-size":"16px"}},[t._v("由于设备发生致命错误，我们被迫终止本次打印服务，给您带来的不便我们深表歉意。")]),t._v(" "),n("p",{staticStyle:{color:"#999999"}},[t._v("若您已经付费，请保留下方随机用户码进行退费，您将在1个工作日内获得全额退款与一次免费打印机会（限20张内）")]),t._v(" "),n("p",{staticStyle:{margin:"5px"}},[t._v("随机用户编码："),n("span",{staticStyle:{"font-size":"22px"}},[t._v(t._s(t.randomCode)+"-ET")])])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Table",{attrs:{columns:t.title,data:t.errorMsg}}),t._v(" "),n("v-countdownButton",{ref:"countdown",staticStyle:{"font-size":"16px","margin-top":"10px"}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},66:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showButton?o("Button",{staticStyle:{"font-size":"16px"},attrs:{type:"error"},on:{click:function(e){t.countdownDo()}}},[o("Icon",{attrs:{type:"md-exit"}}),t._v("\n    退出\n    "),o("span",{staticStyle:{color:"#FA8072"}},[t._v("["+t._s(this.$root.countdownReturnTime)+" 秒]")])],1):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0},72:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{keyList:[],normalKeyList:[],shiftedKeyList:[],capsedKeyList:[],hasShifted:!1,hasCapsed:!1,keyvalue:""}},created:function(){this.ready()},methods:{clickKey:function(t){switch(t){case"Delete":var e=this.keyvalue;this.keyvalue=e.length?e.substring(0,e.length-1):e;break;case"Tab":this.keyvalue+="\t";break;case"Enter":this.keyvalue+="\n";break;case"Space":this.keyvalue+=" ";break;case"Caps":this.hasCapsed=!this.hasCapsed,this.keyList=this.hasCapsed?this.capsedKeyList:this.normalKeyList;break;case"Shift":this.hasShifted=!this.hasShifted,this.keyList=this.hasShifted?this.shiftedKeyList:this.normalKeyList;break;default:this.keyvalue+=t}console.log(this.keyvalue),this.$emit("updatekey",this.keyvalue)},ready:function(){var t=["`","1","2","3","4","5","6","7","8","9","0","-","=","Delete","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Caps","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","Shift","Space"],e=["~","!","@","#","$","%","^","&","*","(",")","_","+","Delete","Tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","Caps","A","S","D","F","G","H","J","K","L",":",'"',"Enter","Shift","Z","X","C","V","B","N","M","<",">","?","Shift","Space"],o=["`","1","2","3","4","5","6","7","8","9","0","-","=","Delete","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","Caps","A","S","D","F","G","H","J","K","L",";","'","Enter","Shift","Z","X","C","V","B","N","M",",",".","/","Shift","Space"];this.keyList=this.normalKeyList=t,this.shiftedKeyList=e,this.capsedKeyList=o}}}},73:function(t,e){},75:function(t,e,o){t.exports=o.p+"21cd890b993e13c042ffd112ae373bec.png"},76:function(t,e,o){o(73);var n=o(14)(o(72),o(77),"data-v-8685920a",null);n.options.__file="F:\\Projects\\IdeaProjects\\MotaControlView\\src\\components\\Keyboard.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Keyboard.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},77:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"keyboard"},t._l(t.keyList,function(e,n){return o("li",{key:n,class:{delete:"Delete"===e,tab:"Tab"===e,capslock:"Caps"===e,enter:"Enter"===e,shift:"Shift"===e,space:"Space"===e,shifted:"Shift"===e&&t.hasShifted,capsed:"Caps"===e&&t.hasCapsed},attrs:{"track-by":"$index"},domProps:{textContent:t._s(e)},on:{click:function(o){t.clickKey(e)}}})}))},staticRenderFns:[]},t.exports.render._withStripped=!0},79:function(t,e,o){t.exports=o.p+"b3bdf5723ec8b857769fd10133434399.png"},89:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(15),i=(o.n(n),o(64)),s=o.n(i),r=o(58),a=o.n(r),c=o(76),l=o.n(c);e.default={components:{"v-exception":s.a,"v-countdownButton":a.a,"v-keyboard":l.a},data:function(){return{statement:!1,routerPath:"",type:"",triggerCount:0,adminLoginModel:!1,adminModel:!1,password:"",aboutModel:!1}},mounted:function(){this.$refs.countdown.countDownStart(30,"/Carousel",!1),this.$root.randomCode=this.randomWord(!1,15),this.getDeviceID(),this.getServerUrl()},methods:{countdownReset:function(){this.$refs.countdown.countdownReset(30)},randomWord:function(t,e,o){var n="",i=e,s=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];t&&(i=Math.round(Math.random()*(o-e))+e);for(var r=0;r<i;r++){n+=s[Math.round(Math.random()*(s.length-1))]}return n},getDeviceID:function(){var t=this;n({method:"get",url:"http://localhost:8999/getDeviceID"}).then(function(e){t.$root.deviceID=e.data}).catch(function(e){t.$refs.exceptionModel.openExceptionModel(t.$root.randomCode,e.toString())})},getServerUrl:function(){var t=this;n({method:"get",url:"http://localhost:8999/getServerUrl"}).then(function(e){t.$root.serverUrl=e.data,t.$root.websocketUrl=e.data.replace(/http/,"ws")}).catch(function(e){t.$refs.exceptionModel.openExceptionModel(t.$root.randomCode,e.toString())})},showClause:function(t){this.statement=!0,this.type=t},allow:function(){clearInterval(this.countdownClock),this.$router.push({name:"print"==this.type?"UploadFile":"Scan",params:{type:this.type}})},touchstart:function(t){4==this.triggerCount&&(this.adminLoginModel=!0);t.clientY<100&&t.clientX<100&&(this.triggerCount=1),t.clientY<100&&document.documentElement.clientWidth-t.clientX<100&&1==this.triggerCount&&(this.triggerCount=2),document.documentElement.clientHeight-t.clientY<100&&document.documentElement.clientWidth-t.clientX<100&&2==this.triggerCount&&(this.triggerCount=3),document.documentElement.clientHeight-t.clientY<100&&t.clientX<100&&3==this.triggerCount&&(this.triggerCount=4)},showAbout:function(){this.aboutModel=!0},getPassword:function(t){this.password=t},checkPassword:function(){var t=this;n({method:"get",url:"http://localhost:8999/getPassword"}).then(function(e){e.data==t.password?(t.adminLoginModel=!1,t.adminModel=!0):t.$Modal.confirm({title:"密码错误",content:"请核对您的密码，确保输入正确！",okText:"确认",onOk:function(){t.$Modal.remove()}})}).catch(function(e){t.closeAllModel(),t.$refs.exceptionModel.openExceptionModel(t.$root.randomCode,e.toString())})},exit:function(){n({method:"get",url:"http://localhost:8999/exit"})},exitAndShutdown:function(){n({method:"get",url:"http://localhost:8999/exitAndShutdown"})},exitAndRebooting:function(){n({method:"get",url:"http://localhost:8999/exitAndRebooting"})},stopServer:function(){this.closeAllModel(),this.$refs.exceptionModel.openExceptionModel("ADMIN","STOP SERVER - 管理员终止了本台设备运行",10001,"STOP",!0)},closeAllModel:function(){this.adminLoginModel=!1,this.adminModel=!1}}}}});