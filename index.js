import AHDjs from "ahdjs";
import "ahdjs/build/css/index.css";

const ahdJs = new AHDjs(undefined, {
  applicationId: "6a3d30e35d1dbe1fbd243497",
  apiHost: "https://pagepilot.fabbuilder.com",
  visitorId: "visitor-id",
  showProgressbar: false,
});
ahdJs.initializeSiteMap();
ahdJs.renderAppBanner("SUNIL_BANNER", true);
