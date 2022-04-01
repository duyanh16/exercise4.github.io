var save_list = [["./static/Mendy.jfif", "Mendy", "Togo", 5],
["./static/Tommy.jfif", "Tommy", "USA", 4], ["./static/Pimchanok.jpg", "Pimchanok", "Thailand", 4],
["./static/Pedro.png", "Pedro", "Brazil", 4],
["./static/Alia.jfif", "Alia", "India", 5], ["./static/thompson.jpg", "Thompson", "England", 4],
["./static/Wood.jpg", "Wood", "New Zealand", 4], ["./static/An.jpg", "An", "Viet Nam", 5],
["./static/gwen.jpg", "Gwen", "USA", 5], ["./static/Alexander.jfif", "Alexander", "Italy", 5]
]


function Add_student() {
    var info_list = document.getElementsByClassName("student")[0]
    var list_student = document.getElementById("list_student");
    console.log(list_student.innerHTML)
    var plus = document.getElementById("plus")
    
    var number_student=document.getElementsByClassName("student")
    
    if (number_student.length!=1){
        list_student.innerHTML=info_list.outerHTML
    }
    

    for (let index = 0; index < save_list.length; index++) {
        list_student.innerHTML += info_list.outerHTML

    }

    var list_student_class = document.getElementsByClassName("info")

    for (let index = 0; index < list_student_class.length - 1; index++) {
        list_student_class[index].getElementsByClassName("btn-close")[0].setAttribute("onclick", "delete_student("+String(index)+")")
        list_student_class[index].getElementsByTagName("img")[0].setAttribute("src", save_list[index][0])
        list_student_class[index].getElementsByClassName("name")[0].innerHTML = save_list[index][1]
        list_student_class[index].getElementsByClassName("nation")[0].innerHTML = save_list[index][2]
        var count = save_list[index][3]
        list_student_class[index].getElementsByClassName("rate")[0].innerHTML = ""
        for (let star = 0; star < count; star++) {
            list_student_class[index].getElementsByClassName("rate")[0].innerHTML += '<span class="ti-star" style="color: yellow;"></span>'
        }
    }


    var last_child = list_student_class[list_student_class.length - 1]
    last_child.getElementsByTagName("img")[0].setAttribute("src", "./static/plus.png")
    last_child.getElementsByClassName("btn-close")[0].removeAttribute("onclick")
    last_child.getElementsByClassName("btn-close")[0].innerHTML="<br>"
    last_child.getElementsByClassName("btn-close")[0].classList.remove("btn-close")

    last_child.getElementsByClassName("image")[0].innerHTML = '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="add_new()"></button>'
    last_child.getElementsByTagName("button")[0].innerHTML='<img src="./static/plus.png" class="w-50 my-4">'

    last_child.getElementsByClassName("name")[0].innerHTML = "Add More Student"
    last_child.getElementsByClassName("nation")[0].innerHTML = "<br>"
    
}
Add_student() 

function add_new(){
    var namestudent= document.getElementById("student-name").value=""
    var country= document.getElementById("country").value=0
    var studentrate= document.getElementById("student-rate").value=""
}
function validate() {
    var namestudent= document.getElementById("student-name").value
    var country= document.getElementById("country").value
    var studentrate= document.getElementById("student-rate").value
    if (namestudent=="" || studentrate=="" ||  country==0){
        console.log("Please")
    }
    else{
        save_list.push(new Array("./static/profile.png",namestudent,country,studentrate))
        Add_student() 
        $('#exampleModal').modal('hide');
    }
    
}

function delete_student(num) {
    ans=confirm("Bạn có muốn xóa "+save_list[num][1] +" khỏi danh sách")
    if (ans) {
        save_list.splice(num,1)
        Add_student()
    }
    
}