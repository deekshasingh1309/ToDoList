
function createinput() {
    var body = document.getElementsByTagName("body")[0];
    var container = document.createElement("container")
    container.id = "con"
    var input = document.createElement("input")
    input.type = "date"
    input.name = "dateinput"
    input.id = "date"
    input.appendChild(document.createTextNode("dates"))
    container.appendChild(input)

    var input1 = document.createElement("input");
    input1.type = "text"
    input1.name = "desc"
    input1.id = "descript"
    input1.placeholder = "Description"
    input1.appendChild(document.createTextNode("dsc"))
    container.appendChild(input1);
    var btn = document.createElement("button")
    btnvalue = document.createTextNode("OK")
    btn.onclick = ok
    btn.appendChild(btnvalue)
    container.append(btn)

    var btn1 = document.createElement("button")
    btn1value = document.createTextNode("CANCEL")
    btn1.onclick = cancel
    btn1.appendChild(btn1value)
    container.appendChild(btn1)


    console.log(container)
    body.appendChild(container)
}
var data = [
    {
        "date": "20-01-17",
        "desc": "helloooooooooooooo"
    }
]

function ok() {
    var dt = document.getElementById("date").value;
    var ds = document.getElementById("descript").value;
    if (dt == "" || ds == "") {
        alert("empty");
    } else {
        data.push({ "date": dt, "desc": ds })
        createlist();
    }
}

function createlist() {
    var df = data;
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.id = "listdiv"
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var span = document.createElement("span");
        var span1 = document.createElement("span");
        span.innerHTML = df[i].date;
        span1.innerHTML = df[i].desc;
        li.appendChild(span);
        li.appendChild(span1);                                          
        var removebtn = document.createElement("button");
        removebtn.setAttribute("class", "glyphicon glyphicon-remove");
        li.appendChild(removebtn)
        ul.appendChild(li);
        div.appendChild(ul);
        removebtn.onclick = remove;

    }
    document.body.appendChild(div);
}

function cancel() {
    document.getElementById('con').remove();


}

function remove() {

    document.getElementById('listdiv').remove()
}
