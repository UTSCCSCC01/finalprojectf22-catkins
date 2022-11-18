import pfp from "../../images/logo2.png";

function Left_Navbar() {
  return (
    <>
      {/*PHOTO + BUTTONS DIV */}
      <div className=" h-screen w-64 flex flex-col justify-start ">
        {/* div for image */}
        <div className="flex align-center justify-center ">
          <img
            src={pfp}
            alt="pfp"
            className="h-full w-full w-36 h-36 border-2 m-3 border-[#D0D1C9]"
          />
        </div>

        {/* div for buttons to organize them in flex */}
        <div className="flex flex-col m-5">
          <button className="bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md bg-gray-100 transition ease-in-out delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#f8fafc] duration-300">
            Profile
          </button>
          <button className="bg-[#ffffff] h-10 m-2 border-2 border-[#D0D1C9] shadow-md transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#f8fafc] duration-300">
            Friends
          </button>
          <button className="bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#f8fafc] duration-300">
            Settings
          </button>
          <button className="bg-[#ffffff] h-10 m-2 border-2 border-[#D0D1C9] shadow-md transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#f8fafc] duration-300">
            Logout
          </button>
        </div>

        {/* div for chat button */}

        <button className="my-10 mx-7 rounded-md border-2  shadow-md border-[#D0D1C9] transition ease-in-out delay-150 bg-[#f3f4f6] hover:-translate-y-1 hover:scale-110 hover:bg-[#d1d5db] duration-300">
          Chat
        </button>
      </div>
    </>
  );
}

export default Left_Navbar;
