interface Owner {
  country: string;
  name: string;
  email: string;
  phone: string;
  description?: string;
}
interface User {
  id: number;
}
interface AmenitiesTexts {
  "4"?: string;
  "5"?: string;
  "9"?: string;
  "2"?: string;
  "3"?: string;
  "6"?: string;
  "7"?: string;
  "10"?: string;
  "1"?: string;
  "8"?: string;
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
interface AmenitiesTexts2 {
  "2"?: string;
  "4"?: string;
  "7"?: string;
  "5"?: string;
  "8"?: string;
  "1"?: string;
  "3"?: string;
  "6"?: string;
  "9"?: string;
}
interface Tenement {
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
  amenitiesTexts: AmenitiesTexts2;
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
  media?: Media[];
}
export interface Property {
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
  media: Media[];
  tenements: Tenement[];
  sizeRange?: number[];
  rentRange?: number[];
  roomsRange?: number[];
  roomsBathRange?: number[];
  roomsBedRange?: number[];
}
interface Paging {
  pageCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface RootObject {
  res: Property[];
  paging: Paging;
}
