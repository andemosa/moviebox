export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: string;
}

export interface IError {
  code: number;
  message: string;
}
