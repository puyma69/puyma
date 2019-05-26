//jquery here ---------------------

var jqy = $.noConflict();

jqy(document).ready(function(){
    jqy("button").click(function(){
      jqy.getJSON("https://puyma.xyz/src/lang.json", function(result){
        jqy.each(result, function(i, field){
          jqy("#aoa").append(field + " ");
        });
      });
    });
  });

// js here ------------------------