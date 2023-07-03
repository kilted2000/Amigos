import { faLink, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
const { library } = require('@fortawesome/fontawesome-svg-core');

import { faTwitter, faFacebookF, faInstagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
 
}

export default initFontAwesome;
