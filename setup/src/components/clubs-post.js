import axios from 'axios';
import Reach, { useState } from 'react';
import pfp from '../images/image.jpg';
import iphone from '../images/iphone.png';
import Comment from './comment';
import CommentManager from './comment_management_component';


function ClubsPost(props) {



  return (
    <>
    < div className='w-2/3 border-2 border-[#D0D1C9]  h-1/2'>
    <div className=''>
      <div>

      </div>
      <div className='h-14  text-center divide-y divide-[#D0D1C9]'>
        <h1>{props.group}</h1>
        <h1>{props.title}</h1>

      </div>



      <div className='h-64 flex flex-col items-end  p-4'>
        {/* Text here */}
        <div className=' text-xs text-[#D0D1C9] '>


        <h1>{props.username}</h1>
        <h1>{props.createdAt}</h1>

        </div>

        <div className=' p-3 overflow-y-scroll '>



      {props.description}


      </div>



      </div>

    </div>


    </div>
    <CommentManager comments={props.comments} postId={props.postId}/>
    </>
  );
}

export default ClubsPost;