function form_submission()
{
  var content = {club_name: document.getElementById("club_name").value,
                  username: document.getElementById("username").value};//Get form info
  console.log(content);
  alert('You have joined ' + content.club_name);
  
  return fetch("/join/:id", {
    method: "POST",
    body: content,
  });
}