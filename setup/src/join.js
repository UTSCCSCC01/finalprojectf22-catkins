function form_submission()
{
  var club = document.getElementById("myform").elements.club_name.value;
  
  alert('You have joined ' + club);
  
  return false;
}