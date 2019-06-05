//jquery here ---------------------

var jqy = $.noConflict();

jqy(document).ready(function(){
    jqy("button").click(function(){
      jqy("#aoa").load("https://puyma.xyz/data/lang.json");
    });
  });

// js here ------------------------