import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
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
      <div className="absolute top-0 text-white z-20 flex flex-col w-full my-5 gap-4 py-2 px-4 md:px-6 justify-between sm:flex-row sm:gap-6 sm:items-center">
        <div className="flex gap-3 items-center">
          <img src="/tv.svg" alt="Logo" />
          <h2 className={`text-zinc-100 text-2xl font-bold leading-normal`}>
            MovieBox
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[500px] flex-1 px-3 py-2 rounded-md border border-gray-300 flex justify-between gap-2 items-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white text-base font-normal leading-normal focus:outline-0 flex-1"
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
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
