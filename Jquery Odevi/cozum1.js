// görev 1
$(document).ready(function () {
    $("#gorev1 >button").click(function () {

        var listele = $("article>div>h2:lt(3)")
        listele.each(function(){
            $("#gorev1>ul").append("<li>"+$(this).text()+"</li>" )
        })
    });

});


// görev 2 

$(document).ready(function(){
    $("#gorev2>button").click(function(){
    
    a = $("#gorev2 :input")
    b = $("article>div>h2").length;
    a.val(b);
    
    });
    });

// görev 3
$(document).ready(function(){
$("#gorev3>button").click(function(){

a = $("#gorev3 :input")
b = $("h1").text();
a.val(b);

});
});



// görev 4
$(document).ready(function () {
    $("#gorev4>button").click(function(){
        $("article>div>h2").each(function(index, element) {
            var metin = $(this).siblings("p").text();
            $(this).append(" : "+metin.length )
          
    
        });
    
    
    });
    

    })


// görev 5
$(document).ready(function () {
    $("#gorev5>button").click(function () {
        $("article>div>h2:even").css("color", "blue")
        $("article>div>h2:odd").css("color", "orange")
        $("article>div>h1").css("color", "red")

    });




});
// görev 6
$(document).ready(function () {
    $("#gorev6>button").click(function () {
        $("h2").first().fadeOut()
        $("p").first().fadeOut()

    });

});



// görev 7
$(document).ready(function () {
    $("#gorev7>button").click(function () {

        var lis = $("article>div>h2:contains('can')")
       lis.each(function(){
           $("#gorev7>ul").append("<li>"+$(this).text()+"</li>" )
       })
    });

});

// görev 8
$(document).ready(function () { 
    $("#gorev8>button").click(function () {
        $.ajax({
            url: "lorem.html",
            type: "get",
            success: function (sonuc) {

            }

        })

    });

});


// görev 9
$(document).ready(function(){
    $("h2,h1").mouseover(function(){
        a = $("#gorev9 :input")
        b = $(this).text();
        a.val(b);
    });
   
});

// görev 10
