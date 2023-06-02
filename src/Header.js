function Header() {
  return (
    <div className="w-full sticky -top-0 z-0 font-semibold rounded-sm inline-flex flex-1 bg-purple-900 text-zinc-100 p-1 drop-shadow-lg">
      <h1 className="text-5xl"></h1>
      <ul className="inline-flex flex-1 justify-center text-lg space-x-8 mt-3">
        <li>
          <div className="no-underline hover:text-blue-400" href="#feed">
            Feed
          </div>
        </li>
        {/* <li>
          <a className="no-underline hover:text-blue-400" href="#projects">
            Projects
          </a>
        </li> */}
        <li>
          <div
            className="no-underline hover:text-blue-400"
            href="##birthdayInput"
          >
            Birthday Input
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
