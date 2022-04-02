// ==UserScript==
// @name         r/grandorder Cu Logo template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas! copied from r/osu's script in https://www.reddit.com/r/place/comments/tu1sl8/their_logo_might_be_obnoxiously_huge_but_damn/i319463/
// @author       enshael
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            // the image needs to be 3000x3000 px with 1px border per "pixel" in r/place
            // removed the url because we didn't get approval from r/ireland
            i.src = "";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}

