import axios from 'axios';
import Reach, { useState } from 'react';

import Comment from './comment';
import { useSelector } from 'react-redux';
import TextAreaForm from './textAreaForm';


function CommentManager(props) {
  let currentUser = useSelector(state => state.login.userName);

  const [replyingTo, setReplyingTo] = useState(null);

  const onReplyHandler = (commentId) => {
   setReplyingTo(commentId)
  }

  const [commentText, setCommentText] = useState('');

  const [commentingState, setCommentingState] = useState(false);

 // const [comments, setComments] = useState(props.comments);

  const commentPost = (e) => {
    e.preventDefault();

    setCommentText(e.target.value)
  }

  const startCommenting = () => {
    setCommentingState(current => !current);
  }

  const submitHandler = (e) => {

    const newComment = {
      author: currentUser,
      content: commentText,
      parent: props.postId,
      createdAt: `${new Date()}`,
    }

   // setComments(current => [... current, newComment]);

    axios.post('http://localhost:5000/feed/comments/add', newComment)


  }


  return (
    <>

    <button
    className='my-2 w-2/3 text-sm border-[#D0D1C9] border-2 py-2 px-4 rounded'
    onClick={startCommenting}
    >
        Comment
        </button>
    {commentingState &&
<TextAreaForm submitHandler={submitHandler} placeholder={"Your comment..."} buttonText={"Post it"} onChange={commentPost}/>


      }
    <div className=' mb-20 w-2/3 text-sm h-fit flex flex-col items-center '>
      {/*Comments */}



      {props.comments.map((item )=> {
        return (

       <Comment postId={props.postId}
        onReplyHandler={onReplyHandler}
         replyingTo={replyingTo}
          key={item._id}
           author={item.author}
            commentId={item._id}
             content={item.content}
              date={item.createdAt}
               replies={item.replies}
               />

        )
      })}


    </div>
    </>
  );
}

export default CommentManager;