import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";
import { fetcher } from "../common/fetcher";
import {
  TenementSearchMap,
  TenementSearchMapPaging,
  TenementSearchMapSort,
  TenementSearchMapResponse,
} from "./types";

export const TENEMENT_SEARCH_ENDPOINT = "tenement/search";

export const TENEMENT_SEARCH_MAP_SORT: TenementSearchMapSort = {
  rent: null,
  distance: null,
};

export const TENEMENT_SEARCH_MAP_PAGING: TenementSearchMapPaging = {
  pageSize: 10,
  page: 0,
};

export async function postTenementSearch({
  filter,
  sort = TENEMENT_SEARCH_MAP_SORT,
  paging = TENEMENT_SEARCH_MAP_PAGING,
}: TenementSearchMap) {
  return fetcher<TenementSearchMapResponse>(TENEMENT_SEARCH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ filter, sort, paging }),
  });
}

export const getUseTenementSearchKey =
  (query: TenementSearchMap): SWRInfiniteKeyLoader<TenementSearchMapResponse> =>
  (index, prevData) => {
    if (!prevData) return [TENEMENT_SEARCH_ENDPOINT, query];

    if (prevData.paging.page >= prevData.paging.pageCount) return null;

    return [
      TENEMENT_SEARCH_ENDPOINT,
      {
        ...query,
        paging: { page: index + 1, pageSize: prevData.paging.pageSize },
      },
    ];
  };

export function useTenementSearchMap(query: TenementSearchMap) {
  return useSWRInfinite(
    getUseTenementSearchKey(query),
    ([, q]: [string, TenementSearchMap]) => postTenementSearch(q),
  );
}

export default useTenementSearchMap;
