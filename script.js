var users = [
  {
    name: "Lucy",
    age: 24,
    gender: "F",
    hobby: "pets",
    avatar: "avatar1.png",
  },
  {
    name: "Betty",
    age: 20,
    gender: "F",
    hobby: "pets",
    avatar: "avatar2.png",
  },
  {
    name: "Ronald",
    age: 28,
    gender: "M",
    hobby: "music",
    avatar: "avatar3.png",
  },
  {
    name: "Christopher",
    age: 26,
    gender: "M",
    hobby: "sports",
    avatar: "avatar4.png",
  },
  {
    name: "Ximena",
    age: 19,
    gender: "F",
    hobby: "reading",
    avatar: "avatar5.png",
  },
  {
    name: "Paul",
    age: 22,
    gender: "M",
    hobby: "shopping",
    avatar: "avatar6.png",
  },
  {
    name: "Charlie",
    age: 25,
    gender: "M",
    hobby: "pets",
    avatar: "avatar7.png",
  },
];

window.addEventListener("load", function () {
  var results = document.getElementById("results");

  function search() {
    //get hobby
    var hobbyField = document.getElementById("hobby");
    var hobby = hobbyField.value;

    //get gender
    var genderField = document.getElementById("gender");
    var s = genderField.selectedIndex;
    var gender = genderField.options[s].value;

    var minAge = document.getElementById("min-age");
    var maxAge = document.getElementById("max-age");

    var resultsHtml = "";
    var usersLength = users.length;

    for (var i = 0; i < usersLength; i++) {
      //check gender
      if (gender == "A" || gender == users[i].gender) {
        //check age
        if (
          (minAge.value == "" || users[i].age >= minAge.value) &&
          (maxAge.value == "" || users[i].age <= maxAge.value)
        )
          if (hobby == "" || hobby == users[i].hobby) {
            //check hobby
            resultsHtml +=
              '<div class="person-row">\
                         <img src="assets/' +
              users[i].avatar +
              '" />\
                         <div class="person-info">\
                         <div class="person-name">' +
              users[i].name +
              '</div>\
            <div class="person-age">' +
              users[i].age +
              '</div>\
            <div class="person-hobby">' +
              users[i].hobby +
              "</div></div>\
                          <button>Add as friend</button></div>";
          }
      }
    }

    results.innerHTML = resultsHtml;
  }

  var searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", search);
});
