import { PaginatedResponse } from "../common/types";

// Tenement Search Request Types

export interface TenementSearchFilter {
  size?: [number, number?];
  rent?: [number, number?];
  roomsBed?: [number, number?];
  roomsBath?: [number, number?];
  within?: string | null;
  bbox?: string | null;
  near?: string | null;
  amenities?: string | null;
}

export interface TenementSearchSort {
  rent?: string | null;
  distance?: string | null;
}

export interface TenementSearchPaging {
  pageSize?: number;
  page?: number;
}

export interface TenementSearch {
  filter: TenementSearchFilter;
  sort?: TenementSearchSort;
  paging?: TenementSearchPaging;
}

// Tenement Search Response Types

interface User {
  id: number;
}

interface Owner {
  country: string;
  name: string;
  email: string;
  phone: string;
  description?: string;
}

interface Media {
  type: string;
  name: string;
  cdnUrl: string;
  sort: number;
  title: string;
  bluredDataURL: string;
  id: number;
}

type AmenitiesTexts = Record<`${number}`, string>;

interface CommonPropertyFields {
  owner: Owner;
  user: User;
  title: string;
  abstract: string;
  address: string;
  addressDoor: string;
  zip: string;
  city: string;
  country: string;
  rooms: number;
  roomsBed: number;
  roomsBath: number;
  size: number;
  rent: number;
  rentUtilities: number;
  rentFull?: number;
  rentDeposit?: number;
  amenities: number[];
  amenitiesTexts: AmenitiesTexts;
  location: number[];
  createdAt: string;
  updatedAt: string;
  type: string;
  rentType: string;
  floorType: number;
  heatingType: number;
  leaseDuration: number;
  availableFrom?: string;
  highlight?: string;
  active: boolean;
  verified: boolean;
  deleted: boolean;
  autoRenewUntil?: string;
  lastRenewAt?: string;
  id: number;
}

export interface Tenement extends CommonPropertyFields {
  media?: Media[];
}

export interface Property extends CommonPropertyFields {
  media: Media[];
  tenements: Tenement[];
  sizeRange?: number[];
  rentRange?: number[];
  roomsRange?: number[];
  roomsBathRange?: number[];
  roomsBedRange?: number[];
}

export type TenementSearchResponse = PaginatedResponse<Property>;