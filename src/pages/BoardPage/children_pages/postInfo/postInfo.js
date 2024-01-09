import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore } from "/src/lib/index.js";
import { renderPostInfo } from "../../util/dom/index";


const {localStorage} = window;
const id = localStorage.curr_id;
const container = getNode(".board--post-info-container");
insertBefore(container, renderTopBar("withShare"));
renderPostInfo(container, id);