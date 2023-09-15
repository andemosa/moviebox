import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";

import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import Card from "@components/Card";
import MoviePageSidebar from "@components/MoviePageSidebar";
import Footer from "@components/Footer";

import { IError, IMovie } from "@customTypes/movie";
import { API_KEY, axiosInstance } from "@utils/index";

const SearchPage = () => {
  const { term } = useParams();

  const apiUrl = `/search/movie?api_key=${API_KEY}&query=${term}`;
  const { isLoading, error, data } = useQuery({
    queryKey: [apiUrl],
    queryFn: (): Promise<{ results: IMovie[] }> =>
      axiosInstance.get(apiUrl).then((res) => res.data),
  });

  return (
    <div className="flex flex-col gap-2">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error as IError} />
      ) : data ? (
        <MovieDisplay data={data.results} term={term!} />
      ) : null}
    </div>
  );
};

const MovieDisplay = ({ data, term }: { data: IMovie[]; term: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/search/${searchQuery}`);
  };

  return (
    <>
      <div className="flex">
        <MoviePageSidebar />
        <div className="flex-1 p-3 md:p-4 lg:p-5">
          <div className="flex flex-col md:flex-row gap-4 justify-end mb-6">
            <Link to={"/"}>
              <div className="flex gap-3 items-center md:hidden">
                <img src="/tv.svg" alt="Logo" />
                <h2
                  className={`text-zinc-800 text-2xl font-bold leading-normal`}
                >
                  MovieBox
                </h2>
              </div>
            </Link>
            <form
              onSubmit={handleSubmit}
              className="max-w-[500px] flex-1 px-3 py-2 rounded-md border border-gray-300 flex justify-between gap-2 items-center"
            >
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-base font-normal leading-normal focus:outline-0 caret-black"
                value={searchQuery}
                onChange={handleChange}
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          {data?.length === 0 ? (
            <h1>
              No movies matching{" "}
              <span className="font-bold text-lg">{term}</span>
            </h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
              {data.slice(0, 10).map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
