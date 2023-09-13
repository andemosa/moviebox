const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 max-w-lg mx-auto items-center my-2 px-2 text-sm md:text-base">
      <ul className="gap-2 md:gap-10 justify-between font-bold hidden sm:flex">
        <a>Conditions of Use</a>
        <a>Privacy & Policy</a>
        <a>Press Room</a>
      </ul>
      <p className="text-[#6B7280] font-semibold">
        © {new Date().getFullYear()} MovieBox by&nbsp;
        <a
          href="https://github.com/andemosa"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Anderson Osayerie
        </a>
      </p>
    </footer>
  );
};

export default Footer;
