/*! WordPress form builder plugin for contact forms, surveys and quizzes - Tripetto 8.0.8 */
!function(){"use strict";var e={415:function(e,n,t){t.r(n)}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};!function(){function e(n){if(n)for(var t=n.firstElementChild;t;){if(0===t.id.indexOf("tripetto-runner-")){var o=t.id.replace(/\-/g,"_");return void("function"==typeof window[o]&&window[o]())}e(t),t=t.nextElementSibling}}t(415),jQuery(window).on("elementor/frontend/init",(function(){"undefined"!=typeof elementorFrontend&&elementorFrontend.hooks.addAction("frontend/element_ready/tripetto.default",(function(n){return e(n[0])}))}))}()}();