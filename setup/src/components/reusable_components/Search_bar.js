import mg from "../../images/magnifying-glass.png"

function SearchBar(props) {

  return (
    <div className="mt-5 mb-5 w-2/3 rounded-md border-[#D0D1C9] border-2 p-2">

    <form onSubmit={props.submitFunction} className="flex justify-between">

<div className="w-11/12">
<input type="text" name="postTitle" placeholder={props.placeholder} className="w-full mb-1"/>
<hr className="w-full border-[#D0D1C9]"/>
</div>



    <button type="submit" className="w-8"><img src={mg} className="w-fit h-fit"/></button>

</form>


</div>
  );
}

export default SearchBar;