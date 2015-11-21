
// If window width is greater than 768px then expand the references section
function fnExpandReferencesDiv() {
    var mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) { // window width is at least 768px
        console.log(" window width is at least 768px wide");
        // document.getElementById("collapsibleReferencesDiv").className += " in";
        //Above works but I used the below as per Bootstrap documentation
        $('#collapsiblePhilosophyDiv').collapse('show');
        document.getElementById("philosophyMoreLessTrigger").innerHTML = 'Show Less';
        document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-triangle-top";
    }
    else { // window width is less than 768px
        console.log(" window width is less than 768px");
        document.getElementById("philosophyMoreLessTrigger").innerHTML = 'Show More';
        document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-triangle-bottom";
    }
};


//Display 'Show Less' or 'Show More' and up/down arrows on the services divs depending on the state that they are in. The above
//code is for on page load, as determined by the initial viewport (usually screen size). 

$(document).ready(function () {

    //If Collapsible Divs are shown then display 'Show Less' and 'triangle-top':

    $("#collapsiblePhilosophyDiv").on('shown.bs.collapse', function () {
        document.getElementById("philosophyMoreLessTrigger").innerHTML = 'Show Less';
        document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-triangle-top";
    });


    //If Collapsible Divs are hidden then display 'Show More' 'triangle-bottom':

    $("#collapsiblePhilosophyDiv").on('hidden.bs.collapse', function () {
        document.getElementById("philosophyMoreLessTrigger").innerHTML = 'Show More';
        document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-triangle-bottom";
    });

});

