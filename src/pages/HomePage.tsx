import { useQuery } from "@tanstack/react-query";

import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import Hero from "@components/Hero";
import Movies from "@components/Movies";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import { IError, IMovie } from "@customTypes/movie";
import { API_KEY, axiosInstance } from "@utils/index";

const Homepage = () => {
  const apiUrl = `/discover/movie?api_key=${API_KEY}&primary_release_year=${new Date().getFullYear()}&sort_by=vote_average.desc&vote_count.gte=1000`;

  const { isLoading, error, data } = useQuery({
    queryKey: [apiUrl],
    queryFn: (): Promise<{ results: IMovie[] }> =>
      axiosInstance.get(apiUrl).then((res) => res.data),
  });

  return (
    <div className="relative overflow-x-hidden">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error as IError} />
      ) : data ? (
        <HomeDisplay data={data.results} />
      ) : null}
    </div>
  );
};

const HomeDisplay = ({ data }: { data: IMovie[] }) => {
  return (
    <>
      <Navbar />
      <Hero heroMovies={data} />
      <Movies movies={data} />
      <Footer />
    </>
  );
};

export default Homepage;
