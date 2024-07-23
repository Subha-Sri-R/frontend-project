function addtodo() {
    var todoinput=document.getElementById("todo input");
    var todotext=todoinput.value.trim();


if(todotext !=="") {
    var li=document.createElement("li");
    li.textContent=todotext;
    var delbutton=document.createElement("button");
    delbutton.textContent="Delete";
    delbutton.classList.add("delete-btn");
    delbutton.onclick=function() {
        li.remove();
    };
    li.appendChild(delbutton);
    document.getElementById("todo-list").appendChild(li);
    todoinput.value="";
}
}
