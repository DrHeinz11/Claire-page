import { handleScrollTop } from "../types/type";

export const HandleScrollTop: handleScrollTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });
