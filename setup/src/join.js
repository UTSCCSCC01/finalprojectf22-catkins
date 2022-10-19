//Convert form into JSON object and set POST request
function form_submission()

{
  var content = {club_name: document.getElementById("club_name").value,
                  username: document.getElementById("username").value};//Get form info
  alert('You have joined ' + content.club_name);

  return fetch("/join/", {
    method: "POST",
    body: content,
  });
}