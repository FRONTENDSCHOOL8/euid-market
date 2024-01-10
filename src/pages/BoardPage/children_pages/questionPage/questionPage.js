import { renderNavBar, renderTopBar } from "/src/components/general/index.js";
import { getNode, insertFirst } from "/src/lib/index";



insertFirst("body", renderTopBar("withTitle", "질의응답"));
renderNavBar();
