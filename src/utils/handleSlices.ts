import { dataSlices, slices } from "../types/type";

export const handleSlices: ({ action, setter, data }: dataSlices) => void = ({
  action,
  setter,
  data,
}) => {
  action === "prev" &&
    setter((prev: slices) => {
      if (prev.init <= 0 || prev.last <= 4) {
        console.log({ init: data.length - 4, last: data.length });
        return { init: data.length - 4, last: data.length };
      }
      return { init: prev.init - 4, last: prev.last - 4 };
    });

  action === "next" &&
    setter((prev: slices) => {
      if (prev.last >= data.length) {
        return { init: 0, last: 4 };
      }
      return { init: prev.init + 4, last: prev.last + 4 };
    });
};
