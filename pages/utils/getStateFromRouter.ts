import { useHistory } from "react-router-dom";

export const getStateFromRouter = (key: string) => {
  const h = useHistory();

  const state = h.location.state as Record<string, string>;
  if (state && state[key]) {
    return state[key];
  }
  return getParamsFromSearch(key) as string;
};

export const getParamsFromSearch = (key?: string) => {
  const h = useHistory();
  const search = h.location.search;
  if (!search) {
    return void 0;
  }
  const obj = search
    .substring(1)
    .split("&")
    .reduce((res, cur) => {
      const arr = cur.split("=");
      return Object.assign({ [arr[0]]: arr[1] }, res);
    }, {} as Record<string, string>);

  if (typeof key !== "string" && !key) {
    return obj;
  }
  return obj[key];
};
