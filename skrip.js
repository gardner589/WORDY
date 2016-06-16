var tes


$(document).ready( function() {

  console.log($.parseXML());

  $("button").click(function(){
    var Putput = $("input").val();
    var rl = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/"+Putput+"?key=8128e27a-3ff9-492e-8b6c-65ef2cdfeb82";
    $.ajax({
      url: rl,
      type: "GET",
      dataType: "xml"
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log("You can't believe, that is why you fail")
    })
  });
});
