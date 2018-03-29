//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('member/' + String(Math.floor(Math.random()*10))).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
$( document ).ready(function() {
    console.log("starting document!!!!");

    $(function ($) {
         $("#firebasebutton").click(function (evt) {
           console.log("firebasebutton was clicked")
         })
     });
     });

    console.log("Initialize Firebase");
    var config = {
    apiKey: "AIzaSyA7B_WQ6e_AaIesZZCbNQyGpqx4sOopzvs",
    authDomain: "test1-fb2c2.firebaseapp.com",
    databaseURL: "https://test1-fb2c2.firebaseio.com",
    projectId: "test1-fb2c2",
    storageBucket: "test1-fb2c2.appspot.com",
    messagingSenderId: "988611016244"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else {
           update_data(data.key, parseInt(data.val()))

           writeUserData('warodom', 'warodom khamphanchai',
           'kwarodom@vt.edu', 'https://pbs.twimg.com/profile_images/966896631147765760/AJ836huS_400x400.jpg')
        }
    });

});
