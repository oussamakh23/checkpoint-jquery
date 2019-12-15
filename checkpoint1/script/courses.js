var text=document.getElementById("bold")
function test(){
    var test=document.getElementById("bold")
if(
    test.style.fontWeight=="bold"){
        test.style.fontWeight="normal";
    }
    else(
        test.style.fontWeight="bold"
    )
}
function ita(){
      var test2=document.getElementById("bold")
 if(
     test2.style.fontStyle=="italic"){
     test2.style.fontStyle="normal";
    }
    else
        test2.style.fontStyle="italic"
    

}
function underlined(){
        var test3=document.getElementById("bold")
 if(test3.style.textDecoration=="underline"){
     test3.style.textDecoration="none";
    }
 else
    test3.style.textDecoration="underline"
    
}

function change(){
    text.style.fontFamily= document.getElementById("select").value    

}

$(".img").mouseenter(function(){
    $(this).css("opacity","0.5")
    // alert($(this).find(".hide"))
    $(this).find(".hide").show(); 
})
$(".img").mouseleave(function(){
    $(this).css("opacity","1")
    $(this).find(".hide").hide();
})

