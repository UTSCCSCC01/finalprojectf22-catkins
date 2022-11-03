import axios from 'axios';
import Reach, { useState } from 'react';

import Comment from './comment';


function CommentManager(props) {

  const [commentText, setCommentText] = useState('');

  const [commentingState, setCommentingState] = useState(false);

  const [comments, setComments] = useState(props.comments);

  const commentPost = (e) => {
    e.preventDefault();

    setCommentText(e.target.value)
  }

  const startCommenting = () => {
    setCommentingState(current => !current);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const newComment = {
      author: "TEST User",
      content: commentText,
      parent: props.postId,
      date: `${new Date()}`,

      replies:[]
    }

    setComments(current => [... current, newComment]);

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
<form className="w-2/3 text-sm resize-none " onSubmit={submitHandler}>
<textarea rows="4"
className="w-full text-sm resize-none p-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#D0D1C9] focus:ring-[#180077] focus:border-[#180077] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={commentPost}
 placeholder="Your comment..." ></textarea>

<button
type='submit'
className='my-2 text-sm border-[#D0D1C9] border-2 py-2 px-4 rounded'
>Post it</button>
</form>

      }
    <div className=' mb-20 w-2/3 text-sm h-fit flex flex-col items-center '>
      {/*Comments */}



      {comments.map((item )=> {
        let isSub = false;
        if (item.author === "Ilyak") isSub = true;
        return (

       (
       <Comment author={item.author} content={item.content} date={item.date} subcomment={isSub} replies={item.replies}/>

       )

        )
      })}


    </div>
    </>
  );
}

export default CommentManager;