function Top_Navbar () {
    return (
        <>
        <nav className='flex justify-around items-center h-10 border-2 border-[#D0D1C9] shadow-md p-2'>

<a href="/clubs">
  Clubs List
</a>

<a href="/users" >
  Users List
</a>

<a href="/clubs/update/:id" >
  Update Club
</a>
<a href="/clubs/testClub">
  Feed
</a>
<a href='/clubs/create'>
  Create a Club
</a>
<a href='/clubs/join'>
  Join a Club
</a>

</nav>
  </>
    )
}

export default Top_Navbar;