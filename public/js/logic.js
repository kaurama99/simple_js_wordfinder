$(document).ready(function(){
    //load the words-small JSON file
    $.getJSON("/words-small.json", function(data){
      console.log("words-small-size: "+data.length);
      console.log("words-small: "+data);
      //append to HTML on words found
      $("#count").html("Words Found: "+data.length)
        //list the words in HTML list
        data.forEach(element => {
        $("#list").append('<div class="item" style="color: white;"> '+ element + '</div>');
      });
      
    $("#clear").click(function() {
      $("#search").val('');
      $("#list").empty();
      //append to HTML on words found
      $("#count").html("Words Found: "+data.length)
        //list the words in HTML list
        data.forEach(element => {
        $("#list").append('<div class="item" style="color: white;"> '+ element + '</div>');
      });
    })
      $("#search").on('input', function(){
        var searchin = this.value;
        $("#list").empty();
        if($("#search").val().length==0){
          //append to HTML on words found
          $("#count").html("Words Found: "+ data.length)
          //list the words in HTML list
          data.forEach(element => {
          $("#list").append('<div class="item" style="color: white;"> '+ element + '</div>');
          });
        }
        else{
          var a=[];
          $("#list").empty();
          for(let x = 0; x<= data.length; x++){
            if(data[x].match(searchin.toLowerCase())){
              a.push(data[x]);
              $("#count").html("Words Found: "+ a.length)
              $("#list").append('<div class="item" style="color: white;"> '+ data[x] + '</div>');
            }
          }
        }
      })
      
    }).fail(function(){
      console.log("An error has ocurred when trying to load words-small.json!");
    })

  })
