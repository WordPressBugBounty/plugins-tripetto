/*! WordPress form builder plugin for contact forms, surveys and quizzes - Tripetto 8.0.7 */
!function(n){n.extend({form:function(r,e,t){null==t&&(t="POST"),null==e&&(e={});var o=n("<form>").attr({method:t,action:r}).css({display:"none"}),a=function(r,e){if(n.isArray(e))for(var t=0;t<e.length;t++){var i=e[t];a(r+"[]",i)}else if("object"==typeof e)for(var f in e)e.hasOwnProperty(f)&&a(r+"["+f+"]",e[f]);else null!=e&&o.append(n("<input>").attr({type:"hidden",name:String(r),value:String(e)}))};for(var i in e)e.hasOwnProperty(i)&&a(i,e[i]);return o.appendTo("body")}})}(jQuery);