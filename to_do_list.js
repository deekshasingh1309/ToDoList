

//function removeItem(){
//	var ul = document.getElementById("dynamic-list");
  //var candidate = document.getElementById("candidate");
  //var item = document.getElementById(candidate.value);
  //ul.removeChild(item);
//}


function createinput()
    { 
        var body=document.getElementsByTagName("body")[0];
        var container=document.createElement("container")
        container.id="con"
        var input = document.createElement("input")
        input.type = "date"
        input.name = "dateinput"
        input.id="date"
        input.appendChild(document.createTextNode("dates"))
        container.appendChild(input)

        var input1 = document.createElement("input");
        input1.type = "text"
        input1.name = "desc"   
        input1.id="descript"  
        input1.placeholder="Description"
        input1.appendChild(document.createTextNode("dsc")) 
        container.appendChild(input1);
        var btn=document.createElement("button")
        btnvalue=document.createTextNode("OK")
        btn.onclick=ok
        btn.appendChild(btnvalue)
        container.append(btn)

        var btn1=document.createElement("button")
        btn1value=document.createTextNode("CANCEL")
        btn1.onclick=cancel
        btn1.appendChild(btn1value)
        container.appendChild(btn1)
        
    
        console.log(container)
        body.appendChild(container)
    }
    var data=[
        {
            "date1":  "20/01/17",
            "desc1": "01/01/1900"
        }
    ]

    function ok()
    {
        var dt=document.getElementById("date").value;
        var ds=document.getElementById("descript").value;
            if(dt=="" || ds==""){
                alert("empty");
            }
            
            else{
                data.push({"date":dt, "desc":ds})
                createlist();
            }
    }

        function createlist(){
          var ul = document.createElement("dynamic-list");
          var  li= document.createElement("li");
          console.log("hi",data);
          li.setAttribute('date',data.value);
          li.setAttribute('des',data.value);
          li.appendChild(document.createTextNode(data.value));
          li.appendChild(document.createTextNode(data.value));
          ul.appendChild(li);
          document.body.appendChild(ul)
        }



    function cancel(){


    }

