var date = moment().format("MMM Do YY");
var time = Date($.now());
var saveButtons = $(".saveBtn");
var inputBox = $(".textarea");


$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// for (let i = 0; i < inputBox.length; i++) {
//     var timeNow = parseInt($(inputBox[i]).attr("id"));
//     var compareHour = parseInt(moment().format("HH"));

//     if (timeNow < compareHour){
//         $(inputBox[i]).addclass(".past");
//     } else if (timeNow > compareHour){
//         ($(inputBox[i]).addclass(".future"))
//     } else ($(inputBox[i]).addclass(".present"))
    
    
// }


$("#btn9").on("click", function(event){
    event.preventDefault;
    var text9 = $("#9").val();
    localStorage.setItem("btn9", JSON.stringify(text9));
    
    console.log(JSON.parse(localStorage.getItem(text9)));
})


$("#btn10").on("click", function(event){
    event.preventDefault;
    var text9 = $("#10").val();
    localStorage.setItem("btn10", text9);
})

$("#btn11").on("click", function(event){
    event.preventDefault;
    var text9 = $("#11").val();
    localStorage.setItem("btn11", text9);
})


$("#btn12").on("click", function(event){
    event.preventDefault;
    var text9 = $("#12").val();
    localStorage.setItem("btn12", text9);
})


$("#btn13").on("click", function(event){
    event.preventDefault;
    var text9 = $("#13").val();
    localStorage.setItem("btn13", text9);
})


$("#btn14").on("click", function(event){
    event.preventDefault;
    var text9 = $("#14").val();
    localStorage.setItem("btn14", text9);
})


$("#btn15").on("click", function(event){
    event.preventDefault;
    var text9 = $("#15").val();
    localStorage.setItem("btn15", text9);
})


$("#btn16").on("click", function(event){
    event.preventDefault;
    var text9 = $("#16").val();
    localStorage.setItem("btn16", text9);
})


$("#btn17").on("click", function(event){
    event.preventDefault;
    var text9 = $("#17").val();
    localStorage.setItem("btn17", text9);
})


    