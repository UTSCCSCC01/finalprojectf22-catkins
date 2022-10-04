import Reach from 'react';
import pfp from '../images/image.jpg';
import iphone from '../images/iphone.png';

function ClubsPost(props) {

  return (
    <div className=' m-20  w-1/2 border-2 border-[#D0D1C9] divide-y divide-[#D0D1C9]'>
      <div className='h-10 flex flex-col justify-center items-center'>
        CMS
      </div>

      <div className='h-56 flex flex-col items-center overflow-scroll '>
        {/* Text here */}
        <div className='flex flex-col m-5'>
        {props.text}
        <img src={pfp} alt='pfp' className=' w-full'/>
        <img src={iphone} alt='pfp' className=' w-full'/>
        </div>

      </div>
    </div>
  );
}

export default ClubsPost;