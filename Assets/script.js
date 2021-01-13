moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

for (let i = 1; i <= 9; i++) {
    $("#G" + i).val(localStorage.getItem(i))
    
}


$(".saveBtn").on("click", function(){
    localStorage.setItem(this.id, $("#G" +this.id).val());
})


var currentTime = moment().hour() -8;
  for (let i = 1; i <= 9; i++) {
     
    if (i === currentTime){
        $("#G" + i).attr("class", "textarea present")
    }
    else if (i < currentTime){
        $("#G" + i).attr("class", "textarea past")
    }
    else if (i > currentTime){
        $("#G" + i).attr("class", "textarea future")
    }
     
 }
    