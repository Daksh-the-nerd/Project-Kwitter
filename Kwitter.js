
const firebaseConfig = {
    apiKey: "AIzaSyByEl4f-2Sew3paidgY4Hdrk_cs-YY8qqk",
    authDomain: "kiwitter-capstone-class.firebaseapp.com",
    databaseURL: "https://kiwitter-capstone-class-default-rtdb.firebaseio.com",
    projectId: "kiwitter-capstone-class",
    storageBucket: "kiwitter-capstone-class.appspot.com",
    messagingSenderId: "761685827199",
    appId: "1:761685827199:web:6a2e74b798ed815a47294a"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    var names = document.getElementById("user1name").value
    localStorage.setItem("Username",names);
    var namelength = names.length;


    if(namelength == 0)
    {
        document.getElementById("login_button").style.display = "none";
    }
    else if(namelength >0)
    {
        var button = '<button id="login_button" onclick="addData()">Login</button>';
        document.getElementById("seconddiv3").innerHTML = button;
    }

    
}

function addData()
{
    var names = document.getElementById("user1name").value
    localStorage.setItem("Username",names);
    window.location = "Kwitter_room.html"
    var name_of_user = localStorage.getItem("Username")
}
    


function home()
{
    window.location = "index.html"
} 

function myFunction()
{
    var name_of_user = localStorage.getItem("Username")
    document.getElementById("welcome").innerHTML="Welcome to Kwitter " + name_of_user + "."
}





function addroom()
{
    var room_name = document.getElementById("input").value
    localStorage.setItem("input_value",room_name);
    console.log(room_name)

    firebase.database().ref("/").child(room_name).update({
        "The id of the user" : "daksh",
        "Surname of user"   : "Gupta"
    })
    localStorage.setItem("room_name",room_name);
}

function getData() 
{
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{
    childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room names - " + Room_names)
    row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
    page_button = "<button class='btn btn-info' onclick='redirecttomsgpage()'>Click to message in this room</button>"
    document.getElementById("output").innerHTML += row;
    document.getElementById("output").innerHTML += page_button; 
});});
}
getData();



