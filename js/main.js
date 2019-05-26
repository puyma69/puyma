//jquery here ---------------------

var jqy = $.noConflict();

jqy(document).ready(function(){
    jqy("button").click(function(){
      jqy("#div1").load("https://puyma.xyz/src/lang.json");
    });
  });

// js here ------------------------