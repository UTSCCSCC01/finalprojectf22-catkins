import avatar from "../images/avatar.png"

function UserListElement(props) {
    return (
        <div className='flex mb-20  w-2/3 border-2 border-[#D0D1C9] h-28'>

        <div className=" w-1/6 flex items-center justify-center">

            <img src={avatar} className="inline-block w-16 h-16 border border-[#D0D1C9]" />


        </div>

        <div class=" border mr-2 border-[#D0D1C9] "></div>
        <div className="flex flex-col justify-evenly">

        <div className="">
            <p className="text-lg">{props.username}</p>
        </div>
        <div className="">
            <p className="text-lg">{props.role}</p>
        </div>

        </div>


        </div>
      );
}

export default UserListElement;