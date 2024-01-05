import { renderTopBar } from "/src/components/general/renderTopBar.js";
import { getNode, insertBefore } from "/src/lib/index.js";

const createPostContainer = getNode(".board--create-post-container");


insertBefore(createPostContainer, renderTopBar("blank"));