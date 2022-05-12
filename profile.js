firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html");
        document.getElementById("user").innerHTML = "sekmingai atsijungete"
    }else{
        document.getElementById("user").innerHTML = user.email;
        const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const date = new Date(user.metadata.creationTime);
        let year = date.getFullYear();
        console.log(user);
        let month = allMonths[date.getMonth()];
        let day = date.getDate();
        document.getElementById('create-date').innerHTML = `${month} ${day}, ${year}`
    }
})


function logout(){
    firebase.auth().signOut();
}

