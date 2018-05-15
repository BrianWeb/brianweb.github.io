angular.module('changeArrowsAccordionSectionsModule', [])
    .controller('ChangeArrowsAccordionSectionsController', [
    function changeArrowsFunction() {

        //If Collapsible Divs are expanded then display up arrow:

        /*About section
        $("#collapsibleAboutDiv").on('shown.bs.collapse', function () {
            document.getElementById("aboutMoreLessTriangle").innerHTML = "&#9650;"; 
        });
        */

        //Philosophy section
        $("#collapsiblePhilosophyDiv").on('shown.bs.collapse', function () {
            document.getElementById("philosophyMoreLessTriangle").innerHTML = "&#9650;";
        });

        //Projects section
        $("#collapsibleProjectsDiv").on('shown.bs.collapse', function () {
            document.getElementById("projectsMoreLessTriangle").innerHTML = "&#9650;";
        });


        //If Collapsible Divs are hidden then display down arrow:

        /*About section
        $("#collapsibleAboutDiv").on('hidden.bs.collapse', function () {
            document.getElementById("aboutMoreLessTriangle").innerHTML = "&#9660;";
        });
        */

        //Philosophy section
        $("#collapsiblePhilosophyDiv").on('hidden.bs.collapse', function () {
            document.getElementById("philosophyMoreLessTriangle").innerHTML = "&#9660;";
        });

        //Projects section
        $("#collapsibleProjectsDiv").on('hidden.bs.collapse', function () {
            document.getElementById("projectsMoreLessTriangle").innerHTML = "&#9660;";
        });


    }]);