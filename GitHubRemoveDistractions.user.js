// ==UserScript==
// @name         GitHub Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.0
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

    function asyncLoop()
    {
        try
        {
            var userElement = document.getElementsByClassName("AppHeader-user")[0];

            if (userElement != null && userElement != undefined)
            {
                var dashboardElement = document.getElementsByClassName("AppHeader-context-item-label  ")[0];

                if (dashboardElement != null && dashboardElement != undefined)
                {
                    if (dashboardElement.innerText == "Dashboard")
                    {
                        var applicationElement = document.getElementsByClassName("application-main")[0];
    
                        if (applicationElement != null && applicationElement != undefined)
                        {
                            applicationElement.remove();
                        }
                    }
                }
    
                var actionsElement = document.getElementsByClassName("AppHeader-actions")[0];
    
                if (actionsElement != null && actionsElement != undefined)
                {
                    actionsElement.remove();
                }

                var notificationsElement = document.querySelector("notification-indicator");

                if (notificationsElement != null && notificationsElement != undefined)
                {
                    notificationsElement.remove();
                }

                var sidepanelElement = document.querySelector("deferred-side-panel[data-url='/_side-panels/global']");

                if (sidepanelElement != null && sidepanelElement != undefined)
                {
                    sidepanelElement.remove();
                }
            }
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    asyncLoop();
})();