import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  releaseDate,
  posterUrl,
}: {
  id: number;
  title: string;
  releaseDate: string;
  posterUrl: string;
}) => {
  return (
    <Link to={`/movies/${id}`} className="w-full">
      <div data-testid="movie-card" className=" flex flex-col justify-center ">
        <img
          data-testid="movie-poster"
          src={posterUrl}
          alt={title}
          className="hover:scale-105 transition duration-500 cursor-pointer object-cover"
        />
        <p
          data-testid="movie-release-date"
          className="text-xs font-bold text-[#9CA3AF] mt-3"
        >
          {releaseDate}
        </p>
        <h2
          data-testid="movie-title"
          className="text-base md:text-lg text-[#111827] font-bold"
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
