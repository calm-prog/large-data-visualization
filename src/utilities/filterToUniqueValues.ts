import { ResponseData } from "../client";

export const filterToUniqueValues = (data: ResponseData): ResponseData => {
    const seen = new Set();
    return data.filter(item => {
      if (seen.has(item.value)) {
        return false;
      } else {
        seen.add(item.value);
        return true;
      }
    });
  }