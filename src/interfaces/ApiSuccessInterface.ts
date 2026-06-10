import type { SingleMovieInterface } from "./singleMovieInterface";

export interface ApiSuccessInterface {
    Response: string,
    Search: SingleMovieInterface[],
    totalResult: string
}