import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import MoviePageSidebar from "@components/MoviePageSidebar";
import Footer from "@components/Footer";

import { IError, IMovie } from "@customTypes/movie";
import { API_KEY, axiosInstance } from "@utils/index";

const MoviePage = () => {
  const { id } = useParams();

  const apiUrl = `/movie/${id}?api_key=${API_KEY}`;
  const { isLoading, error, data } = useQuery({
    queryKey: [apiUrl],
    queryFn: (): Promise<IMovie> =>
      axiosInstance.get(apiUrl).then((res) => res.data),
  });

  return (
    <div className="flex flex-col gap-2">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error as IError} />
      ) : data ? (
        <MovieDisplay movie={data} />
      ) : null}
    </div>
  );
};

const MovieDisplay = ({ movie }: { movie: IMovie }) => {
  const releaseDate = new Date(movie?.release_date);
  const releaseDateUTC = releaseDate.toISOString();

  return (
    <>
      <div className="flex">
        <MoviePageSidebar />
        <div className="flex-1 m-4 md:m-5 lg:m-6">
          <Link to={"/"}>
            <div className="flex gap-3 items-center md:hidden mt-2 mb-4">
              <img src="/tv.svg" alt="Logo" />
              <h2 className={`text-zinc-800 text-2xl font-bold leading-normal`}>
                MovieBox
              </h2>
            </div>
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={movie?.title}
            className="rounded-3xl h-[450px] w-full object-cover object-center"
          />
          <div className="m-2 md:m-4 flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-2">
              <h2
                data-testid="movie-title"
                className="text-neutral-700 text-lg md:text-xl font-medium"
              >
                {movie?.title}
              </h2>
              <span className="text-neutral-700 text-[23px] font-normal hidden lg:inline">
                •
              </span>
              <p
                data-testid="movie-release-date"
                className="text-neutral-700 text-lg md:text-xl font-medium"
              >
                {releaseDateUTC}
              </p>
              <span className="text-neutral-700 text-[23px] font-normal hidden lg:inline">
                •
              </span>
              <p
                data-testid="movie-runtime"
                className="text-neutral-700 text-lg md:text-xl font-medium"
              >
                {`${movie?.runtime}mins`}
              </p>
            </div>
            <p
              data-testid="movie-overview"
              className="text-zinc-800 text-base md:text-lg font-normal"
            >
              Overview: {movie?.overview}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoviePage;
