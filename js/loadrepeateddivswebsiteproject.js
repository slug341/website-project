/************repeated Divs for Website Project site*****/

function loadRepeatedDivs(){
    
    $("#navigation-bar").load("js/loadnavigationbar.html");
    $("#footer-bar").load("js/loadfooterbar.html");
}

jQuery(document).ready(function() { loadRepeatedDivs(); });