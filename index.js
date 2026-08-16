import AHDjs from "ahdjs";
import "ahdjs/build/css/index.css";

const ahdJs = new AHDjs(undefined, {
  applicationId: "68c413718051925116f90732",
  apiHost: "https://pagepilot.fabbuilder.com",
  visitorId: "visitor-id",
  showProgressbar: false,
});
ahdJs.initializeSiteMap();
ahdJs.showHighlights("/#skills", true);
