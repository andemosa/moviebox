import Card from "./Card";

import { IMovie } from "@customTypes/movie";

const Movies = ({ movies }: { movies: IMovie[] }) => {
  return (
    <div className="m-6 md:m-10">
      <div className="flex justify-between items-center mb-[44px]">
        <h2 className="text-black text-2xl md:text-4xl font-bold">Featured Movie</h2>
        <a className="text-rose-700 text-sm md:text-lg font-normal leading-normal flex items-center gap-2 hover:underline">
          View All
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                stroke="#B91C1C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.slice(0, 10).map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
