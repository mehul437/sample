
function obtainval() {
    var inputbx = document.createElement("div")
    inputbx.setAttribute("id", "inputbox")

    var labe = document.createElement("label")
    labe.setAttribute("for", "datatrip")
    labe.innerHTML = "Enter task list";


    var inputfiel = document.createElement("input")
    inputfiel.setAttribute("name", "datatrip")
    inputfiel.setAttribute("id", "datatrip")
    inputfiel.setAttribute("type", "text")

    var butto = document.createElement("button")
    butto.setAttribute("id", "adde")
    butto.setAttribute("type", "submit")
    butto.innerHTML = "add"
    butto.setAttribute("onclick", "dop()")

    var butto2 = document.createElement("button")
    butto2.setAttribute("id", "del")
    butto2.setAttribute("type", "submit")
    butto2.innerHTML = "close"
    butto2.setAttribute("onclick", "drop()")



    inputbx.appendChild(labe)
    inputbx.appendChild(inputfiel)
    inputbx.appendChild(butto)
    inputbx.appendChild(butto2)

    document.getElementById("main1").appendChild(inputbx)
    var master = document.getElementById("main")

    master.style.filter = "blur(7px)"



}

let val;
function dop() {
    var a = document.getElementById("datatrip")
    val = a.value

    var master = document.getElementById("main")
    master.style.filter = "none"
    var del = document.getElementById("inputbox")
    del.remove()

    create()


}
function create() {
    console.log("done")
    let list = document.createElement("div")
    list.setAttribute("class", "boxx")
    


    let tripp = document.createElement("p")
    tripp.setAttribute("class", "trip")
    tripp.innerHTML = val

    let line = document.createElement("hr")

    let databo = document.createElement("div")
    databo.setAttribute("class", "databox")
    

    let innerdatabo = document.createElement("div")
    innerdatabo.setAttribute("class", "databoxin")
    

    let icon = document.createElement("span")
    icon.setAttribute("onclick", "obtaindata(this.getAttribute('class'))")
    icon.innerHTML = '<i class="fas fa-plus-square fa-2x aria-hidden="true" "></i>'

    let icon2 = document.createElement("span")
    icon2.setAttribute("onclick", "delvalue(this.getAttribute('class'))")
    icon2.innerHTML = '<i class="fas fa-trash-alt fa-2x aria-hidden="true" "></i>'

    databo.appendChild(innerdatabo)
    databo.appendChild(icon)
    databo.appendChild(icon2)
    list.appendChild(tripp)
    list.appendChild(line)
    list.appendChild(databo)
    document.getElementById("innermain").appendChild(list)

}
function drop() {

    var master = document.getElementById("main")
    master.style.filter = "none"
    var del = document.getElementById("inputbox")

    del.remove()

}