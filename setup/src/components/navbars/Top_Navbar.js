function Top_Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center h-10 border-2 border-[#D0D1C9] shadow-md p-2">
        <a
          href="/clubs"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Clubs List
        </a>

        <a
          href="/users"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Users List
        </a>

        <a
          href="/clubs/update/:id"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Update Club
        </a>
        <a
          href="/clubs/clubsFeed"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Feed
        </a>
        <a
          href="/clubs/create"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Create a Club
        </a>
        <a
          href="/clubs/join"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Join a Club
        </a>
        <a
          href="/post/create"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#ffffff] duration-300"
        >
          Create a Post
        </a>
      </nav>
    </>
  );
}

export default Top_Navbar;
