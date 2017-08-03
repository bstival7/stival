function setup(){
    $.ajax({
        url: 'https://randomuser.me/api/'
    }).done(function(data){
        dataFunction(data);
    });
}

$(document).ready(setup);

var dataFunction = function(data){
    var fullname = data.results[0].name.first + " " + data.results[0].name.last;
    var nat = data.results[0].nat;
    $("#name").append("<p>"+fullname+"</p>");
    $("#pic").append("<img src=" + data.results[0].picture.large + "></img>");
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/' + nat
    }).done(function(name){
        $("#nation").append("<p> I am from " + name.name + "</p>");
    })
    $("#otherinfo").append("<p> Adress: "+ data.results[0].location.street +"</p>");
    $("#otherinfo").append("<p> State/Province: "+ data.results[0].location.state +"</p>");
    $("#otherinfo").append("<p> Postal Code: "+ data.results[0].location.postcode +"</p>");
    $("#otherinfo").append("<p> Personal E-Mail: "+ data.results[0].email +"</p>");
    $("#otherinfo").append("<p> Phone #: "+ data.results[0].cell +"</p>");
}