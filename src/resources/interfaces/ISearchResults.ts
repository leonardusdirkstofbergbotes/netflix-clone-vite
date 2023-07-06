import { IMovie } from "./IMovie";
import { IShow } from "./IShow";

export interface SearchResult {
    page: number;
    results: (IMovie | IShow)[];
    total_pages: number;
    total_results: number;
  }