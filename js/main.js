//jquery here ---------------------

var jq = $.noConflict();

jq(document).ready(function(){
    jq("button").click(function(){
      jq.getJSON("https://puyma.xyz/src/lang.json", function(result){
        jq.each(result, function(i, field){
          jq("#aoa").append(field + " ");
        });
      });
    });
  });

// js here ------------------------