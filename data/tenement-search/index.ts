import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";
import { fetcher } from "../common/fetcher";
import {
  TenementSearch,
  TenementSearchSort,
  TenementSearchPaging,
  TenementSearchResponse,
} from "./types";

export const TENEMENT_SEARCH_ENDPOINT = "tenement/search";

export const TENEMENT_SEARCH_SORT: TenementSearchSort = {
  rent: null,
  distance: null,
};

export const TENEMENT_SEARCH_PAGING: TenementSearchPaging = {
  pageSize: 10,
  page: 0,
};

export async function postTenementSearch({
  filter,
  sort = TENEMENT_SEARCH_SORT,
  paging = TENEMENT_SEARCH_PAGING,
}: TenementSearch) {
  return fetcher<TenementSearchResponse>(TENEMENT_SEARCH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ filter, sort, paging }),
  });
}

export const getUseTenementSearchKey =
  (
    query: TenementSearch,
  ): SWRInfiniteKeyLoader<TenementSearchResponse> =>
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

export function useTenementSearch(query: TenementSearch) {
  return useSWRInfinite(
    getUseTenementSearchKey(query),
    ([, q]: [string, TenementSearch]) => postTenementSearch(q),
  );
}

export default useTenementSearch;
