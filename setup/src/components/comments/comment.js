import axios from "axios";
import { useState } from "react"
import TextAreaForm from "./textAreaForm";
import { useSelector } from 'react-redux';

function Comment(props) {

    let currentUser = useSelector(state => state.login.userName);

    const [replyText, setReplyText] = useState('');
    const [replyingTo, setReplyingTo] = useState();

    const replyComment = (e) => {
        e.preventDefault();

        setReplyText(e.target.value)
    }

    const [displayForm, setDisplayForm] = useState(false);
    const onOpenCommentReplyForm = (commentId) => {
        if (props.replyingTo === props.commentId && displayForm) {
            setDisplayForm(false)
            setReplyingTo(null);

        }
        else {
            setDisplayForm(true)
            setReplyingTo(commentId);

        props.onReplyHandler(commentId);
        }



    }

    const onReplySubmit = (e) => {

        const newComment = {
            author: currentUser,
            content: replyText,
            replying: props.commentId,
            parent: props.postId,
            createdAt: `${new Date()}`,

          }

         axios.post('http://localhost:5000/feed/comments/add', newComment)

    }


  return (
    <>
    <div className="mt-5 w-10/12 h-fit border-2 border-[#D0D1C9] p-2" >

            <h1>{props.author}</h1>
            <h1>{props.date}</h1>


        <h1>Student</h1>
        <div className="overflow-y-scroll h-20 w-full">
        {props.content}

        </div>
        <button onClick={() => {onOpenCommentReplyForm(props.commentId)}}><h1>Reply</h1></button>


    </div>
    {/* Rough work for now. Later organize in diff components */}
    {props.replyingTo === props.commentId
     && displayForm
     && < TextAreaForm onChange={replyComment} submitHandler={onReplySubmit} buttonText={"Reply"} placeholder={"Your reply..."}/> }
    {props.replies.map((item) => {
        return (
            <>
        <div  className="mt-5 w-10/12 self-end h-fit border-2 border-[#D0D1C9] p-2" >

        <h1>{item.author}</h1>
        <h1>{item.createdAt}</h1>

    <h1>Student</h1>
    <div className="overflow-y-scroll h-20 w-full">
    {item.content}

    </div>
    <button onClick={() => {onOpenCommentReplyForm(item._id, props.commentId)}}><h1>Reply</h1></button>


</div>
    {props.replyingTo === item._id && displayForm
     && < TextAreaForm onChange={replyComment} submitHandler={onReplySubmit} buttonText={"Reply"} placeholder={"Your reply..."}/> }
</>
)
    })}
    </>
  )
}

export default Comment;