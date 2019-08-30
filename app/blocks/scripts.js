function include_script( url ){
    var script = document.createElement( 'script' );
    script.src = url ;  
    document.head.appendChild( script );
}

document.addEventListener( "DOMContentLoaded" , function(){
    include_script( 'blocks/carousel-slider/carousel-slider.js' );
   
});