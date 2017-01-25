$(document).ready(function(){

    cloneBranchOne = function (){
        var e = $('.sakuraTreeFlower:first-child');
        for (var i = 0; i < 5; i++) {
        e.clone().insertAfter(e);
        }
    };
    cloneBranchOne();  

});