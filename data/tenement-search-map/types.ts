import { PaginatedResponse } from "../common/types";

// Tenement Search Map Request Types

export interface TenementSearchMapFilter {
  size?: [number, number?];
  rent?: [number, number?];
  roomsBed?: [number, number?];
  roomsBath?: [number, number?];
  within?: string | null;
  bbox?: string | null;
  near?: string | null;
  amenities?: string | null;
}

export interface TenementSearchMapSort {
  rent?: string | null;
  distance?: string | null;
}

export interface TenementSearchMapPaging {
  pageSize?: number;
  page?: number;
}

export interface TenementSearchMap {
  filter: TenementSearchMapFilter;
  sort?: TenementSearchMapSort;
  paging?: TenementSearchMapPaging;
}

// Tenement Search Map Response Types

export interface TenementMapMarker {
  rentRange: number[];
  sizeRange: number[];
  count: number;
  pt: number[];
}

export type TenementSearchMapResponse = PaginatedResponse<TenementMapMarker>;
