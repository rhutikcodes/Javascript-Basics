var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var ul = document.getElementById("list");
var li;

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  ul = document.getElementById("list");
  var textnode = document.createTextNode(item);

  if (item === "") {
    var p = document.createTextNode("Enter a todo");
    var add = document.getElementById("add");
    let parentdiv = add.parentNode;
    parentdiv.insertBefore(p, add) ;

    setTimeout(() => {
      parentdiv.removeChild(p);
    }, 500);

    return false;
  } else {
    //create li
    li = document.createElement("li");
    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");
    //create label
    var label = document.createElement("label");
    label.setAttribute("for", "item");

    // add these elements on web page
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = "visual";
    }, 2);

    input.value = "";
  }
}

function removeItem() {
  li = ul.children;

  for (let index = 0; index < li.length; index++) {
    console.log(li[index]);
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}
