var id= "b6f01528";
var key= "cc41a313b199834b7cf639b463371b0f";
var foodURL = "https://api.nutritionix.com/v1_1/search/butterfinger%20cup?results=0:5&fields=item_name,nf_calories&appId=" + id + "&appKey=" + key;
$.ajax({
    url:foodURL,
    success:function(data){
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2> This " + name + " has " + cals + "kcal !!! </h2>");
    }
});