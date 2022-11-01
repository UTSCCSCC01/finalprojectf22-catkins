import Reach from 'react';
import pfp from '../images/image.jpg';
import iphone from '../images/iphone.png';

function ClubsPost(props) {

  let image = null
  if (props.image != "")
    image = <img src={props.image} alt='IMAGE NOT FOUND'/>
  
  return (
    <div className=' mb-20  w-2/3 border-2 border-[#D0D1C9]  h-1/2'>
      <div>

      </div>
      <div className='h-14  text-center divide-y divide-[#D0D1C9]'>
        <h1>{props.group}</h1>
        <h1>{props.title}</h1>

      </div>



      <div className='h-64 flex flex-col items-end  p-4 break-words overflow-y-scroll '>
        {/* Text here */}
        <div className=' text-xs text-[#D0D1C9] '>


        <h1>{props.username}</h1>
        <h1>{props.createdAt}</h1>

        </div>

        <div className=' p-3 overflow-y-scroll '>



      {props.description}
      
      {image}

      </div>

      </div>
    </div>
  );
}

export default ClubsPost;