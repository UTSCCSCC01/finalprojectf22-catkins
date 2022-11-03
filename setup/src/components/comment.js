
function Comment(props) {

    const commentReply = (author) => {
        console.log(author)
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
        <button onClick={() => {commentReply(props.author)}}><h1>Reply</h1></button>


    </div>
    {props.replies.map((item) => {
        return (<div  className="mt-5 w-10/12 self-end h-fit border-2 border-[#D0D1C9] p-2" >

        <h1>{item.author}</h1>
        <h1>{item.date}</h1>

    <h1>Student</h1>
    <div className="overflow-y-scroll h-20 w-full">
    {item.content}

    </div>
    <button onClick={() => {commentReply(item.author)}}><h1>Reply</h1></button>
</div>)
    })}
    </>
  )
}

export default Comment;