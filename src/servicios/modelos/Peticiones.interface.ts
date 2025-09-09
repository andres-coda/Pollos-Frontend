type Adapter<T> = (data: any) => T;

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export interface FetchDataProps<T> {
  url?: string | null;
  bodyData?: BodyInit | null;
  methodo?: HttpMethod | null;
  adapter?: Adapter<T> | null;
}

export interface UseApiProps<T> {
  urlGet?: string | null;
  adapterGet?:  Adapter<T> | null;
}