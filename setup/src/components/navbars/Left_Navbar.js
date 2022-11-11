import pfp from "../../images/image.jpg";

function Left_Navbar(props) {
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
          <button className="bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">
            {props.username}
          </button>
          <button className="bg-[#ffffff] h-10 m-2 border-2 border-[#D0D1C9] shadow-md">
            Friends
          </button>
          <button className="bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">
            Settings
          </button>
          <button className="bg-[#ffffff] h-10 m-2 border-2 border-[#D0D1C9] shadow-md">
            Logout
          </button>
        </div>

        {/* div for chat button */}

        <button className="my-10 mx-7 rounded-md border-2 border-[#D0D1C9] shadow-md">
          Chat
        </button>
      </div>
    </>
  );
}

export default Left_Navbar;
