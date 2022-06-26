!function(){var n,r,o,h,l={}.hasOwnProperty;function c(t,e){var s,i;this.form_field=t,this.options=null!=e?e:{},this.label_click_handler=(s=this.label_click_handler,i=this,function(){return s.apply(i,arguments)}),c.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}function t(){this.options_index=0,this.parsed=[]}t.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,o,r,h=this.parsed.length;for(this.parsed.push({array_index:h,group:!0,label:t.label,title:t.title||void 0,children:0,disabled:t.disabled,classes:t.className}),r=[],e=0,s=(o=t.childNodes).length;e<s;e++)i=o[e],r.push(this.add_option(i,h,t.disabled));return r},t.prototype.add_option=function(t,e,s){if("OPTION"===t.nodeName.toUpperCase())return""!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title||void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},(h=t).select_to_array=function(t){for(var e,s,i=new h,o=0,r=(s=t.childNodes).length;o<r;o++)e=s[o],i.add_node(e);return i.parsed},c.prototype.set_default_values=function(){return this.click_test_action=(s=this,function(t){return s.test_active_click(t)}),this.activate_action=(e=this,function(t){return e.activate_field(t)}),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select;var e,s},c.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||c.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||c.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||c.default_no_result_text},c.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+this.escape_html(t.group_label)+"</b>"+t.html:t.html},c.prototype.mouse_enter=function(){return this.mouse_on_container=!0},c.prototype.mouse_leave=function(){return this.mouse_on_container=!1},c.prototype.input_focus=function(t){if(this.is_multiple){if(!this.active_field)return setTimeout((e=this,function(){return e.container_mousedown()}),50)}else if(!this.active_field)return this.activate_field();var e},c.prototype.input_blur=function(t){if(!this.mouse_on_container)return this.active_field=!1,setTimeout((e=this,function(){return e.blur_test()}),100);var e},c.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},c.prototype.results_option_build=function(t){for(var e,s,i,o="",r=0,h=0,n=(i=this.results_data).length;h<n&&(""!==(s=(e=i[h]).group?this.result_add_group(e):this.result_add_option(e))&&(r++,o+=s),null!=t&&t.first&&(e.selected&&this.is_multiple?this.choice_build(e):e.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(e))),!(r>=this.max_shown_results));h++);return o},c.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),(s=document.createElement("li")).className=e.join(" "),t.style&&(s.style.cssText=t.style),s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.highlighted_html||t.html,t.title&&(s.title=t.title),this.outerHTML(s)):""},c.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&0<t.active_options?((e=[]).push("group-result"),t.classes&&e.push(t.classes),(s=document.createElement("li")).className=e.join(" "),s.innerHTML=t.highlighted_html||this.escape_html(t.label),t.title&&(s.title=t.title),this.outerHTML(s)):""},c.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},c.prototype.reset_single_select_options=function(){for(var t,e,s=[],i=0,o=(t=this.results_data).length;i<o;i++)(e=t[i]).selected?s.push(e.selected=!1):s.push(void 0);return s},c.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},c.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},c.prototype.winnow_results=function(t){var e,s,i,o,r,h,n,l,c,_,a,u,d;for(this.no_results_clear(),_=0,e=(n=this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),c=this.get_search_regex(e),i=0,o=(l=this.results_data).length;i<o;i++)(r=l[i]).search_match=!1,a=null,r.highlighted_html="",this.include_option_in_results(r)&&(r.group&&(r.group_match=!1,r.active_options=0),null!=r.group_array_index&&this.results_data[r.group_array_index]&&(0===(a=this.results_data[r.group_array_index]).active_options&&a.search_match&&(_+=1),a.active_options+=1),d=r.group?r.label:r.text,r.group&&!this.group_search||(u=this.search_string_match(d,c),r.search_match=null!=u,r.search_match&&!r.group&&(_+=1),r.search_match?(n.length&&(u=u.index,h=d.slice(0,u),s=d.slice(u,u+n.length),d=d.slice(u+n.length),r.highlighted_html=this.escape_html(h)+"<em>"+this.escape_html(s)+"</em>"+this.escape_html(d)),null!=a&&(a.group_match=!0)):null!=r.group_array_index&&this.results_data[r.group_array_index].search_match&&(r.search_match=!0)));return this.result_clear_highlight(),_<1&&n.length?(this.update_results_content(""),this.no_results(n)):(this.update_results_content(this.results_option_build()),null!=t&&t.skip_highlight?void 0:this.winnow_results_set_highlight())},c.prototype.get_search_regex=function(t){var e,t=this.search_contains?t:"(^|\\s|\\b)"+t+"[^\\s]*";return this.enable_split_word_search||this.search_contains||(t="^"+t),e=this.case_sensitive_search?"":"i",new RegExp(t,e)},c.prototype.search_string_match=function(t,e){e=e.exec(t);return!this.search_contains&&null!=e&&e[1]&&(e.index+=1),e},c.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(t=this.selected_option_count=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},c.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},c.prototype.keydown_checker=function(t){var e=null!=(e=t.which)?e:t.keyCode;switch(this.search_field_scale(),8!==e&&this.pending_backstroke&&this.clear_backstroke(),e){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},c.prototype.keyup_checker=function(t){var e=null!=(e=t.which)?e:t.keyCode;switch(this.search_field_scale(),e){case 8:this.is_multiple&&this.backstroke_length<1&&0<this.choices_count()?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},c.prototype.clipboard_event_checker=function(t){if(!this.is_disabled)return setTimeout((e=this,function(){return e.results_search()}),50);var e},c.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},c.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected||!this.display_disabled_options&&t.disabled||t.empty)},c.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},c.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},c.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},c.prototype.outerHTML=function(t){var e;return t.outerHTML||((e=document.createElement("div")).appendChild(t),e.innerHTML)},c.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+this.default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'},c.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+this.default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'},c.prototype.get_no_results_html=function(t){return'<li class="no-results">\n  '+this.results_none_found+" <span>"+this.escape_html(t)+"</span>\n</li>"},c.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?8<=document.documentMode:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},c.default_multiple_text="Select Some Options",c.default_single_text="Select an Option",c.default_no_result_text="No results match",r=c,(n=jQuery).fn.extend({chosen:function(i){return r.browser_is_supported()?this.each(function(t){var e,s=(e=n(this)).data("chosen");"destroy"!==i?s instanceof o||e.data("chosen",new o(this,i)):s instanceof o&&s.destroy()}):this}}),o=function(){function t(){return t.__super__.constructor.apply(this,arguments)}var e,s=t,i=r;function o(){this.constructor=s}for(e in i)l.call(i,e)&&(s[e]=i[e]);return o.prototype=i.prototype,s.prototype=new o,s.__super__=i.prototype,t.prototype.setup=function(){return this.form_field_jq=n(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},t.prototype.set_up_html=function(){var t;return(t=["chosen-container"]).push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className),this.is_rtl&&t.push("chosen-rtl"),t={class:t.join(" "),title:this.form_field.title},this.form_field.id.length&&(t.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=n("<div />",t),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},t.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},t.prototype.register_observers=function(){return this.container.on("touchstart.chosen",(C=this,function(t){C.container_mousedown(t)})),this.container.on("touchend.chosen",(k=this,function(t){k.container_mouseup(t)})),this.container.on("mousedown.chosen",(x=this,function(t){x.container_mousedown(t)})),this.container.on("mouseup.chosen",(w=this,function(t){w.container_mouseup(t)})),this.container.on("mouseenter.chosen",(y=this,function(t){y.mouse_enter(t)})),this.container.on("mouseleave.chosen",(b=this,function(t){b.mouse_leave(t)})),this.search_results.on("mouseup.chosen",(v=this,function(t){v.search_results_mouseup(t)})),this.search_results.on("mouseover.chosen",(m=this,function(t){m.search_results_mouseover(t)})),this.search_results.on("mouseout.chosen",(g=this,function(t){g.search_results_mouseout(t)})),this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen",(f=this,function(t){f.search_results_mousewheel(t)})),this.search_results.on("touchstart.chosen",(p=this,function(t){p.search_results_touchstart(t)})),this.search_results.on("touchmove.chosen",(d=this,function(t){d.search_results_touchmove(t)})),this.search_results.on("touchend.chosen",(u=this,function(t){u.search_results_touchend(t)})),this.form_field_jq.on("chosen:updated.chosen",(a=this,function(t){a.results_update_field(t)})),this.form_field_jq.on("chosen:activate.chosen",(_=this,function(t){_.activate_field(t)})),this.form_field_jq.on("chosen:open.chosen",(c=this,function(t){c.container_mousedown(t)})),this.form_field_jq.on("chosen:close.chosen",(l=this,function(t){l.close_field(t)})),this.search_field.on("blur.chosen",(n=this,function(t){n.input_blur(t)})),this.search_field.on("keyup.chosen",(h=this,function(t){h.keyup_checker(t)})),this.search_field.on("keydown.chosen",(r=this,function(t){r.keydown_checker(t)})),this.search_field.on("focus.chosen",(o=this,function(t){o.input_focus(t)})),this.search_field.on("cut.chosen",(i=this,function(t){i.clipboard_event_checker(t)})),this.search_field.on("paste.chosen",(s=this,function(t){s.clipboard_event_checker(t)})),this.is_multiple?this.search_choices.on("click.chosen",(e=this,function(t){e.choices_click(t)})):this.container.on("click.chosen",function(t){t.preventDefault()});var e,s,i,o,r,h,n,l,c,_,a,u,d,p,f,g,m,v,b,y,w,x,k,C},t.prototype.destroy=function(){return n(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),0<this.form_field_label.length&&this.form_field_label.off("click.chosen"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},t.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents("fieldset").is(":disabled"),this.container.toggleClass("chosen-disabled",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.off("focus.chosen",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.on("focus.chosen",this.activate_field)},t.prototype.container_mousedown=function(t){var e;if(!this.is_disabled)return!t||"mousedown"!==(e=t.type)&&"touchstart"!==e||this.results_showing||t.preventDefault(),null!=t&&n(t.target).hasClass("search-choice-close")?void 0:(this.active_field?this.is_multiple||!t||n(t.target)[0]!==this.selected_item[0]&&!n(t.target).parents("a.chosen-single").length||(t.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),n(this.container[0].ownerDocument).on("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},t.prototype.container_mouseup=function(t){if("ABBR"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},t.prototype.search_results_mousewheel=function(t){var e;if(null!=(e=t.originalEvent?t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail:e))return t.preventDefault(),"DOMMouseScroll"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},t.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},t.prototype.close_field=function(){return n(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},t.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},t.prototype.test_active_click=function(t){return(t=n(t.target).closest(".chosen-container")).length&&this.container[0]===t[0]?this.active_field=!0:this.close_field()},t.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=h.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},t.prototype.result_do_highlight=function(t){var e,s,i,o;if(t.length)return this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),i=(t=parseInt(this.search_results.css("maxHeight"),10))+(o=this.search_results.scrollTop()),(e=(s=this.result_highlight.position().top+this.search_results.scrollTop())+this.result_highlight.outerHeight())>=i?this.search_results.scrollTop(0<e-t?e-t:0):s<o?this.search_results.scrollTop(s):void 0},t.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},t.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},t.prototype.update_results_content=function(t){return this.search_results.html(t)},t.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},t.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},t.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=n("label[for='"+this.form_field.id+"']")),0<this.form_field_label.length)return this.form_field_label.on("click.chosen",this.label_click_handler)},t.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},t.prototype.search_results_mouseup=function(t){var e;if((e=n(t.target).hasClass("active-result")?n(t.target):n(t.target).parents(".active-result").first()).length)return this.result_highlight=e,this.result_select(t),this.search_field.focus()},t.prototype.search_results_mouseover=function(t){if(t=n(t.target).hasClass("active-result")?n(t.target):n(t.target).parents(".active-result").first())return this.result_do_highlight(t)},t.prototype.search_results_mouseout=function(t){if(n(t.target).hasClass("active-result")||n(t.target).parents(".active-result").first())return this.result_clear_highlight()},t.prototype.choice_build=function(t){var e,s=n("<li />",{class:"search-choice"}).html("<span>"+this.choice_label(t)+"</span>");return t.disabled?s.addClass("search-choice-disabled"):((t=n("<a />",{class:"search-choice-close","data-option-array-index":t.array_index})).on("click.chosen",(e=this,function(t){return e.choice_destroy_link_click(t)})),s.append(t)),this.search_container.before(s)},t.prototype.choice_destroy_link_click=function(t){if(t.preventDefault(),t.stopPropagation(),!this.is_disabled)return this.choice_destroy(n(t.target))},t.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute("data-option-array-index")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&0<this.choices_count()&&this.get_search_field_value().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()},t.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},t.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},t.prototype.result_select=function(t){var e;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),e.addClass("result-selected"),(e=this.results_data[e[0].getAttribute("data-option-array-index")]).selected=!0,this.form_field.options[e.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(e):this.single_set_selected_text(this.choice_label(e)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)?t.metaKey||t.ctrlKey?this.winnow_results({skip_highlight:!0}):(this.search_field.val(""),this.winnow_results()):(this.results_hide(),this.show_search_field_default()),!this.is_multiple&&this.form_field.selectedIndex===this.current_selectedIndex||this.trigger_form_field_change({selected:this.form_field.options[e.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},t.prototype.single_set_selected_text=function(t){return(t=null==t?this.default_text:t)===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(t)},t.prototype.result_deselect=function(t){t=this.results_data[t];return!this.form_field.options[t.options_index].disabled&&(t.selected=!1,this.form_field.options[t.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[t.options_index].value}),this.search_field_scale(),!0)},t.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},t.prototype.get_search_field_value=function(){return this.search_field.val()},t.prototype.get_search_text=function(){return n.trim(this.get_search_field_value())},t.prototype.escape_html=function(t){return n("<div/>").text(t).html()},t.prototype.winnow_results_set_highlight=function(){var t=this.is_multiple?[]:this.search_results.find(".result-selected.active-result");if(null!=(t=(t.length?t:this.search_results.find(".active-result")).first()))return this.result_do_highlight(t)},t.prototype.no_results=function(t){t=this.get_no_results_html(t);return this.search_results.append(t),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},t.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},t.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},t.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result")).length?this.result_do_highlight(t.first()):(0<this.choices_count()&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},t.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last()).length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0},t.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},t.prototype.search_field_scale=function(){var t,e,s,i,o,r,h;if(this.is_multiple){for(o={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"},e=0,s=(r=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"]).length;e<s;e++)o[i=r[e]]=this.search_field.css(i);return(t=n("<div />").css(o)).text(this.get_search_field_value()),n("body").append(t),h=t.width()+25,t.remove(),this.container.is(":visible")&&(h=Math.min(this.container.outerWidth()-10,h)),this.search_field.width(h)}},t.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger("input",t),this.form_field_jq.trigger("change",t)},t}()}.call(this);
const open=document.querySelector("[data--button-open]"),close=document.querySelector("[data--button-close]"),drop=document.querySelector("[data--drop]");open&&open.addEventListener("click",()=>{drop.classList.add("--is-visible")}),close&&close.addEventListener("click",()=>{drop.classList.remove("--is-visible")}),$("#chosen-1").chosen(),$("#chosen-2").chosen(),$("#chosen-3").chosen(),$("#chosen-4").chosen();