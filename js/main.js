//jquery here ---------------------

$(document).ready(function(){
    $("button").click(function(){
      $.getJSON("https://puyma.xyz/src/lang.json", function(result){
        $.each(result, function(i, field){
          $("#aoa").append(field + " ");
        });
      });
    });
  });

// js here ------------------------