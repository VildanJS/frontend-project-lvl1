/*eslint-disable-next-line*/(()=>{"use strict";var e={940:(e,r,n)=>{var t,i,s,o,a,c,u="win32"===process.platform,l="aes-256-cbc",p="sha256",f="The current environment doesn't support interactive reading from TTY.",d=n(147),y=process.binding("tty_wrap").TTY,h=n(81),m=n(17),g={prompt:"> ",hideEchoBack:!1,mask:"*",limit:[],limitMessage:"Input another, please.$<( [)limit(])>",defaultInput:"",trueValue:[],falseValue:[],caseSensitive:!1,keepWhitespace:!1,encoding:"utf8",bufferSize:1024,print:void 0,history:!0,cd:!1,phContent:void 0,preCheck:void 0},v="none",k=!1,S=0,w="",x=[],b=!1,C=!1,E=!1;function O(e){return o.concat((r={display:"string",displayOnly:"boolean",keyIn:"boolean",hideEchoBack:"boolean",mask:"string",limit:"string",caseSensitive:"boolean"},n=[],Object.keys(r).forEach((function(t){"boolean"===r[t]?e[t]&&n.push("--"+t):"string"===r[t]&&e[t]&&n.push("--"+t,e[t].replace(/[^\w\u0080-\uFFFF]/g,(function(e){return"#"+e.charCodeAt(0)+";"})))})),n));var r,n}function I(e){var r="",g=e.display,x=!e.display&&e.keyIn&&e.hideEchoBack&&!e.mask;function I(){var r=function(e){var r,t,i={},c={env:process.env,encoding:e.encoding};if(s||(u?process.env.PSModulePath?(s="powershell.exe",o=["-ExecutionPolicy","Bypass","-File",__dirname+"\\read.ps1"]):(s="cscript.exe",o=["//nologo",__dirname+"\\read.cs.js"]):(s="/bin/sh",o=[__dirname+"/read.sh"])),u&&!process.env.PSModulePath&&(c.stdio=[process.stdin]),h.execFileSync){r=O(e),E&&E("execFileSync",r);try{i.input=h.execFileSync(s,r,c)}catch(e){t=e.stderr?(e.stderr+"").trim():"",i.error=new Error(f+(t?"\n"+t:"")),i.error.method="execFileSync",i.error.program=s,i.error.args=r,i.error.extMessage=t,i.error.exitCode=e.status,i.error.code=e.code,i.error.signal=e.signal}}else i=function(e,r){function t(e){var r,t,i="";for(a=a||n(37).tmpdir();;){r=m.join(a,e+i);try{t=d.openSync(r,"wx")}catch(e){if("EEXIST"===e.code){i++;continue}throw e}d.closeSync(t);break}return r}var i,o,c,y,g,v,k,w,x={},b=t("readline-sync.stdout"),C=t("readline-sync.stderr"),I=t("readline-sync.exit"),$=t("readline-sync.done"),_=n(113);(v=_.createHash(p)).update(""+process.pid+S+++Math.random()),w=v.digest("hex"),k=_.createDecipher(l,w),i=O(e),u?(o=process.env.ComSpec||"cmd.exe",process.env.Q='"',c=["/V:ON","/S","/C","(%Q%"+o+"%Q% /V:ON /S /C %Q%%Q%"+s+"%Q%"+i.map((function(e){return" %Q%"+e+"%Q%"})).join("")+" & (echo !ERRORLEVEL!)>%Q%"+I+"%Q%%Q%) 2>%Q%"+C+"%Q% |%Q%"+process.execPath+"%Q% %Q%"+__dirname+"\\encrypt.js%Q% %Q%"+l+"%Q% %Q%"+w+"%Q% >%Q%"+b+"%Q% & (echo 1)>%Q%"+$+"%Q%"]):(o="/bin/sh",c=["-c",'("'+s+'"'+i.map((function(e){return" '"+e.replace(/'/g,"'\\''")+"'"})).join("")+'; echo $?>"'+I+'") 2>"'+C+'" |"'+process.execPath+'" "'+__dirname+'/encrypt.js" "'+l+'" "'+w+'" >"'+b+'"; echo 1 >"'+$+'"']),E&&E("_execFileSync",i);try{h.spawn(o,c,r)}catch(e){x.error=new Error(e.message),x.error.method="_execFileSync - spawn",x.error.program=o,x.error.args=c}for(;"1"!==d.readFileSync($,{encoding:e.encoding}).trim(););return"0"===(y=d.readFileSync(I,{encoding:e.encoding}).trim())?x.input=k.update(d.readFileSync(b,{encoding:"binary"}),"hex",e.encoding)+k.final(e.encoding):(g=d.readFileSync(C,{encoding:e.encoding}).trim(),x.error=new Error(f+(g?"\n"+g:"")),x.error.method="_execFileSync",x.error.program=o,x.error.args=c,x.error.extMessage=g,x.error.exitCode=+y),d.unlinkSync(b),d.unlinkSync(C),d.unlinkSync(I),d.unlinkSync($),x}(e,c);return i.error||(i.input=i.input.replace(/^\s*'|'\s*$/g,""),e.display=""),i}(e);if(r.error)throw r.error;return r.input}return C&&C(e),function(){var e,r,n;function s(){return e||(e=process.binding("fs"),r=(r=process.binding("constants"))&&r.fs&&"number"==typeof r.fs.O_RDWR?r.fs:r),e}if("string"==typeof v)if(v=null,u){if((n=function(e){var r=process.version.replace(/^\D+/,"").split("."),n=0;return(r[0]=+r[0])&&(n+=1e4*r[0]),(r[1]=+r[1])&&(n+=100*r[1]),(r[2]=+r[2])&&(n+=r[2]),n}())>=20302&&n<40204||n>=5e4&&n<50100||n>=50600&&n<60200||!process.stdin.isTTY)try{v=s().open("CONIN$",r.O_RDWR,parseInt("0666",8)),i=new y(v,!0)}catch(e){}else process.stdin.pause(),v=process.stdin.fd,i=process.stdin._handle;if(process.stdout.isTTY)t=process.stdout.fd;else{try{t=d.openSync("\\\\.\\CON","w")}catch(e){}if("number"!=typeof t)try{t=s().open("CONOUT$",r.O_RDWR,parseInt("0666",8))}catch(e){}}}else{if(process.stdin.isTTY){process.stdin.pause();try{v=d.openSync("/dev/tty","r"),i=process.stdin._handle}catch(e){}}else try{v=d.openSync("/dev/tty","r"),i=new y(v,!1)}catch(e){}if(process.stdout.isTTY)t=process.stdout.fd;else try{t=d.openSync("/dev/tty","w")}catch(e){}}}(),function(){var n,s,o,a,u,l,p,f=!e.hideEchoBack&&!e.keyIn;function y(e){return e===k||0===i.setRawMode(e)&&(k=e,!0)}if(c="",!b&&i&&("number"==typeof t||!e.display&&f)){if(e.display&&(d.writeSync(t,e.display),e.display=""),!e.displayOnly)if(y(!f)){for(a=e.keyIn?1:e.bufferSize,o=Buffer.allocUnsafe&&Buffer.alloc?Buffer.alloc(a):new Buffer(a),e.keyIn&&e.limit&&(s=new RegExp("[^"+e.limit+"]","g"+(e.caseSensitive?"":"i")));;){u=0;try{u=d.readSync(v,o,0,a)}catch(e){if("EOF"!==e.code)return y(!1),void(r+=I())}if(u>0?(l=o.toString(e.encoding,0,u),c+=l):(l="\n",c+=String.fromCharCode(0)),l&&"string"==typeof(p=(l.match(/^(.*?)[\r\n]/)||[])[1])&&(l=p,n=!0),l&&(l=l.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g,"")),l&&s&&(l=l.replace(s,"")),l&&(f||(e.hideEchoBack?e.mask&&d.writeSync(t,new Array(l.length+1).join(e.mask)):d.writeSync(t,l)),r+=l),!e.keyIn&&n||e.keyIn&&r.length>=a)break}f||x||d.writeSync(t,"\n"),y(!1)}else r=I()}else r=I()}(),e.print&&!x&&e.print(g+(e.displayOnly?"":(e.hideEchoBack?new Array(r.length+1).join(e.mask):r)+"\n"),e.encoding),e.displayOnly?"":w=e.keepWhitespace||e.keyIn?r:r.trim()}function $(e){return e.replace(/[\x00-\x7f]/g,(function(e){return"\\x"+("00"+e.charCodeAt().toString(16)).substr(-2)}))}function _(){var e,r,n=Array.prototype.slice.call(arguments);return n.length&&"boolean"==typeof n[0]&&(r=n.shift())&&(e=Object.keys(g),n.unshift(g)),n.reduce((function(n,t){return null==t||(t.hasOwnProperty("noEchoBack")&&!t.hasOwnProperty("hideEchoBack")&&(t.hideEchoBack=t.noEchoBack,delete t.noEchoBack),t.hasOwnProperty("noTrim")&&!t.hasOwnProperty("keepWhitespace")&&(t.keepWhitespace=t.noTrim,delete t.noTrim),r||(e=Object.keys(t)),e.forEach((function(e){var r,i,s,o;if(t.hasOwnProperty(e))switch(r=t[e],e){case"mask":case"limitMessage":case"defaultInput":case"encoding":(r=null!=r?r+"":"")&&"limitMessage"!==e&&(r=r.replace(/[\r\n]/g,"")),n[e]=r;break;case"bufferSize":isNaN(r=parseInt(r,10))||"number"!=typeof r||(n[e]=r);break;case"displayOnly":case"keyIn":case"hideEchoBack":case"caseSensitive":case"keepWhitespace":case"history":case"cd":n[e]=!!r;break;case"limit":case"trueValue":case"falseValue":n[e]=(i=r,s=function(e){var r=typeof e;return"string"===r||"number"===r||"function"===r||e instanceof RegExp},o=[],function e(r){null!=r&&(Array.isArray(r)?r.forEach(e):s&&!s(r)||o.push(r))}(i),o).map((function(e){return"string"==typeof e?e.replace(/[\r\n]/g,""):e}));break;case"print":case"phContent":case"preCheck":n[e]="function"==typeof r?r:void 0;break;case"prompt":case"display":n[e]=null!=r?r:""}}))),n}),{})}function M(e,r,n){return r.some((function(r){var t=typeof r;return"string"===t?n?e===r:e.toLowerCase()===r.toLowerCase():"number"===t?parseFloat(e)===r:"function"===t?r(e):r instanceof RegExp&&r.test(e)}))}function B(e,r){var n=m.normalize(u?(process.env.HOMEDRIVE||"")+(process.env.HOMEPATH||""):process.env.HOME||"").replace(/[/\\]+$/,"");return e=m.normalize(e),r?e.replace(/^~(?=\/|\\|$)/,n):e.replace(new RegExp("^"+$(n)+"(?=\\/|\\\\|$)",u?"i":""),"~")}function P(e,r){var n="(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?",t=new RegExp("(\\$)?(\\$<"+n+">)","g"),i=new RegExp("(\\$)?(\\$\\{"+n+"\\})","g");function s(e,n,t,i,s,o){var a;return n||"string"!=typeof(a=r(s))?t:a?(i||"")+a+(o||""):""}return e.replace(t,s).replace(i,s)}function A(e,r,n){var t,i,s=[],o=-1,a=0,c="";function u(e,r){return r.length>3?(e.push(r[0]+"..."+r[r.length-1]),i=!0):r.length&&(e=e.concat(r)),e}return t=e.reduce((function(e,r){return e.concat((r+"").split(""))}),[]).reduce((function(e,t){var i,l;return r||(t=t.toLowerCase()),i=/^\d$/.test(t)?1:/^[A-Z]$/.test(t)?2:/^[a-z]$/.test(t)?3:0,n&&0===i?c+=t:(l=t.charCodeAt(0),i&&i===o&&l===a+1?s.push(t):(e=u(e,s),s=[t],o=i),a=l),e}),[]),t=u(t,s),c&&(t.push(c),i=!0),{values:t,suppressed:i}}function N(e,r){return e.join(e.length>2?", ":r?" / ":"/")}function R(e,r){var n,t,i,s={};if(r.phContent&&(n=r.phContent(e,r)),"string"!=typeof n)switch(e){case"hideEchoBack":case"mask":case"defaultInput":case"caseSensitive":case"keepWhitespace":case"encoding":case"bufferSize":case"history":case"cd":n=r.hasOwnProperty(e)?"boolean"==typeof r[e]?r[e]?"on":"off":r[e]+"":"";break;case"limit":case"trueValue":case"falseValue":t=r[r.hasOwnProperty(e+"Src")?e+"Src":e],n=N(t=r.keyIn?(s=A(t,r.caseSensitive)).values:t.filter((function(e){var r=typeof e;return"string"===r||"number"===r})),s.suppressed);break;case"limitCount":case"limitCountNotZero":n=(n=r[r.hasOwnProperty("limitSrc")?"limitSrc":"limit"].length)||"limitCountNotZero"!==e?n+"":"";break;case"lastInput":n=w;break;case"cwd":case"CWD":case"cwdHome":n=process.cwd(),"CWD"===e?n=m.basename(n):"cwdHome"===e&&(n=B(n));break;case"date":case"time":case"localeDate":case"localeTime":n=(new Date)["to"+e.replace(/^./,(function(e){return e.toUpperCase()}))+"String"]();break;default:"string"==typeof(i=(e.match(/^history_m(\d+)$/)||[])[1])&&(n=x[x.length-i]||"")}return n}function Q(e){var r,n,t,i,s=/^(.)-(.)$/.exec(e),o="";if(!s)return null;for(i=(r=s[1].charCodeAt(0))<(n=s[2].charCodeAt(0))?1:-1,t=r;t!==n+i;t+=i)o+=String.fromCharCode(t);return o}function V(e){var r,n,t=new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),i="",s=[];for(e=e.trim();r=t.exec(e);)n=r[3]||r[4]||"",r[1]&&(s.push(i),i=""),i+=n;return i&&s.push(i),s}function T(e,r){return!(!r.trueValue.length||!M(e,r.trueValue,r.caseSensitive))||(!r.falseValue.length||!M(e,r.falseValue,r.caseSensitive))&&e}function F(e){var r,n,t,i,s,o,a;function c(r){return R(r,e)}function u(r){e.display+=(/[^\r\n]$/.test(e.display)?"\n":"")+r}for(e.limitSrc=e.limit,e.displaySrc=e.display,e.limit="",e.display=P(e.display+"",c);;){if(r=I(e),n=!1,t="",e.defaultInput&&!r&&(r=e.defaultInput),e.history&&((i=/^\s*!(?:!|-1)(:p)?\s*$/.exec(r))?(s=x[0]||"",i[1]?n=!0:r=s,u(s+"\n"),n||(e.displayOnly=!0,I(e),e.displayOnly=!1)):r&&r!==x[x.length-1]&&(x=[r])),!n&&e.cd&&r)switch((o=V(r))[0].toLowerCase()){case"cd":if(o[1])try{process.chdir(B(o[1],!0))}catch(e){u(e+"")}n=!0;break;case"pwd":u(process.cwd()),n=!0}if(!n&&e.preCheck&&(r=(a=e.preCheck(r,e)).res,a.forceNext&&(n=!0)),!n){if(!e.limitSrc.length||M(r,e.limitSrc,e.caseSensitive))break;e.limitMessage&&(t=P(e.limitMessage,c))}u((t?t+"\n":"")+P(e.displaySrc+"",c))}return T(r,e)}function q(e,n,t){var i;return r.question(e,_({limitMessage:"Input valid number, please."},n,{limit:function(e){return i=t(e),!isNaN(i)&&"number"==typeof i},cd:!1})),i}function D(e,r){var n={},t={};return"object"==typeof e?(Object.keys(e).forEach((function(n){"function"==typeof e[n]&&(t[r.caseSensitive?n:n.toLowerCase()]=e[n])})),n.preCheck=function(e){var i;return n.args=V(e),i=n.args[0]||"",r.caseSensitive||(i=i.toLowerCase()),n.hRes="_"!==i&&t.hasOwnProperty(i)?t[i].apply(e,n.args.slice(1)):t.hasOwnProperty("_")?t._.apply(e,n.args):null,{res:e,forceNext:!1}},t.hasOwnProperty("_")||(n.limit=function(){var e=n.args[0]||"";return r.caseSensitive||(e=e.toLowerCase()),t.hasOwnProperty(e)})):n.preCheck=function(r){return n.args=V(r),n.hRes="function"!=typeof e||e.apply(r,n.args),{res:r,forceNext:!1}},n}function j(e,n,t){var i;return null==e&&(e="Are you sure? "),n&&!1===n.guide||!(e+="")||(e=e.replace(/\s*:?\s*$/,"")+" [y/n]: "),"boolean"==typeof(i=r.keyIn(e,_(n,{hideEchoBack:!1,limit:t,trueValue:"y",falseValue:"n",caseSensitive:!1})))?i:""}function z(e,n){var t;return n.length&&((t={})[e]=n[0]),r.setDefaultOptions(t)[e]}r._DBG_set_useExt=function(e){b=e},r._DBG_set_checkOptions=function(e){C=e},r._DBG_set_checkMethod=function(e){E=e},r._DBG_clearHistory=function(){w="",x=[]},r.setDefaultOptions=function(e){return g=_(!0,e),_(!0)},r.question=function(e,r){return F(_(_(!0,r),{display:e}))},r.prompt=function(e){var r=_(!0,e);return r.display=r.prompt,F(r)},r.keyIn=function(e,r){var n=_(_(!0,r),{display:e,keyIn:!0,keepWhitespace:!0});return n.limitSrc=n.limit.filter((function(e){var r=typeof e;return"string"===r||"number"===r})).map((function(e){return P(e+"",Q)})),n.limit=$(n.limitSrc.join("")),["trueValue","falseValue"].forEach((function(e){n[e]=n[e].reduce((function(e,r){var n=typeof r;return"string"===n||"number"===n?e=e.concat((r+"").split("")):e.push(r),e}),[])})),n.display=P(n.display+"",(function(e){return R(e,n)})),T(I(n),n)},r.questionEMail=function(e,n){return null==e&&(e="Input e-mail address: "),r.question(e,_({hideEchoBack:!1,limit:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,limitMessage:"Input valid e-mail address, please.",trueValue:null,falseValue:null},n,{keepWhitespace:!1,cd:!1}))},r.questionNewPassword=function(e,n){var t,i,s,o,a,c,u,l,p,f,d=_({hideEchoBack:!0,mask:"*",limitMessage:"It can include: $<charlist>\nAnd the length must be: $<length>",trueValue:null,falseValue:null,caseSensitive:!0},n,{history:!1,cd:!1,phContent:function(e){return"charlist"===e?t.text:"length"===e?i+"..."+s:null}});for(o=P((n=n||{}).charlist?n.charlist+"":"$<!-~>",Q),(isNaN(i=parseInt(n.min,10))||"number"!=typeof i)&&(i=12),(isNaN(s=parseInt(n.max,10))||"number"!=typeof s)&&(s=24),u=new RegExp("^["+$(o)+"]{"+i+","+s+"}$"),(t=A([o],d.caseSensitive,!0)).text=N(t.values,t.suppressed),a=null!=n.confirmMessage?n.confirmMessage:"Reinput a same one to confirm it: ",c=null!=n.unmatchMessage?n.unmatchMessage:"It differs from first one. Hit only the Enter key if you want to retry from first one.",null==e&&(e="Input new password: "),l=d.limitMessage;!f;)d.limit=u,d.limitMessage=l,p=r.question(e,d),d.limit=[p,""],d.limitMessage=c,f=r.question(a,d);return p},r.questionInt=function(e,r){return q(e,r,(function(e){return parseInt(e,10)}))},r.questionFloat=function(e,r){return q(e,r,parseFloat)},r.questionPath=function(e,n){var t,i="",s=_({hideEchoBack:!1,limitMessage:"$<error(\n)>Input valid path, please.$<( Min:)min>$<( Max:)max>",history:!0,cd:!0},n,{keepWhitespace:!1,limit:function(e){var r,s,o;function a(e){e.split(/\/|\\/).reduce((function(e,r){var n=m.resolve(e+=r+m.sep);if(d.existsSync(n)){if(!d.statSync(n).isDirectory())throw new Error("Non directory already exists: "+n)}else d.mkdirSync(n);return e}),"")}e=B(e,!0),i="";try{if(r=d.existsSync(e),t=r?d.realpathSync(e):m.resolve(e),!n.hasOwnProperty("exists")&&!r||"boolean"==typeof n.exists&&n.exists!==r)return i=(r?"Already exists":"No such file or directory")+": "+t,!1;if(!r&&n.create&&(n.isDirectory?a(t):(a(m.dirname(t)),d.closeSync(d.openSync(t,"w"))),t=d.realpathSync(t)),r&&(n.min||n.max||n.isFile||n.isDirectory)){if(s=d.statSync(t),n.isFile&&!s.isFile())return i="Not file: "+t,!1;if(n.isDirectory&&!s.isDirectory())return i="Not directory: "+t,!1;if(n.min&&s.size<+n.min||n.max&&s.size>+n.max)return i="Size "+s.size+" is out of range: "+t,!1}if("function"==typeof n.validate&&!0!==(o=n.validate(t)))return"string"==typeof o&&(i=o),!1}catch(e){return i=e+"",!1}return!0},phContent:function(e){return"error"===e?i:"min"!==e&&"max"!==e?null:n.hasOwnProperty(e)?n[e]+"":""}});return n=n||{},null==e&&(e='Input path (you can "cd" and "pwd"): '),r.question(e,s),t},r.promptCL=function(e,n){var t=_({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},n),i=D(e,t);return t.limit=i.limit,t.preCheck=i.preCheck,r.prompt(t),i.args},r.promptLoop=function(e,n){for(var t=_({hideEchoBack:!1,trueValue:null,falseValue:null,caseSensitive:!1,history:!0},n);!e(r.prompt(t)););},r.promptCLLoop=function(e,n){var t=_({hideEchoBack:!1,limitMessage:"Requested command is not available.",caseSensitive:!1,history:!0},n),i=D(e,t);for(t.limit=i.limit,t.preCheck=i.preCheck;r.prompt(t),!i.hRes;);},r.promptSimShell=function(e){return r.prompt(_({hideEchoBack:!1,history:!0},e,{prompt:u?"$<cwd>>":(process.env.USER||"")+(process.env.HOSTNAME?"@"+process.env.HOSTNAME.replace(/\..*$/,""):"")+":$<cwdHome>$ "}))},r.keyInYN=function(e,r){return j(e,r)},r.keyInYNStrict=function(e,r){return j(e,r,"yn")},r.keyInPause=function(e,n){null==e&&(e="Continue..."),n&&!1===n.guide||!(e+="")||(e=e.replace(/\s+$/,"")+" (Hit any key)"),r.keyIn(e,_({limit:null},n,{hideEchoBack:!0,mask:""}))},r.keyInSelect=function(e,n,t){var i=_({hideEchoBack:!1},t,{trueValue:null,falseValue:null,caseSensitive:!1,phContent:function(r){return"itemsCount"===r?e.length+"":"firstItem"===r?(e[0]+"").trim():"lastItem"===r?(e[e.length-1]+"").trim():null}}),s="",o={},a=49,c="\n";if(!Array.isArray(e)||!e.length||e.length>35)throw"`items` must be Array (max length: 35).";return e.forEach((function(e,r){var n=String.fromCharCode(a);s+=n,o[n]=r,c+="["+n+"] "+(e+"").trim()+"\n",a=57===a?97:a+1})),t&&!1===t.cancel||(s+="0",o[0]=-1,c+="[0] "+(t&&null!=t.cancel&&"boolean"!=typeof t.cancel?(t.cancel+"").trim():"CANCEL")+"\n"),i.limit=s,c+="\n",null==n&&(n="Choose one from list: "),(n+="")&&(t&&!1===t.guide||(n=n.replace(/\s*:?\s*$/,"")+" [$<limit>]: "),c+=n),o[r.keyIn(c,i).toLowerCase()]},r.getRawInput=function(){return c},r.setPrint=function(){return z("print",arguments)},r.setPrompt=function(){return z("prompt",arguments)},r.setEncoding=function(){return z("encoding",arguments)},r.setMask=function(){return z("mask",arguments)},r.setBufferSize=function(){return z("bufferSize",arguments)}},81:e=>{e.exports=require("child_process")},113:e=>{e.exports=require("crypto")},147:e=>{e.exports=require("fs")},37:e=>{e.exports=require("os")},17:e=>{e.exports=require("path")}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{n.r(t),n.d(t,{isPrime:()=>r,primeGame:()=>i,startPrimeGame:()=>s});var e=n(940);const r=e=>{if(e<=1)return!1;if(e%2==0&&e>2)return!1;const r=Math.sqrt(e);for(let n=3;n<=r;n+=2)if(e%n==0)return!1;return!0},i=()=>{const e=function(e,r){const n=1+100*Math.random();return Math.floor(n)}();return[r(e)?"yes":"no",String(e)]},s=()=>((r,n)=>{const t=(()=>{console.log("Welcome to the Brain Games!");const r=e.question("May I have your name? ");return console.log(`Hello, ${r}!`),r})();console.log(n);const i=`Congratulations, ${t}!`;for(let n=0;n<3;n+=1){const[n,i]=r(),s=`Question: ${i}`;console.log(s);const o=e.question("Your answer: "),a=`'${o}' is wrong answer ;(. Correct answer was '${n}'.\nLet's try again, ${t}!`;if(o!==n)return void console.log(a);console.log("Correct!")}console.log(i)})(i,'Answer "yes" if given number is prime. Otherwise answer "no".')})();var i=exports;for(var s in t)i[s]=t[s];t.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();
