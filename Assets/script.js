var date = moment().format("MMM Do YY");
var time = Date($.now());
// var text = document.querySelector("textarea");



$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// console.log($.now());

//click event for save button, store to local storge. Info persists upon refresh, This function;
// value of; 
// time blocks color coded to represent past, present or future. Somehow tie into current time.


$(".saveBtn").on("click", function(){
    var text = $(".textarea").val();

    localStorage.setItem("textarea", text)
    console.log($(this));
})


