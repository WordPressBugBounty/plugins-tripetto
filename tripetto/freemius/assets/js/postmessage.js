/*! WordPress form builder plugin for contact forms, surveys and quizzes - Tripetto 8.0.5 */
!function(e,t){var s,n,o,i,r,a,c,p,u=this;u.FS=u.FS||{},u.FS.PostMessage=(n=new NoJQueryPostMessageMixin("postMessage","receiveMessage"),o={},i=decodeURIComponent(document.location.hash.replace(/^#/,"")),r=i.substring(0,i.indexOf("/","https://"===i.substring(0,8)?8:7)),a=""!==i,c=e(window),p=e("html"),{init:function(e,t){s=e,n.receiveMessage((function(e){var t=JSON.parse(e.data);if(o[t.type])for(var s=0;s<o[t.type].length;s++)o[t.type][s](t.data)}),s),FS.PostMessage.receiveOnce("forward",(function(e){window.location=e.url})),(t=t||[]).length>0&&c.on("scroll",(function(){for(var e=0;e<t.length;e++)FS.PostMessage.postScroll(t[e])}))},init_child:function(){this.init(r),e(window).bind("load",(function(){FS.PostMessage.postHeight(),FS.PostMessage.post("loaded")}))},hasParent:function(){return a},postHeight:function(t,s){t=t||0,s=s||"#wrap_section",this.post("height",{height:t+e(s).outerHeight(!0)})},postScroll:function(e){this.post("scroll",{top:c.scrollTop(),height:c.height()-parseFloat(p.css("paddingTop"))-parseFloat(p.css("marginTop"))},e)},post:function(e,t,s){console.debug("PostMessage.post",e),s?n.postMessage(JSON.stringify({type:e,data:t}),s.src,s.contentWindow):n.postMessage(JSON.stringify({type:e,data:t}),i,window.parent)},receive:function(e,s){console.debug("PostMessage.receive",e),t===o[e]&&(o[e]=[]),o[e].push(s)},receiveOnce:function(e,t){this.is_set(e)||this.receive(e,t)},is_set:function(e){return t!=o[e]},parent_url:function(){return i},parent_subdomain:function(){return r}})}(jQuery);