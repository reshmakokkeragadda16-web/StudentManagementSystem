function addStudent() {
    name = document.getElementById("name").value;
    roll= document.getElementById("roll").value;
    if(name=="" || roll==""){
        alert("Please fill all the fields");
        return;
    }
    let item = document.getElementById("list");
    item.textContent += name + " - " + roll + "\n";
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}