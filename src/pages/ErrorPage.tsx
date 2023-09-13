import { IError } from "@customTypes/movie";

const ErrorPage = ({ error: { code, message } }: { error: IError }) => {
  const reloadPage = () => {
    if (code === 404) {
      window.location.href = "/";
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
        <div className=" p-12 bg-white rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
          <h1 className="text-9xl font-black text-red-500 mb-4">Oops!</h1>
          <p className="text-gray-700 text-2xl mb-4 font-semibold">
            An error occurred:
          </p>
          <p className="text-gray-700 text-xl mb-4">{message}</p>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
            onClick={reloadPage}
          >
            {code === 404 ? "Go Home" : "Retry"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
