/**
 * @author 
 * @email 
 * @descrip zhong'ou wechat.
 * @version v1.0.0
 */
define(function(require,exports,module){var e=require("zepto");+function($){"use strict";var e=function(e){function t(){if(r.opened)for(var e=0;e<r.cols.length;e++)r.cols[e].divider||(r.cols[e].calcSize(),r.cols[e].setValue(r.cols[e].value,0,!1))}function a(e){if(e.preventDefault(),$.device.isWeixin&&$.device.android&&r.params.inputReadOnly&&(this.focus(),this.blur()),!r.opened&&(r.open(),r.params.scrollToInput)){var t=r.input.parents(".content");if(0===t.length)return;var a,i=parseInt(t.css("padding-top"),10),n=parseInt(t.css("padding-bottom"),10),o=t[0].offsetHeight-i-r.container.height(),s=t[0].scrollHeight-i-r.container.height(),c=r.input.offset().top-i+r.input[0].offsetHeight;if(c>o){var l=t.scrollTop()+c-o;l+o>s&&(a=l+o-s+n,o===s&&(a=r.container.height()),t.css({"padding-bottom":a+"px"})),t.scrollTop(l,300)}}}function i(e){r.opened&&(r.input&&r.input.length>0?e.target!==r.input[0]&&0===$(e.target).parents(".picker-modal").length&&r.close():0===$(e.target).parents(".picker-modal").length&&r.close())}function n(){r.opened=!1,r.input&&r.input.length>0&&r.input.parents(".content").css({"padding-bottom":""}),r.params.onClose&&r.params.onClose(r),r.container.find(".picker-items-col").each(function(){r.destroyPickerCol(this)})}var r=this,o={updateValuesOnMomentum:!1,updateValuesOnTouchmove:!0,rotateEffect:!1,momentumRatio:7,freeMode:!1,scrollToInput:!0,inputReadOnly:!0,toolbar:!0,toolbarCloseText:"确定",toolbarTemplate:'<header class="bar bar-nav">\t                <button class="button button-link pull-right close-picker">确定</button>\t                <h1 class="title">请选择</h1>\t                </header>'};e=e||{};for(var s in o)"undefined"==typeof e[s]&&(e[s]=o[s]);r.params=e,r.cols=[],r.initialized=!1,r.inline=!!r.params.container;var c=$.device.ios||navigator.userAgent.toLowerCase().indexOf("safari")>=0&&navigator.userAgent.toLowerCase().indexOf("chrome")<0&&!$.device.android;return r.setValue=function(e,t){for(var a=0,i=0;i<r.cols.length;i++)r.cols[i]&&!r.cols[i].divider&&(r.cols[i].setValue(e[a],t),a++)},r.updateValue=function(){for(var e=[],t=[],a=0;a<r.cols.length;a++)r.cols[a].divider||(e.push(r.cols[a].value),t.push(r.cols[a].displayValue));e.indexOf(void 0)>=0||(r.value=e,r.displayValue=t,r.params.onChange&&r.params.onChange(r,r.value,r.displayValue),r.input&&r.input.length>0&&($(r.input).val(r.params.formatValue?r.params.formatValue(r,r.value,r.displayValue):r.value.join(" ")),$(r.input).trigger("change")))},r.initPickerCol=function(e,t){function a(){g=$.requestAnimationFrame(function(){u.updateItems(void 0,void 0,0),a()})}function i(e){w||k||(e.preventDefault(),k=!0,y=x="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,V=(new Date).getTime(),A=!0,T=b=$.getTranslate(u.wrapper[0],"y"))}function n(e){if(k){e.preventDefault(),A=!1,x="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,w||($.cancelAnimationFrame(g),w=!0,T=b=$.getTranslate(u.wrapper[0],"y"),u.wrapper.transition(0)),e.preventDefault();var t=x-y;b=T+t,M=void 0,b<v&&(b=v-Math.pow(v-b,.8),M="min"),b>h&&(b=h+Math.pow(b-h,.8),M="max"),u.wrapper.transform("translate3d(0,"+b+"px,0)"),u.updateItems(void 0,b,0,r.params.updateValuesOnTouchmove),I=b-E||b,O=(new Date).getTime(),E=b}}function o(e){if(!k||!w)return void(k=w=!1);k=w=!1,u.wrapper.transition(""),M&&("min"===M?u.wrapper.transform("translate3d(0,"+v+"px,0)"):u.wrapper.transform("translate3d(0,"+h+"px,0)")),C=(new Date).getTime();var t,i;C-V>300?i=b:(t=Math.abs(I/(C-O)),i=b+I*r.params.momentumRatio),i=Math.max(Math.min(i,h),v);var n=-Math.floor((i-h)/f);r.params.freeMode||(i=-n*f+h),u.wrapper.transform("translate3d(0,"+parseInt(i,10)+"px,0)"),u.updateItems(n,i,"",!0),r.params.updateValuesOnMomentum&&(a(),u.wrapper.transitionEnd(function(){$.cancelAnimationFrame(g)})),setTimeout(function(){A=!0},100)}function s(e){if(A){$.cancelAnimationFrame(g);var t=$(this).attr("data-picker-value");u.setValue(t)}}var l=$(e),p=l.index(),u=r.cols[p];if(!u.divider){u.container=l,u.wrapper=u.container.find(".picker-items-col-wrapper"),u.items=u.wrapper.find(".picker-item");var d,f,m,v,h;u.replaceValues=function(e,t){u.destroyEvents(),u.values=e,u.displayValues=t;var a=r.columnHTML(u,!0);u.wrapper.html(a),u.items=u.wrapper.find(".picker-item"),u.calcSize(),u.setValue(u.values[0],0,!0),u.initEvents()},u.calcSize=function(){r.params.rotateEffect&&(u.container.removeClass("picker-items-col-absolute"),u.width||u.container.css({width:""}));var e,t;e=0,t=u.container[0].offsetHeight,d=u.wrapper[0].offsetHeight,f=u.items[0].offsetHeight,m=f*u.items.length,v=t/2-m+f/2,h=t/2-f/2,u.width&&(e=u.width,parseInt(e,10)===e&&(e+="px"),u.container.css({width:e})),r.params.rotateEffect&&(u.width||(u.items.each(function(){var t=$(this);t.css({width:"auto"}),e=Math.max(e,t[0].offsetWidth),t.css({width:""})}),u.container.css({width:e+2+"px"})),u.container.addClass("picker-items-col-absolute"))},u.calcSize(),u.wrapper.transform("translate3d(0,"+h+"px,0)").transition(0);var g;u.setValue=function(e,t,i){"undefined"==typeof t&&(t="");var n=u.wrapper.find('.picker-item[data-picker-value="'+e+'"]').index();if("undefined"!=typeof n&&n!==-1){var o=-n*f+h;u.wrapper.transition(t),u.wrapper.transform("translate3d(0,"+o+"px,0)"),r.params.updateValuesOnMomentum&&u.activeIndex&&u.activeIndex!==n&&($.cancelAnimationFrame(g),u.wrapper.transitionEnd(function(){$.cancelAnimationFrame(g)}),a()),u.updateItems(n,o,t,i)}},u.updateItems=function(e,t,a,i){"undefined"==typeof t&&(t=$.getTranslate(u.wrapper[0],"y")),"undefined"==typeof e&&(e=-Math.round((t-h)/f)),e<0&&(e=0),e>=u.items.length&&(e=u.items.length-1);var n=u.activeIndex;u.activeIndex=e,u.wrapper.find(".picker-selected").removeClass("picker-selected"),r.params.rotateEffect&&u.items.transition(a);var o=u.items.eq(e).addClass("picker-selected").transform("");if((i||"undefined"==typeof i)&&(u.value=o.attr("data-picker-value"),u.displayValue=u.displayValues?u.displayValues[e]:u.value,n!==e&&(u.onChange&&u.onChange(r,u.value,u.displayValue),r.updateValue())),r.params.rotateEffect){(t-(Math.floor((t-h)/f)*f+h))/f;u.items.each(function(){var e=$(this),a=e.index()*f,i=h-t,n=a-i,r=n/f,o=Math.ceil(u.height/f/2)+1,s=-18*r;s>180&&(s=180),s<-180&&(s=-180),Math.abs(r)>o?e.addClass("picker-item-far"):e.removeClass("picker-item-far"),e.transform("translate3d(0, "+(-t+h)+"px, "+(c?-110:0)+"px) rotateX("+s+"deg)")})}},t&&u.updateItems(0,h,0);var k,w,y,x,V,C,T,M,b,E,I,O,A=!0;u.initEvents=function(e){var t=e?"off":"on";u.container[t]($.touchEvents.start,i),u.container[t]($.touchEvents.move,n),u.container[t]($.touchEvents.end,o),u.items[t]("click",s)},u.destroyEvents=function(){u.initEvents(!0)},u.container[0].f7DestroyPickerCol=function(){u.destroyEvents()},u.initEvents()}},r.destroyPickerCol=function(e){e=$(e),"f7DestroyPickerCol"in e[0]&&e[0].f7DestroyPickerCol()},$(window).on("resize",t),r.columnHTML=function(e,t){var a="",i="";if(e.divider)i+='<div class="picker-items-col picker-items-col-divider '+(e.textAlign?"picker-items-col-"+e.textAlign:"")+" "+(e.cssClass||"")+'">'+e.content+"</div>";else{for(var n=0;n<e.values.length;n++)a+='<div class="picker-item" data-picker-value="'+e.values[n]+'">'+(e.displayValues?e.displayValues[n]:e.values[n])+"</div>";i+='<div class="picker-items-col '+(e.textAlign?"picker-items-col-"+e.textAlign:"")+" "+(e.cssClass||"")+'"><div class="picker-items-col-wrapper">'+a+"</div></div>"}return t?a:i},r.layout=function(){var e,t="",a="";r.cols=[];var i="";for(e=0;e<r.params.cols.length;e++){var n=r.params.cols[e];i+=r.columnHTML(r.params.cols[e]),r.cols.push(n)}a="picker-modal picker-columns "+(r.params.cssClass||"")+(r.params.rotateEffect?" picker-3d":""),t='<div class="'+a+'">'+(r.params.toolbar?r.params.toolbarTemplate.replace(/{{closeText}}/g,r.params.toolbarCloseText):"")+'<div class="picker-modal-inner picker-items">'+i+'<div class="picker-center-highlight"></div></div></div>',r.pickerHTML=t},r.params.input&&(r.input=$(r.params.input),r.input.length>0&&(r.params.inputReadOnly&&r.input.prop("readOnly",!0),r.inline||r.input.on("click",a))),r.inline||$("html").on("click",i),r.opened=!1,r.open=function(){r.opened||(r.layout(),r.inline?(r.container=$(r.pickerHTML),r.container.addClass("picker-modal-inline"),$(r.params.container).append(r.container),r.opened=!0):(r.container=$($.pickerModal(r.pickerHTML)),$(r.container).one("opened",function(){r.opened=!0}).on("close",function(){n()})),r.container[0].f7Picker=r,r.container.find(".picker-items-col").each(function(){var e=!0;(!r.initialized&&r.params.value||r.initialized&&r.value)&&(e=!1),r.initPickerCol(this,e)}),r.initialized?r.value&&r.setValue(r.value,0):r.params.value&&r.setValue(r.params.value,0)),r.initialized=!0,r.params.onOpen&&r.params.onOpen(r)},r.close=function(){r.opened&&!r.inline&&$.closeModal(r.container)},r.destroy=function(){r.close(),r.params.input&&r.input.length>0&&r.input.off("click",a),$("html").off("click",i),$(window).off("resize",t)},r.inline&&r.open(),r};$(document).on("click",".close-picker",function(){var e=$(".picker-modal.modal-in");$.closeModal(e)}),$.fn.picker=function(t){var a=arguments;return this.each(function(){if(this){var i=$(this),n=i.data("picker");if(!n){var r=$.extend({input:this,value:i.val()?i.val().split(" "):""},t);n=new e(r),i.data("picker",n)}"string"==typeof t&&n[t].apply(n,Array.prototype.slice.call(a,1))}})}}(e)});