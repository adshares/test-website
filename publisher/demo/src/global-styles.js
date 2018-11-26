import {injectGlobal} from 'styled-components'
import ADSeot from './assets/fonts/icons-font/ADS.eot'
import ADSttf from './assets/fonts/icons-font/ADS.ttf'
import ADSwoff from './assets/fonts/icons-font/ADS.woff'
import ADSsvg from './assets/fonts/icons-font/ADS.svg'


injectGlobal`
:root {
    --blue: #164da1;
    --dark-blue: #1a1936; 
    --ultra-light-blue: #b9d2ff;
    --bright-blue: #1869ff;
    --light-blue: #46a7ff;
    --gray: #b9b8b9;
    --grayish-white: #fbfbfb;
    --ultra-light-gray: #ebebeb;
    --light-gray: #f9f8fb;
    --shadow-gray: #afafaf;
    --dust-gray: #4e4e4e;
    --moon-gray: #707070;
    --dark-gray: #343435;
    --black: #000;
    --white: #fff;
    --white-gray: #fbfbfb;
    --rose-violet: #e84d95;
    --violet: #db52dc;
    --pink: #d852dc;
    --dark-pink: #9c16a1;
    --brown-pink: #ec7d92;
    --red: #ff0000;
    --deep-purple: #1a1936;
    --purple: #250F38;
    --orange: #ff8970;
    --yellow: #ffc457;
    --green: #16a157;
    --telegram-blue: #1e94d1;
    --twitter-blue: #00aced;
    --facebook-blue: #3a589b;
    --linkedin-blue: #0274b3;
    --github-gray: #323131;
    --medium-gray: #141211;
    --youtube-red: #ff0000;
    --reddit-red: #f05825;
    --deep-gray: #757575;
}

@font-face {
    font-family: 'ADS';
    src: url(${ADSeot});
    src: url(${ADSeot}) format('embedded-opentype'),
    url(${ADSttf}) format('truetype'),
    url(${ADSwoff}) format('woff'),
    url(${ADSsvg}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
}

[class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'ADS' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    border-radius: 50%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    &:not(.icon-alpha):not(.icon-beta):not(.icon-omega) {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }
}

[class^="icon-"]:before, [class*=" icon-"]:before {
    color: var(--white);
}

.icon-telegram {
    background-color: var(--telegram-blue);
}

.icon-telegram:before {
    content: "\\e900";
}

.icon-twitter {
    background-color: var(--twitter-blue);
}

.icon-twitter:before {
    content: "\\e901";
}

.icon-facebook {
    background-color: var(--facebook-blue);
}

.icon-facebook:before {
    content: "\\e902";
}

.icon-github {
    background-color: var(--github-gray);
}

.icon-github:before {
    content: "\\e903";
}

.icon-medium {
    background-color: var(--medium-gray);
}

.icon-medium:before {
    content: "\\e904";
}

.icon-youtube {
    background-color: var(--youtube-red);
}

.icon-youtube:before {
    content: "\\e905";
}

.icon-reddit {
    background-color: var(--reddit-red);
}

.icon-reddit:before {
    content: "\\e906";
}

.icon-linkedin {
    background-color: var(--linkedin-blue);
}

.icon-linkedin:before {
    content: "\\e907";
}

.icon-alpha:before {
    content: "\\e908";
    font-size: 30px;
    color: var(--shadow-gray);
}

.icon-beta:before {
    content: "\\e909";
    font-size: 30px;
    color: var(--shadow-gray);
    font-weight: 600;
}

.icon-omega:before {
    content: "\\e90a";
    font-size: 30px;
    color: var(--shadow-gray);
    font-weight: 600;
}

.light-icon {
    background-color: var(--white);
}

.light-icon:before {
    color: var(--deep-gray);
}

*{
  box-sizing: border-box;
}

body { 
  width: 100%;
  margin: 0 auto;
  background-color: #f2f2f2f2;  
}
`
