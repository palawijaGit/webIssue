// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function(){var j=void 0,m=!0,r=null,A=!1;window.PR_SHOULD_USE_CONTINUATION=m;
function ba(a,g){function p(a){var k=a.nodeType;if(1==k){if(!c.test(a.className)){for(k=a.firstChild;k;k=k.nextSibling)p(k);k=a.nodeName.toLowerCase();if("br"===k||"li"===k)H[u]="\n",n[u<<1]=s++,n[u++<<1|1]=a}}else if(3==k||4==k)k=a.nodeValue,k.length&&(k=g?k.replace(/\r\n?/g,"\n"):k.replace(/[ \t\r\n]+/g," "),H[u]=k,n[u<<1]=s,s+=k.length,n[u++<<1|1]=a)}var c=/(?:^|\s)nocode(?:\s|$)/,H=[],s=0,n=[],u=0;p(a);return{a:H.join("").replace(/\n$/,""),c:n}}
function C(a,g,p,c){g&&(a={a:g,d:a},p(a),c.push.apply(c,a.e))}
function I(a,g){function p(e){for(var d=e.d,K=[d,"pln"],a=0,f=e.a.match(D)||[],aa={},h=0,k=f.length;h<k;++h){var c=f[h],b=aa[c],n=j,t;if("string"===typeof b)t=A;else{var l=u[c.charAt(0)];if(l)n=c.match(l[1]),b=l[0];else{for(t=0;t<qa;++t)if(l=g[t],n=c.match(l[1])){b=l[0];break}n||(b="pln")}if((t=5<=b.length&&"lang-"===b.substring(0,5))&&!(n&&"string"===typeof n[1]))t=A,b="src";t||(aa[c]=b)}l=a;a+=c.length;if(t){t=n[1];var s=c.indexOf(t),q=s+t.length;n[2]&&(q=c.length-n[2].length,s=q-t.length);b=b.substring(5);
C(d+l,c.substring(0,s),p,K);C(d+l+s,t,da(b,t),K);C(d+l+q,c.substring(q),p,K)}else K.push(d+l,b)}e.e=K}function c(e){for(var d=e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=d.length,c=[],f=0,b=0;f<a;++f){var h=d[f];"("===h?++b:"\\"===h.charAt(0)&&(h=+h.substring(1))&&(h<=b?c[h]=-1:d[f]=s(h))}for(f=1;f<c.length;++f)-1===c[f]&&(c[f]=++Z);for(b=f=0;f<a;++f)h=d[f],
"("===h?(++b,c[b]||(d[f]="(?:")):"\\"===h.charAt(0)&&(h=+h.substring(1))&&h<=b&&(d[f]="\\"+c[h]);for(f=0;f<a;++f)"^"===d[f]&&"^"!==d[f+1]&&(d[f]="");if(e.ignoreCase&&ca)for(f=0;f<a;++f)h=d[f],e=h.charAt(0),2<=h.length&&"["===e?d[f]=H(h):"\\"!==e&&(d[f]=h.replace(/[a-zA-Z]/g,function(e){e=e.charCodeAt(0);return"["+String.fromCharCode(e&-33,e|32)+"]"}));return d.join("")}function H(e){var d=e.substring(1,e.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]",
"g"));e=[];var a="^"===d[0],c=["["];a&&c.push("^");for(var a=a?1:0,f=d.length;a<f;++a){var b=d[a];if(/\\[bdsw]/i.test(b))c.push(b);else{var b=n(b),h;a+2<f&&"-"===d[a+1]?(h=n(d[a+2]),a+=2):h=b;e.push([b,h]);65>h||122<b||(65>h||90<b||e.push([Math.max(65,b)|32,Math.min(h,90)|32]),97>h||122<b||e.push([Math.max(97,b)&-33,Math.min(h,122)&-33]))}}e.sort(function(a,e){return a[0]-e[0]||e[1]-a[1]});d=[];f=[];for(a=0;a<e.length;++a)b=e[a],b[0]<=f[1]+1?f[1]=Math.max(f[1],b[1]):d.push(f=b);for(a=0;a<d.length;++a)b=
d[a],c.push(s(b[0])),b[1]>b[0]&&(b[1]+1>b[0]&&c.push("-"),c.push(s(b[1])));c.push("]");return c.join("")}function s(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);return"\\"===a||"-"===a||"]"===a||"^"===a?"\\"+a:a}function n(a){var d=a.charCodeAt(0);if(92!==d)return d;var c=a.charAt(1);return(d=b[c])?d:"0"<=c&&"7">=c?parseInt(a.substring(1),8):"u"===c||"x"===c?parseInt(a.substring(2),16):a.charCodeAt(1)}for(var u={},D,k=a.concat(g),y=[],w={},B=0,x=k.length;B<x;++B){var z=
k[B],F=z[3];if(F)for(var O=F.length;0<=--O;)u[F.charAt(O)]=z;z=z[1];F=""+z;w.hasOwnProperty(F)||(y.push(z),w[F]=r)}y.push(/[\0-\uffff]/);for(var Z=0,ca=A,k=A,w=0,B=y.length;w<B;++w)if(x=y[w],x.ignoreCase)k=m;else if(/[a-z]/i.test(x.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){ca=m;k=A;break}for(var b={b:8,t:9,n:10,v:11,f:12,r:13},z=[],w=0,B=y.length;w<B;++w){x=y[w];if(x.global||x.multiline)throw Error(""+x);z.push("(?:"+c(x)+")")}D=RegExp(z.join("|"),k?"gi":"g");var qa=g.length;
return p}
function J(a){var g=[],p=[];a.tripleQuotedStrings?g.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,r,"'\""]):a.multiLineStrings?g.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,r,"'\"`"]):g.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,r,"\"'"]);a.verbatimStrings&&
p.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,r]);var c=a.hashComments;c&&(a.cStyleComments?(1<c?g.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,r,"#"]):g.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,r,"#"]),p.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,r])):g.push(["com",/^#[^\r\n]*/,r,"#"]));a.cStyleComments&&(p.push(["com",/^\/\/[^\r\n]*/,r]),p.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,
r]));a.regexLiterals&&p.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);(c=a.types)&&p.push(["typ",c]);a=(""+a.keywords).replace(/^ | $/g,"");a.length&&p.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),r]);g.push(["pln",
/^\s+/,r," \r\n\t\u00a0"]);p.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,r],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,r],["pln",/^[a-z_$][a-z_$@0-9]*/i,r],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,r,"0123456789"],["pln",/^\\[\s\S]?/,r],["pun",/^.[^\s\w\.$@\'\"\`\/\\]*/,r]);return I(g,p)}function P(a,g){for(var p=g.length;0<=--p;){var c=g[p];Q.hasOwnProperty(c)?R.console&&console.warn("cannot override language handler %s",c):Q[c]=a}}
function da(a,g){if(!a||!Q.hasOwnProperty(a))a=/^\s*</.test(g)?"default-markup":"default-code";return Q[a]}
var R=window,W=["break,continue,do,else,for,if,return,while"],$=[[W,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],ea=[$,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],fa=
[$,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],ga=[fa,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],ha=[$,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
ia=[W,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],ja=[W,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],ka=[W,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],pa=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
ra=/\S/,sa=J({keywords:[ea,ga,ha,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",ia,ja,ka],hashComments:m,cStyleComments:m,multiLineStrings:m,regexLiterals:m}),Q={};P(sa,["default-code"]);
P(I([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));
P(I([["pln",/^[\s]+/,r," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,r,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),
["in.tag"]);P(I([],[["atv",/^[\s\S]+/]]),["uq.val"]);P(J({keywords:ea,hashComments:m,cStyleComments:m,types:pa}),"c cc cpp cxx cyc m".split(" "));P(J({keywords:"null,true,false"}),["json"]);P(J({keywords:ga,hashComments:m,cStyleComments:m,verbatimStrings:m,types:pa}),["cs"]);P(J({keywords:fa,cStyleComments:m}),["java"]);P(J({keywords:ka,hashComments:m,multiLineStrings:m}),["bash","bsh","csh","sh"]);P(J({keywords:ia,hashComments:m,multiLineStrings:m,tripleQuotedStrings:m}),["cv","py","python"]);
P(J({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:m,multiLineStrings:m,regexLiterals:m}),["perl","pl","pm"]);P(J({keywords:ja,hashComments:m,multiLineStrings:m,regexLiterals:m}),["rb","ruby"]);P(J({keywords:ha,cStyleComments:m,regexLiterals:m}),["javascript","js"]);P(I([],[["str",/^[\s\S]+/]]),["regex"]);
P(I([["pln",/^[ \t\r\n\f]+/,r," \t\r\n\f"]],[["str",/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,r],["str",/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,r],["lang-css-str",/^url\(([^\)\"\']+)\)/i],["kwd",/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,r],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],["com",/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],["com",/^(?:\x3c!--|--\x3e)/],["lit",/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
["lit",/^#(?:[0-9a-f]{3}){1,2}\b/i],["pln",/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],["pun",/^[^\s\w\'\"]+/]]),["css"]);P(I([],[["kwd",/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);P(I([],[["str",/^[^\)\"\']+/]]),["css-str"]);
P(I([["pln",/^[\t\n\r \xA0]+/,r,"\t\n\r \u00a0"],["str",/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,r,"\"'"]],[["com",/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],["kwd",/^(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\w-]|$)/i,r],
["lit",/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],["pln",/^[a-z_][\w-]*/i],["pun",/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);
P(I([["pln",/^[\t\n\r \xA0\u2028\u2029]+/,r,"\t\n\r \u00a0\u2028\u2029"],["str",/^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i,r,'"\u201c\u201d'],["com",/^[\'\u2018\u2019](?:_(?:\r\n?|[^\r]?)|[^\r\n_\u2028\u2029])*/,r,"'\u2018\u2019"]],[["kwd",/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,
r],["com",/^REM\b[^\r\n\u2028\u2029]*/i],["lit",/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],["pln",/^(?:(?:[a-z]|_\w)\w*(?:\[[%&@!#]+\])?|\[(?:[a-z]|_\w)\w*\])/i],["pun",/^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],["pun",/^(?:\[|\])/]]),["vb","vbs"]);
R.prettyPrint=function(a,g){function p(){for(var c=R.PR_SHOULD_USE_CONTINUATION?k.now()+250:Infinity;y<s.length&&k.now()<c;y++){var b=s[y],g=b.className;if(x.test(g)&&!z.test(g)){for(var e=A,d=b.parentNode;d;d=d.parentNode)if(Z.test(d.tagName)&&d.className&&x.test(d.className)){e=m;break}if(!e){b.className+=" prettyprinted";var g=g.match(B),n;if(e=!g){for(var e=b,d=j,v=e.firstChild;v;v=v.nextSibling)var f=v.nodeType,d=1===f?d?e:v:3===f?ra.test(v.nodeValue)?e:d:d;e=(n=d===e?j:d)&&O.test(n.tagName)}e&&
(g=n.className.match(B));g&&(g=g[1]);F.test(b.tagName)?e=1:(e=b.currentStyle,d=H.defaultView,e=(e=e?e.whiteSpace:d&&d.getComputedStyle?d.getComputedStyle(b,r).getPropertyValue("white-space"):0)&&"pre"===e.substring(0,3));b=w={h:g,g:b,i:e};g=b.h;try{var u=ba(b.g,b.i),h=u.a;b.a=h;b.c=u.c;b.d=0;da(g,h)(b);var v=b,D=/\bMSIE\s(\d+)/.exec(navigator.userAgent),D=D&&8>=+D[1],b=/\n/g,X=v.a,Y=X.length,g=0,N=v.c,t=N.length,e=0,l=v.e,L=l.length,d=0;l[L]=Y;for(var q=f=j,q=f=0;q<L;)l[q]!==l[q+2]?(l[f++]=l[q++],
l[f++]=l[q++]):q+=2;L=f;for(q=f=0;q<L;){for(var ta=l[q],la=l[q+1],E=q+2;E+2<=L&&l[E+1]===la;)E+=2;l[f++]=ta;l[f++]=la;q=E}l.length=f;var M=v.g,v=j;M&&(v=M.style.display,M.style.display="none");try{for(;e<t;){var S=N[e+2]||Y,ma=l[d+2]||Y,E=Math.min(S,ma),G=N[e+1],T;if(1!==G.nodeType&&(T=X.substring(g,E))){D&&(T=T.replace(b,"\r"));G.nodeValue=T;var na=G.ownerDocument,U=na.createElement("span");U.className=l[d+1];var oa=G.parentNode;oa.replaceChild(U,G);U.appendChild(G);g<S&&(N[e+1]=G=na.createTextNode(X.substring(E,
S)),oa.insertBefore(G,U.nextSibling))}g=E;g>=S&&(e+=2);g>=ma&&(d+=2)}}finally{M&&(M.style.display=v)}}catch(V){R.console&&console.log(V&&V.stack?V.stack:V)}}}}y<s.length?setTimeout(p,250):"function"===typeof a&&a()}for(var c=g||document.body,H=c.ownerDocument||document,c=[c.getElementsByTagName("pre"),c.getElementsByTagName("code"),c.getElementsByTagName("xmp")],s=[],n=0;n<c.length;++n)for(var u=0,D=c[n].length;u<D;++u)s.push(c[n][u]);var c=r,k=Date;k.now||(k={now:function(){return+new Date}});var y=
0,w,B=/\blang(?:uage)?-([\w.]+)(?!\S)/,x=/\bprettyprint\b/,z=/\bprettyprinted\b/,F=/pre|xmp/i,O=/^code$/i,Z=/^(?:pre|code|xmp)$/i;p()}})();