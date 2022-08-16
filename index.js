var database=[{ID:"1",Name:"jai",Email:"jai@gmail.com",Password:"8787",City:"gorakhpur",Role:"admin"},{ID:"2",Name:"ankit",Email:"ankit@gmail.com",Password:"2222",City:"varanasi",Role:"guest"},{ID:"3",Name:"shiv",Email:"shiv@gmail.com",Password:"1212",City:"lucknow",Role:"guest"}];
$(".submit").click(function()
{
   $username= $(".username").val();
   $password= $(".password").val();
   if(login($username,$password)==-1)
   {
    $(".notify").text("Wrong Details!!!");
    $(".notify").attr("style","color:red");
   }
   else if(login($username,$password)==0){
    $(".notify").text("Welcome ADMIN:"+database[login($username,$password)].Name);
    $(".notify").attr("style","color:green");
      populate();
   }
   else{
    $(".notify").text("Welcome:"+database[login($username,$password)].Name);
    $(".notify").attr("style","color:green");
   }
});
function populate()
{
    let head='<tr><td>ID</td><td>Name</td><td>Email</td><td>Password</td><td>City</td><td>Role</td><td>Action</td></tr>';
    $("thead").html(head);
    var tr="";
    for(let i=0;i<database.length;i++)
    {
      tr+= '<tr>';
       $.each(database[i],function(key,val)
       {
        tr+='<td>'+val+'</td>';
        console.log(tr);
       });
       tr+='<td><button index='+i+'>DELETE</button></td></tr>';
      
    }
   
    $("tbody").html(tr);
   
}
$("tbody").on("click","button",function()
{

    $index=parseInt($(this).attr("index"));
    database.splice($index,1);
    populate();
})



function login($username,$password)
{
    for(let i=0;i<database.length;i++)
    {
       if(database[i].Name==$username && database[i].Password==$password)
       {
        if(database[i].Role=="admin")
        return 0;
        else
        return i;
       }
    }
    return -1;
}