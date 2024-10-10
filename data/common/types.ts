export interface Paging {
  pageCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface PaginatedResponse<T> {
  res: T[];
  paging: Paging;
}
