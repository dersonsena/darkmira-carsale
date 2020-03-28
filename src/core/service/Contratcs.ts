export enum FILTER_OPERATORS {
  EQUALS = "=",
  NOT_EQUALS = "<>"
}

export enum ORDER_DIRECTIONS {
  ASC = "ASC",
  DESC = "DESC"
}

export interface IFilter {
  column: string;
  value: any;
  operator: FILTER_OPERATORS;
}

export interface IPagination {
  pageSize: number;
  page: number;
}

export interface ISort {
  column: string;
  direction: ORDER_DIRECTIONS;
}

export interface IQueryOptions {
  filters?: IFilter[];
  pagination?: IPagination;
  sort?: ISort;
}
