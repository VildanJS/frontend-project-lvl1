/* eslint-disable */ (()=>{"use strict";var e={678:(e,n,r)=>{r.d(n,{greeting:()=>i});var t=r(940);const i=()=>{console.log("Welcome to the Brain Games!");const e=t.question("May I have your name? ");return console.log(`Hello, ${e}!`),e}},940:(e,n,r)=>{var t,i,s,o,a,c,u="win32"===process.platform,l="aes-256-cbc",p="sha256",f="The current environment doesn't support interactive reading from TTY.",d=r(147),h=process.binding("tty_wrap").TTY,y=r(81),m=r(17),g={prompt:"> ",hideEchoBack:!1,mask:"*",limit:[],limitMessage:"Input another, please.$<( [)limit(])>",defaultInput:"",trueValue:[],falseValue:[],caseSensitive:!1,keepWhitespace:!1,encoding:"utf8",bufferSize:1024,print:void 0,history:!0,cd:!1,phContent:void 0,preCheck:void 0},v="none",k=!1,S=0,w="",x=[],b=!1,C=!1,E=!1;function O(e){return o.concat((n={display:"string",displayOnly:"boolean",keyIn:"boolean",hideEchoBack:"boolean",mask:"string",limit:"string",caseSensitive:"boolean"},r=[],Object.keys(n).forEach((function(t){"boolean"===n[t]?e[t]&&r.push("--"+t):"string"===n[t]&&e[t]&&r.push("--"+t,e[t].replace(/[^\w\u0080-\uFFFF]/g,(function(e){return"#"+e.charCodeAt(0)+";"})))})),r));var n,r}function I(e){var n="",g=e.display,x=!e.display&&e.keyIn&&e.hideEchoBack&&!e.mask;function I(){var n=function(e){var n,t,i={},c={env:process.env,encoding:e.encoding};if(s||(u?process.env.PSModulePath?(s="powershell.exe",o=["-ExecutionPolicy","Bypass","-File",__dirname+"\\read.ps1"]):(s="cscript.exe",o=["//nologo",__dirname+"\\read.cs.js"]):(s="/bin/sh",o=[__dirname+"/read.sh"])),u&&!process.env.PSModulePath&&(c.stdio=[process.stdin]),y.execFileSync){n=O(e),E&&E("execFileSync",n);try{i.input=y.execFileSync(s,n,c)}catch(e){t=e.stderr?(e.stderr+"").trim():"",i.error=new Error(f+(t?"\n"+t:"")),i.error.method="execFileSync",i.error.program=s,i.error.args=n,i.error.extMessage=t,i.error.exitCode=e.status,i.error.code=e.code,i.error.signal=e.signal}}else i=function(e,n){function t(e){var n,t,i="";for(a=a||r(37).tmpdir();;){n=m.join(a,e+i);try{t=d.openSync(n,"wx")}catch(e){if("EEXIST"===e.code){i++;continue}throw e}d.closeSync(t);break}return n}var i,o,c,h,g,v,k,w,x={},b=t("readline-sync.stdout"),C=t("readline-sync.stderr"),I=t("readline-sync.exit"),$=t("readline-sync.done"),_=r(113);(v=_.createHash(p)).update(""+process.pid+S+++Math.random()),w=v.digest("hex"),k=_.createDecipher(l,w),i=O(e),u?(o=process.env.ComSpec||"cmd.exe",process.env.Q='"',c=["/V:ON","/S","/C","(%Q%"+o+"%Q% /V:ON /S /C %Q%%Q%"+s+"%Q%"+i.map((function(e){return" %Q%"+e+"%Q%"})).join("")+" & (echo !ERRORLEVEL!)>%Q%"+I+"%Q%%Q%) 2>%Q%"+C+"%Q% |%Q%"+process.execPath+"%Q% %Q%"+__dirname+"\\encrypt.js%Q% %Q%"+l+"%Q% %Q%"+w+"%Q% >%Q%"+b+"%Q% & (echo 1)>%Q%"+$+"%Q%"]):(o="/bin/sh",c=["-c",'("'+s+'"'+i.map((function(e){return" '"+e.replace(/'/g,"'\\''")+"'"})).join("")+'; echo $?>"'+I+'") 2>"'+C+'" |"'+process.execPath+'" "'+__dirname+'/encrypt.js" "'+l+'" "'+w+'" >"'+b+'"; echo 1 >"'+$+'"']),E&&E("_execFileSync",i);try{y.spawn(o,c,n)}catch(e){x.error=new Error(e.message),x.error.method="_execFileSync - spawn",x.error.program=o,x.error.args=c}for(;"1"!==d.readFileSync($,{encoding:e.encoding}).trim(););return"0"===(h=d.readFileSync(I,{encoding:e.encoding}).trim())?x.input=k.update(d.readFileSync(b,{encoding:"binary"}),"hex",e.encoding)+k.final(e.encoding):(g=d.readFileSync(C,{encoding:e.encoding}).trim(),x.error=new Error(f+(g?"\n"+g:"")),x.error.method="_execFileSync",x.error.program=o,x.error.args=c,x.error.extMessage=g,x.error.exitCode=+h),d.unlinkSync(b),d.unlinkSync(C),d.unlinkSync(I),d.unlinkSync($),x}(e,c);return i.error||(i.input=i.input.replace(/^\s*'|'\s*$/g,""),e.display=""),i}(e);if(n.error)throw n.error;return n.input}return C&&C(e),function(){var e,n,r;function s(){return e||(e=process.binding("fs"),n=(n=process.binding("constants"))&&n.fs&&"number"==typeof n.fs.O_RDWR?n.fs:n),e}if("string"==typeof v)if(v=null,u){if((r=function(e){var n=process.version.replace(/^\D+/,"").split("."),r=0;return(n[0]=+n[0])&&(r+=1e4*n[0]),(n[1]=+n[1])&&(r+=100*n[1]),(n[2]=+n[2])&&(r+=n[2]),r}())>=20302&&r<40204||r>=5e4&&r<50100||r>=50600&&r<60200||!process.stdin.isTTY)try{v=s().open("CONIN$",n.O_RDWR,parseInt("0666",8)),i=new h(v,!0)}catch(e){}else process.stdin.pause(),v=process.stdin.fd,i=process.stdin._handle;if(process.stdout.isTTY)t=process.stdout.fd;else{try{t=d.openSync("\\\\.\\CON","w")}catch(e){}if("number"!=typeof t)try{t=s().open("CONOUT$",n.O_RDWR,parseInt("0666",8))}catch(e){}}}else{if(process.stdin.isTTY){process.stdin.pause();try{v=d.openSync("/dev/tty","r"),i=process.stdin._handle}catch(e){}}else try{v=d.openSync("/dev/tty","r"),i=new h(v,!1)}catch(e){}if(process.stdout.isTTY)t=process.stdout.fd;else try{t=d.openSync("/dev/tty","w")}catch(e){}}}(),function(){var r,s,o,a,u,l,p,f=!e.hideEchoBack&&!e.keyIn;function h(e){return e===k||0===i.setRawMode(e)&&(k=e,!0)}if(c="",!b&&i&&("number"==typeof t||!e.display&&f)){if(e.display&&(d.writeSync(t,e.display),e.display=""),!e.displayOnly)if(h(!f)){for(a=e.keyIn?1:e.bufferSize,o=Buffer.allocUnsafe&&Buffer.alloc?Buffer.alloc(a):new Buffer(a),e.keyIn&&e.limit&&(s=new RegExp("[^"+e.limit+"]","g"+(e.caseSensitive?"":"i")));;){u=0;try{u=d.readSync(v,o,0,a)}catch(e){if("EOF"!==e.code)return h(!1),void(n+=I())}if(u>0?(l=o.toString(e.encoding,0,u),c+=l):(l="\n",c+=String.fromCharCode(0)),l&&"string"==typeof(p=(l.match(/^(.*?)[\r\n]/)||[])[1])&&(l=p,r=!0),l&&(l=l.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g,"")),l&&s&&(l=l.replace(s,"")),l&&(f||(e.hideEchoBack?e.mask&&d.writeSync(t,new Array(l.length+1).join(e.mask)):d.writeSync(t,l)),n+=l),!e.keyIn&&r||e.keyIn&&n.length>=a)break}f||x||d.writeSync(t,"\n"),h(!1)}else n=I()}else n=I()}(),e.print&&!x&&e.print(g+(e.displayOnly?"":(e.hideEchoBack?new Array(n.length+1).join(e.mask):n)+"\n"),e.encoding),e.displayOnly?"":w=e.keepWhitespace||e.keyIn?n:n.trim()}function $(e){return e.replace(/[\x00-\x7f]/g,(function(e){return"\\x"+("00"+e.charCodeAt().toString(16)).substr(-2)}))}function _(){var e,n,r=Array.prototype.slice.call(arguments);return r.length&&"boolean"==typeof r[0]&&(n=r.shift())&&(e=Object.keys(g),r.unshift(g)),r.reduce((function(r,t){return null==t||(t.hasOwnProperty("noEchoBack")&&!t.hasOwnProperty("hideEchoBack")&&(t.hideEchoBack=t.noEchoBack,delete t.noEchoBack),t.hasOwnProperty("noTrim")&&!t.hasOwnProperty("keepWhitespace")&&(t.keepWhitespace=t.noTrim,delete t.noTrim),n||(e=Object.keys(t)),e.forEach((function(e){var n,i,s,o;if(t.hasOwnProperty(e))switch(n=t[e],e){case"mask":case"limitMessage":case"defaultInput":case"encoding":(n=null!=n?n+"":"")&&"limitMessage"!==e&&(n=n.replace(/[\r\n]/g,"")),r[e]=n;break;case"bufferSize":isNaN(n=parseInt(n,10))||"number"!=typeof n||(r[e]=n);break;case"displayOnly":case"keyIn":case"hideEchoBack":case"caseSensitive":case"keepWhitespace":case"history":case"cd":r[e]=!!n;break;case"limit":case"trueValue":case"falseValue":r[e]=(i=n,s=function(e){var n=typeof e;return"string"===n||"number"===n||"function"===n||e instanceof RegExp},o=[],function e(n){null!=n&&(Array.isArray(n)?n.forEach(e):s&&!s(n)||o.push(n))}(i),o).map((function(e){return"string"==typeof e?e.replace(/[\r\n]/g,""):e}));break;case"print":case"phContent":case"preCheck":r[e]="function"==typeof n?n:void 0;break;case"prompt":case"display":r[e]=null!=n?n:""}}))),r}),{})}function M(e,n,r){return n.some((function(n){var t=typeof n;return"string"===t?r?e===n:e.toLowerCase()===n.toLowerCase():"number"===t?parseFloat(e)===n:"function"===t?n(e):n instanceof RegExp&&n.test(e)}))}function B(e,n){var r=m.normalize(u?(process.env.HOMEDRIVE||"")+(process.env.HOMEPATH||""):process.env.HOME||"").replace(/[/\\]+$/,"");return e=m.normalize(e),n?e.replace(/^~(?=\/|\\|$)/,r):e.replace(new RegExp("^"+$(r)+"(?=\\/|\\\\|$)",u?"i":""),"~")}function P(e,n){var r="(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?",t=new RegExp("(\\$)?(\\$<"+r+">)","g"),i=new RegExp("(\\$)?(\\$\\{"+r+"\\})","g");function s(e,r,t,i,s,o){var a;return r||"string"!=typeof(a=n(s))?t:a?(i||"")+a+(o||""):""}return e.replace(t,s).replace(i,s)}function N(e,n,r){var t,i,s=[],o=-1,a=0,c="";function u(e,n){return n.length>3?(e.push(n[0]+"..."+n[n.length-1]),i=!0):n.length&&(e=e.concat(n)),e}return t=e.reduce((function(e,n){return e.concat((n+"").split(""))}),[]).reduce((function(e,t){var i,l;return n||(t=t.toLowerCase()),i=/^\d$/.test(t)?1:/^[A-Z]$/.test(t)?2:/^[a-z]$/.test(t)?3:0,r&&0===i?c+=t:(l=t.charCodeAt(0),i&&i===o&&l===a+1?s.push(t):(e=u(e,s),s=[t],o=i),a=l),e}),[]),t=u(t,s),c&&(t.push(c),i=!0),{values:t,suppressed:i}}function A(e,n){return e.join(e.length>2?", ":n?" / ":"/")}function R(e,n){var r,t,i,s={};if(n.phContent&&(r=n.phContent(e,n)),"string"!=typeof r)switch(e){case"hideEchoBack":case"mask":case"defaultInput":case"caseSensitive":case"keepWhitespace":case"encoding":case"bufferSize":case"history":case"cd":r=n.hasOwnProperty(e)?"boolean"==typeof n[e]?n[e]?"on":"off":n[e]+"":"";break;case"limit":case"trueValue":case"falseValue":t=n[n.hasOwnProperty(e+"Src")?e+"Src":e],r=A(t=n.keyIn?(s=N(t,n.caseSensitive)).values:t.filter((function(e){var n=typeof e;return"string"===n||"number"===n})),s.suppressed);break;case"limitCount":case"limitCountNotZero":r=(r=n[n.hasOwnProperty("limitSrc")?"limitSrc":"limit"].length)||"limitCountNotZero"!==e?r+"":"";break;case"lastInput":r=w;break;case"cwd":case"CWD":case"cwdHome":r=process.cwd(),"CWD"===e?r=m.basename(r):"cwdHome"===e&&(r=B(r));break;case"date":case"time":case"localeDate":case"localeTime":r=(new Date)["to"+e.replace(/^./,(function(e){return e.toUpperCase()}))+"String"]();break;default:"string"==typeof(i=(e.match(/^history_m(\d+)$/)||[])[1])&&(r=x[x.length-i]||"")}return r}function Q(e){var n,r,t,i,s=/^(.)-(.)$/.exec(e),o="";if(!s)return null;for(i=(n=s[1].charCodeAt(0))<(r=s[2].charCodeAt(0))?1:-1,t=n;t!==r+i;t+=i)o+=String.fromCharCode(t);return o}function V(e){var n,r,t=new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),i="",s=[];for(e=e.trim();n=t.exec(e);)r=n[3]||n[4]||"",n[1]&&(s.push(i),i=""),i+=r;return i&&s.push(i),s}function T(e,n){return!(!n.trueValue.length||!M(e,n.trueValue,n.caseSensitive))||(!n.falseValue.length||!M(e,n.falseValue,n.caseSensitive))&&e}function F(e){var n,r,t,i,s,o,a;function c(n){return R(n,e)}function u(n){e.display+=(/[^\r\n]$/.test(e.display)?"\n":"")+n}for(e.limitSrc=e.limit,e.displaySrc=e.display,e.limit="",e.display=P(e.display+"",c);;){if(n=I(e),r=!1,t="",e.defaultInput&&!n&&(n=e.defaultInput),e.history&&((i=/^\s*!(?:!|-1)(:p)?\s*$/.exec(n))?(s=x[0]||"",i[1]?r=!0:n=s,u(s+"\n"),r||(e.displayOnly=!0,I(e),e.displayOnly=!1)):n&&n!==x[x.length-1]&&(x=[n])),!r&&e.cd&&n)switch((o=V(n))[0].toLowerCase()){case"cd":if(o[1])try{process.chdir(B(o[1],!0))}catch(e){u(e+"")}r=!0;break;case"pwd":u(process.cwd()),r=!0}if(!r&&e.preCheck&&(n=(a=e.preCheck(n,e)).res,a.forceNext&&(r=!0)),!r){if(!e.limitSrc.length||M(n,e.limitSrc,e.caseSensitive))break;e.limitMessage&&(t=P(e.limitMessage,c))}u((t?t+"\n":"")+P(e.displaySrc+"",c))}return T(n,e)}function j(e,r,t){var i;return n.question(e,_({limitMessage:"Input valid number, please."},r,{limit:function(e){return i=t(e),!isNaN(i)&&"number"==typeof i},cd:!1})),i}function D(e,n){var r={},t={};return"object"==typeof e?(Object.keys(e).forEach((function(r){"function"==typeof e[r]&&(t[n.caseSensitive?r:r.toLowerCase()]=e[r])})),r.preCheck=function(e){var i;return r.args=V(e),i=r.args[0]||"",n.caseSensitive||(i=i.toLowerCase()),r.hRes="_"!==i&&t.hasOwnProperty(i)?t[i].apply(e,r.args.slice(1)):t.hasOwnProperty("_")?t._.apply(e,r.args):null,{res:e,forceNext:!1}},t.hasOwnProperty("_")||(r.limit=function(){var e=r.args[0]||"";return n.caseSensitive||(e=e.toLowerCase()),t.hasOwnProperty(e)})):r.preCheck=function(n){return r.args=V(n),r.hRes="function"!=typeof e||e.apply(n,r.args),{res:n,forceNext:!1}},r}function q(e,r,t){var i;return null==e&&(e="Are you sure? "),r&&!1===r.guide||!(e+="")||(e=e.replace(/\s*:?\s*$/,"")+" [y/n]: "),"boolean"==typeof(i=n.keyIn(e,_(r,{hideEchoBack:!1,limit:t,trueValue:"y",falseValue:"n",caseSensitive:!1})))?i:""}function z(e,r){var t;return r.length&&((t={})[e]=r[0]),n.setDefaultOptions(t)[e]}n._DBG_set_useExt=function(e){b=e},n._DBG_set_checkOptions=function(e){C=e},n._DBG_set_checkMethod=function(e){E=e},n._DBG_clearHistory=function(){w="",x=[]},n.setDefaultOptions=function(e){return g=_(!0,e),_(!0)},n.question=function(e,n){return F(_(_(!0,n),{display:e}))},n.prompt=function(e){var n=_(!0,e);return n.display=n.prompt,F(n)},n.keyIn=function(e,n){var r=_(_(!0,n),{display:e,keyIn:!0,keepWhitespace:!0});return r.limitSrc=r.limit.filter((function(e){var n=typeof e;return"string"===n||"number"===n})).map((function(e){return P(e+"",Q)})),r.limit=$(r.limitSrc.join("")),["trueValue","falseValue"].forEach((function(e){r[e]=r[e].reduce((function(e,n){var r=typeof n;return"string"===r||"number"===r?e=e.concat((n+"").split("")):e.push(n),e}),[])})),r.display=P(r.display+"",(function(e){return R(e,r)})),T(I(r),r)},n.questionEMail=function(e,r){return null==e&&(e="Input e-mail address: "),n.question(e,_({hideEchoBack:!1,limit:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,limitMessage:"Input valid e-mail address, please.",trueValue:null,falseValue:null},r,{keepWhitespace:!1,cd:!1}))},n.questionNewPassword=function(e,r){var t,i,s,o,a,c,u,l,p,f,d=_({hideEchoBack:!0,mask:"*",limitMessage:"It can include: $<charlist>\nAnd the length must be: $<length>",trueValue:null,falseValue:null,caseSensitive:!0},r,{history:!1,cd:!1,phContent:function(e){return"charlist"===e?t.text:"length"===e?i+"..."+s:null}});for(o=P((r=r||{}).charlist?r.charlist+"":"$<!-~>",Q),(isNaN(i=parseInt(r.min,10))||"number"!=typeof i)&&(i=12),(isNaN(s=parseInt(r.max,10))||"number"!=typeof s)&&(s=24),u=new RegExp("^["+$(o)+"]{"+i+","+s+"}$"),(t=N([o],d.caseSensitive,!0)).text=A(t.values,t.suppressed),a=null!=r.confirmMessage?r.confirmMessage:"Reinput a same one to confirm it: ",c=null!=r.unmatchMessage?r.unmatchMessage:"It differs from first one. Hit only the Enter key if you want to retry from first one.",null==e&&(e="Input new password: "),l=d.limitMessage;!f;)d.limit=u,d.limitMessage=l,p=n.question(e,d),d.limit=[p,""],d.limitMessage=c,f=n.question(a,d);return p},n.questionInt=function(e,n){return j(e,n,(function(e){return parseInt(e,10)}))},n.questionFloat=function(e,n){return j(e,n,parseFloat)},n.questionPath=function(e,r){var t,i="",s=_({hideEchoBack:!1,limitMessage:"$<error(\n)>Input valid path, please.$<( Min:)min>$<( Max:)max>",history:!0,cd:!0},r,{keepWhitespace:!1,limit:function(e){var n,s,o;function a(e){e.split(/\/|\\/).reduce((function(e,n){var r=m.resolve(e+=n+m.sep);if(d.existsSync(r)){if(!d.statSync(r).isDirectory())throw new Error("Non directory already exists: "+r)}else d.mkdirSync(r);return e}),"")}e=B(e,!0),i="";try{if(n=d.existsSync(e),t=n?d.realpathSync(e):m.resolve(e),!r.hasOwnProperty("exists")&&!n||"boolean"==typeof r.exists&&r.exists!==n)return i=(n?"Already exists":"No such file or directory")+": "+t,!1;if(!n&&r.create&&(r.isDirectory?a(t):(a(m.dirname(t)),d.closeSync(d.openSync(t,"w"))),t=d.realpathSync(t)),n&&(r.min||r.max||r.isFile||r.isDirectory)){if(s=d.statSync(t),r.isFile&&!s.isFile())return i="Not file: "+t,!1;if(r.isDirectory&&!s.isDirectory())return i="Not directory: "+t,!1;if(r.min&&s.size<+r.min||r.max&&s.size>+r.max)return i="Size "+s.size+" is out of range: "+t,!1}if("function"==typeof r.validate&&!0!==(o=r.validate(t)))return"string"==typeof o&&(i=o),!1}catch(e){return i=e+"",!1}return!0},phContent:function(e){return"error"===e?i:"min"!==e&&"max"!==e?null:r.hasOwnProperty(e)?r[e]+"":""}});return r=r||{},null==e&&(e='Input path (you can "cd" and "pwd"): '),n.question(e,s),t},n.promptCL=function(e,r){var t=_({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},r),i=D(e,t);return t.limit=i.limit,t.preCheck=i.preCheck,n.prompt(t),i.args},n.promptLoop=function(e,r){for(var t=_({hideEchoBack:!1,trueValue:null,falseValue:null,caseSensitive:!1,history:!0},r);!e(n.prompt(t)););},n.promptCLLoop=function(e,r){var t=_({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},r),i=D(e,t);for(t.limit=i.limit,t.preCheck=i.preCheck;n.prompt(t),!i.hRes;);},n.promptSimShell=function(e){return n.prompt(_({hideEchoBack:!1,history:!0},e,{prompt:u?"$<cwd>>":(process.env.USER||"")+(process.env.HOSTNAME?"@"+process.env.HOSTNAME.replace(/\..*$/,""):"")+":$<cwdHome>$ "}))},n.keyInYN=function(e,n){return q(e,n)},n.keyInYNStrict=function(e,n){return q(e,n,"yn")},n.keyInPause=function(e,r){null==e&&(e="Continue..."),r&&!1===r.guide||!(e+="")||(e=e.replace(/\s+$/,"")+" (Hit any key)"),n.keyIn(e,_({limit:null},r,{hideEchoBack:!0,mask:""}))},n.keyInSelect=function(e,r,t){var i=_({hideEchoBack:!1},t,{trueValue:null,falseValue:null,caseSensitive:!1,phContent:function(n){return"itemsCount"===n?e.length+"":"firstItem"===n?(e[0]+"").trim():"lastItem"===n?(e[e.length-1]+"").trim():null}}),s="",o={},a=49,c="\n";if(!Array.isArray(e)||!e.length||e.length>35)throw"`items` must be Array (max length: 35).";return e.forEach((function(e,n){var r=String.fromCharCode(a);s+=r,o[r]=n,c+="["+r+"] "+(e+"").trim()+"\n",a=57===a?97:a+1})),t&&!1===t.cancel||(s+="0",o[0]=-1,c+="[0] "+(t&&null!=t.cancel&&"boolean"!=typeof t.cancel?(t.cancel+"").trim():"CANCEL")+"\n"),i.limit=s,c+="\n",null==r&&(r="Choose one from list: "),(r+="")&&(t&&!1===t.guide||(r=r.replace(/\s*:?\s*$/,"")+" [$<limit>]: "),c+=r),o[n.keyIn(c,i).toLowerCase()]},n.getRawInput=function(){return c},n.setPrint=function(){return z("print",arguments)},n.setPrompt=function(){return z("prompt",arguments)},n.setEncoding=function(){return z("encoding",arguments)},n.setMask=function(){return z("mask",arguments)},n.setBufferSize=function(){return z("bufferSize",arguments)}},81:e=>{e.exports=require("child_process")},113:e=>{e.exports=require("crypto")},147:e=>{e.exports=require("fs")},37:e=>{e.exports=require("os")},17:e=>{e.exports=require("path")}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{r.r(t),r.d(t,{progressionGame:()=>s,startProgressionGame:()=>o});var e=r(940),n=r(678);function i(e,n){const r=e+Math.random()*(n+1-e);return Math.floor(r)}function s(){const e=i(1,100),n=i(1,10),r=[],t=i(0,9);for(let t=1;t<11;t+=1){const i=e+(t-1)*n;r.push(String(i))}const s=String(r[t]);return r[t]="..",[s,r.join(" ")]}const o=()=>((r,t)=>{const i=(0,n.greeting)();console.log("What number is missing in the progression?");const s=`Congratulations, ${i}!`;for(let n=0;n<3;n+=1){const[n,t]=r(),s=`Question: ${t}`;console.log(s);const o=e.question("Your answer: "),a=`'${o}' is wrong answer ;(. Correct answer was '${n}'.\nLet's try again, ${i}!`;if(o!==n)return void console.log(a);console.log("Correct!")}console.log(s)})(s)})();var i=exports;for(var s in t)i[s]=t[s];t.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
