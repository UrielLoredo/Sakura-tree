$(document).ready(function(){

    cloneBranchOne = function (){
        var e = $('.sakuraTreeFlower:first-child');
        for (var i = 0; i < 10; i++) {
        e.clone().insertAfter(e);
        }
    };
    cloneBranchOne();  

});