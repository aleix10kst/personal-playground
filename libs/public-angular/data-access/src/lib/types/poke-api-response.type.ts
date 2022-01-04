export interface PokeApiResponse<T> {
  results: T[];
  next: string;
  previous: string;
  count: number;
}
