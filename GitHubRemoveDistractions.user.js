// ==UserScript==
// @name         GitHub Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Remove all the GitHub distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.github.com/*
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @updateURL    https://github.com/GabryB03/Remove-GitHub-Distractions/raw/main/GitHubRemoveDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-GitHub-Distractions/raw/main/GitHubRemoveDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    var css = ".AppHeader-actions,notification-indicator,deferred-side-panel[data-url='/_side-panels/global']{display:none!important;visibility:hidden!important;}";

    if (window.location.href == 'https://github.com/' || window.location.href.startsWith("https://github.com/?"))
    {
        css = ".application-main," + css;
    }

    const head = document.head || document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = css;
    head.appendChild(styleElement);
})();