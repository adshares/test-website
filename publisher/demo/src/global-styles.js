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

*{
  box-sizing: border-box;
}

body { 
  width: 100%;
  margin: 0 auto;
  background-color: #f2f2f2f2;  
}
`;
