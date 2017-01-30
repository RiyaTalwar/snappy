ifUserIsLoggedIn(function(){
  //update the user data
  updateUserdata();
  loadUsers(function(users){
    var usersList="";

    for(var uid in users){
      var user=users[uid];
//if the user is not the current user then only add to the list
      if(window.currentUser.id!=uid)
      usersList+=renderUser(user);
    }
    getElement("members").innerHTML=usersList;
  });




  onClickMultiple("member",function(element){
    var chat_id=element.id;



    loadMessages(chat_id,function(messages){
//once msgs are loaded render them
var messagesList="";

for(var uid in messages){
  var message=messages[uid];
//if the user is not the current user then only add to the list
/*  if(window.currentUser.id!=uid)*/
  messagesList+=renderMessage(message);
}
getElement("messages").innerHTML=messagesList;
getElement("chat_id").value=chat_id;

    });
  });

click("send-button",function(){
  var text=getElement("message-text").value;
  var chat_id=getElement("chat_id").value;

  sendMessage(chat_id,text);

})
});
