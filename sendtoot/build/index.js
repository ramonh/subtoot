!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Suborbital=t():e.Suborbital=t()}(this,(()=>(()=>{"use strict";var e={427:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Env=t.QueryType=t.FieldType=t.HttpMethod=t.LogLevel=void 0;const n=r(445);t.LogLevel=Object.freeze({0:"Null",Null:0,1:"Error",Error:1,2:"Warn",Warn:2,3:"Info",Info:3,4:"Debug",Debug:4}),t.HttpMethod=Object.freeze({0:"Get",Get:0,1:"Head",Head:1,2:"Options",Options:2,3:"Post",Post:3,4:"Put",Put:4,5:"Patch",Patch:5,6:"Delete",Delete:6}),t.FieldType=Object.freeze({0:"Meta",Meta:0,1:"Body",Body:1,2:"Header",Header:2,3:"Params",Params:3,4:"State",State:4,5:"Query",Query:5}),t.QueryType=Object.freeze({0:"Select",Select:0,1:"Insert",Insert:1,2:"Update",Update:2,3:"Delete",Delete:3}),t.Env=class{addToImports(e){}async instantiate(e,t){if(t=t||{},this.addToImports(t),e instanceof WebAssembly.Instance)this.instance=e;else if(e instanceof WebAssembly.Module)this.instance=await WebAssembly.instantiate(e,t);else if(e instanceof ArrayBuffer||e instanceof Uint8Array){const{instance:r}=await WebAssembly.instantiate(e,t);this.instance=r}else{const{instance:r}=await WebAssembly.instantiateStreaming(e,t);this.instance=r}this._exports=this.instance.exports}returnResult(e,t){const r=this._exports.memory,s=this._exports.canonical_abi_realloc,o=e,i=o.length,a=s(0,0,1,1*i);new Uint8Array(r.buffer,a,1*i).set(new Uint8Array(o.buffer,o.byteOffset,1*i)),this._exports["return-result"](a,i,(0,n.clamp_host)(t,0,4294967295))}returnError(e,t,r){const s=this._exports.memory,o=this._exports.canonical_abi_realloc,i=(0,n.utf8_encode)(t,o,s),a=n.UTF8_ENCODED_LEN;this._exports["return-error"]((0,n.clamp_host)(e,-2147483648,2147483647),i,a,(0,n.clamp_host)(r,0,4294967295))}logMsg(e,r,s){const o=this._exports.memory,i=this._exports.canonical_abi_realloc,a=(0,n.utf8_encode)(e,i,o),d=n.UTF8_ENCODED_LEN,l=r;if(!(l in t.LogLevel))throw new RangeError("invalid variant specified for LogLevel");this._exports["log-msg"](a,d,Number.isInteger(l)?l:t.LogLevel[l],(0,n.clamp_host)(s,0,4294967295))}fetchUrl(e,r,s,o){const i=this._exports.memory,a=this._exports.canonical_abi_realloc,d=e;if(!(d in t.HttpMethod))throw new RangeError("invalid variant specified for HttpMethod");const l=(0,n.utf8_encode)(r,a,i),c=n.UTF8_ENCODED_LEN,u=s,h=u.length,f=a(0,0,1,1*h);return new Uint8Array(i.buffer,f,1*h).set(new Uint8Array(u.buffer,u.byteOffset,1*h)),this._exports["fetch-url"](Number.isInteger(d)?d:t.HttpMethod[d],l,c,f,h,(0,n.clamp_host)(o,0,4294967295))}graphqlQuery(e,t,r){const s=this._exports.memory,o=this._exports.canonical_abi_realloc,i=(0,n.utf8_encode)(e,o,s),a=n.UTF8_ENCODED_LEN,d=(0,n.utf8_encode)(t,o,s),l=n.UTF8_ENCODED_LEN;return this._exports["graphql-query"](i,a,d,l,(0,n.clamp_host)(r,0,4294967295))}cacheSet(e,t,r,s){const o=this._exports.memory,i=this._exports.canonical_abi_realloc,a=(0,n.utf8_encode)(e,i,o),d=n.UTF8_ENCODED_LEN,l=t,c=l.length,u=i(0,0,1,1*c);return new Uint8Array(o.buffer,u,1*c).set(new Uint8Array(l.buffer,l.byteOffset,1*c)),this._exports["cache-set"](a,d,u,c,(0,n.clamp_host)(r,0,4294967295),(0,n.clamp_host)(s,0,4294967295))}cacheGet(e,t){const r=this._exports.memory,s=this._exports.canonical_abi_realloc,o=(0,n.utf8_encode)(e,s,r),i=n.UTF8_ENCODED_LEN;return this._exports["cache-get"](o,i,(0,n.clamp_host)(t,0,4294967295))}requestGetField(e,r,s){const o=this._exports.memory,i=this._exports.canonical_abi_realloc,a=e;if(!(a in t.FieldType))throw new RangeError("invalid variant specified for FieldType");const d=(0,n.utf8_encode)(r,i,o),l=n.UTF8_ENCODED_LEN;return this._exports["request-get-field"](Number.isInteger(a)?a:t.FieldType[a],d,l,(0,n.clamp_host)(s,0,4294967295))}getStaticFile(e,t){const r=this._exports.memory,s=this._exports.canonical_abi_realloc,o=(0,n.utf8_encode)(e,s,r),i=n.UTF8_ENCODED_LEN;return this._exports["get-static-file"](o,i,(0,n.clamp_host)(t,0,4294967295))}dbExec(e,r,s){const o=this._exports.memory,i=this._exports.canonical_abi_realloc,a=e;if(!(a in t.QueryType))throw new RangeError("invalid variant specified for QueryType");const d=(0,n.utf8_encode)(r,i,o),l=n.UTF8_ENCODED_LEN;return this._exports["db-exec"](Number.isInteger(a)?a:t.QueryType[a],d,l,(0,n.clamp_host)(s,0,4294967295))}getFfiResult(e,t){return this._exports["get-ffi-result"]((0,n.clamp_host)(e,0,4294967295),(0,n.clamp_host)(t,0,4294967295))}addFfiVar(e,t,r){const s=this._exports.memory,o=this._exports.canonical_abi_realloc,i=(0,n.utf8_encode)(e,o,s),a=n.UTF8_ENCODED_LEN,d=(0,n.utf8_encode)(t,o,s),l=n.UTF8_ENCODED_LEN;return this._exports["add-ffi-var"](i,a,d,l,(0,n.clamp_host)(r,0,4294967295))}returnAbort(e,t,r,s,o){const i=this._exports.memory,a=this._exports.canonical_abi_realloc,d=(0,n.utf8_encode)(e,a,i),l=n.UTF8_ENCODED_LEN,c=(0,n.utf8_encode)(t,a,i),u=n.UTF8_ENCODED_LEN;this._exports["return-abort"](d,l,c,u,(0,n.clamp_host)(r,0,4294967295),(0,n.clamp_host)(s,0,4294967295),(0,n.clamp_host)(o,0,4294967295))}}},445:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UTF8_ENCODED_LEN=t.utf8_encode=t.clamp_host=void 0,t.clamp_host=function(e,t,r){if(!Number.isInteger(e))throw new TypeError("must be an integer");if(e<t||e>r)throw new RangeError(`must be between ${t} and ${r}`);return e};const r=new TextEncoder("utf-8");t.utf8_encode=function(e,n,s){if("string"!=typeof e)throw new TypeError("expected a string");if(0===e.length)return t.UTF8_ENCODED_LEN=0,1;let o=0,i=0,a=0;for(;e.length>0;){i=n(i,o,1,o+e.length),o+=e.length;const{read:t,written:d}=r.encodeInto(e,new Uint8Array(s.buffer,i+a,o-a));a+=d,e=e.slice(t)}return o>a&&(i=n(i,o,1,a)),t.UTF8_ENCODED_LEN=a,i},t.UTF8_ENCODED_LEN=0},169:(e,t,r)=>{t.dJ=void 0;const n=r(259),s=r(325),o=r(998),i=r(186),a=r(791),d=r(682),l=r(191),c=r(521);r(663);new n.default,new s.default,new o.default,new i.default,t.dJ=new a.default,new d.default,new l.default,new c.default},442:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(663),s=new TextDecoder;t.default=class{get env(){return n.default.env}get ident(){return n.default.ident}ffiResult(e){let t=!1;e<0&&(t=!0,e*=-1);const r=this.env._exports.canonical_abi_realloc(0,0,1,e);this.env.getFfiResult(r,this.ident);const n=new Uint8Array(this.env._exports.memory.buffer,r,e);if(t){const e=s.decode(n);throw new Error(e)}return new Uint8Array(n)}}},325:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),s=new TextEncoder,o=new TextDecoder;class i extends n.default{get(e){return o.decode(this.getBytes(e))}getBytes(e){const t=this.env.cacheGet(e,this.ident);return this.ffiResult(t)}set(e,t,r){let n;n="string"==typeof t?s.encode(t):t,this.env.cacheSet(e,n,r,this.ident)}}t.default=i},259:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(427),s=r(442),o=(new TextEncoder,new TextDecoder);class i extends s.default{select(e,t){return this.exec(n.QueryType.Select,e,t||{})}insert(e,t){return this.exec(n.QueryType.Insert,e,t||{})}update(e,t){return this.exec(n.QueryType.Update,e,t||{})}delete(e,t){return this.exec(n.QueryType.Delete,e,t||{})}exec(e,t,r){Object.entries(r).forEach((([e,t])=>{this.env.addFfiVar(e,t,this.ident)}));const n=this.env.dbExec(e,t,this.ident),s=o.decode(this.ffiResult(n));return s?JSON.parse(s):{}}}t.default=i},663:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(427);class s{}t.default=s,s.env=new n.Env},998:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),s=new TextDecoder;class o extends n.default{getStatic(e){return s.decode(this.getStaticBytes(e))}getStaticBytes(e){const t=this.env.getStaticFile(e,this.ident);return this.ffiResult(t)}}t.default=o},186:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),s=r(928),o=new TextDecoder;class i extends n.default{query(e,t,r){const n=e+(r?(0,s.renderHeaderString)(r):""),i=this.env.graphqlQuery(n,t,this.ident),a=this.ffiResult(i);return o.decode(a)}}t.default=i},928:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderHeaderString=void 0,t.renderHeaderString=function(e){return Object.entries(e).map((([e,t])=>`::${e}:${t}`)).join("")}},791:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HttpResponse=void 0;const n=r(442),s=r(427),o=r(928),i=new TextEncoder,a=new TextDecoder;class d{constructor(e){this.value=e}arrayBuffer(){return this.value.buffer}json(){return JSON.parse(this.text())}text(){return a.decode(this.value)}}t.HttpResponse=d;class l extends n.default{get(e,t){return this.request(s.HttpMethod.Get,e,new Uint8Array([]),t||{})}head(e,t){return this.request(s.HttpMethod.Head,e,new Uint8Array([]),t||{})}options(e,t){return this.request(s.HttpMethod.Options,e,new Uint8Array([]),t||{})}post(e,t,r){return this.request(s.HttpMethod.Post,e,t,r||{})}put(e,t,r){return this.request(s.HttpMethod.Put,e,t,r||{})}patch(e,t,r){return this.request(s.HttpMethod.Patch,e,t,r||{})}delete(e,t){return this.request(s.HttpMethod.Delete,e,new Uint8Array([]),t||{})}request(e,t,r,n){let s;s="string"==typeof r?i.encode(r):r;const a=t+(0,o.renderHeaderString)(n),l=this.env.fetchUrl(e,a,s,this.ident);return new d(this.ffiResult(l))}}t.default=l},682:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),s=r(427);class o extends n.default{info(e){this.log(e,s.LogLevel.Info)}warn(e){this.log(e,s.LogLevel.Warn)}error(e){this.log(e,s.LogLevel.Error)}debug(e){this.log(e,s.LogLevel.Debug)}log(e,t){this.env.logMsg(e,t,this.ident)}}t.default=o},191:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),s=r(427),o=new TextDecoder;class i extends n.default{method(){return o.decode(this.getField(s.FieldType.Meta,"method"))}url(){return o.decode(this.getField(s.FieldType.Meta,"url"))}id(){return o.decode(this.getField(s.FieldType.Meta,"id"))}body(){return o.decode(this.getField(s.FieldType.Body,"body"))}bodyBytes(){return this.getField(s.FieldType.Body,"body")}bodyField(e){return o.decode(this.getField(s.FieldType.Body,e))}header(e){return o.decode(this.getField(s.FieldType.Header,e))}urlParam(e){return o.decode(this.getField(s.FieldType.Params,e))}state(e){return o.decode(this.getField(s.FieldType.State,e))}stateBytes(e){return this.getField(s.FieldType.State,e)}getField(e,t){const r=this.env.requestGetField(e,t,this.ident);return this.ffiResult(r)}}t.default=i},521:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(442),s=new TextEncoder;class o extends n.default{returnResult(e){const t="string"==typeof e?s.encode(e):e;this.env.returnResult(t,this.ident)}returnError(e,t){this.env.returnError(e,t,this.ident)}}t.default=o}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{run:()=>t});var e=r(169);const t=t=>{let r="status="+encodeURIComponent("Hello from WebAssembly!");return e.dJ.post("https://mastodon.example/api/v1/statuses",r,{Authorization:"Bearer 1VbeytRx9BN2jB_if3PB711T7NJzC7bDuV7yZnepjw0","Content-Type":"application/x-www-form-urlencoded"}),"ok"}})(),n})()));
//# sourceMappingURL=index.js.map