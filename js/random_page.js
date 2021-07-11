    function random_page(){
        var myrandom=Math.round(Math.random()*4)
        var links=new Array()
        links[0]="1.html"
        links[1]="2.html"
        links[2]="3.html"
        links[3]="4.html"
        links[4]="5.html"
     
        window.location=links[myrandom]
    } 