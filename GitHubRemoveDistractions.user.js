// ==UserScript==
// @name         GitHub Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Remove all the GitHub distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.github.com/*
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @updateURL    https://github.com/GabryB03/Remove-GitHub-Distractions/raw/main/RemoveGitHubDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-GitHub-Distractions/raw/main/RemoveGitHubDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';
    var css = "";

    if (window.location.href == 'https://github.com/' || window.location.href.includes("dashboard"))
    {
        css =
        `
            .application-main, .AppHeader-actions, notification-indicator, deferred-side-panel[data-url='/_side-panels/global'] { display: none !important; visibility: hidden !important; }
        `;

    }
    else
    {
        css =
        `
            .AppHeader-actions, notification-indicator, deferred-side-panel[data-url='/_side-panels/global'] { display: none !important; visibility: hidden !important; }
        `;
    }

    const head = document.head || document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = css;
    head.appendChild(styleElement);
})();