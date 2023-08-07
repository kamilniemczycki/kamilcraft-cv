import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import QrcodeVue from "qrcode.vue";

library.add(fas, fab, far);

createApp(App)
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("QRCode", QrcodeVue)
  .mount("#cv");
