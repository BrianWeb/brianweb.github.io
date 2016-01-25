angular.module('changeArrowsAccordionSectionsModule', [])
    .controller('ChangeArrowsAccordionSectionsController', [
    function changeArrowsFunction() {

        //If Collapsible Divs are hidden then display 'glyphicon-menu-up' (down up):

        //About section
        $("#collapsibleAboutDiv").on('shown.bs.collapse', function () {
            document.getElementById("aboutMoreLessTriangle").className = "glyphicon glyphicon-menu-up";
        });

        //Philosophy section
        $("#collapsiblePhilosophyDiv").on('shown.bs.collapse', function () {
            document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-menu-up";
        });

        //Projects section
        $("#collapsibleProjectsDiv").on('shown.bs.collapse', function () {
            document.getElementById("projectsMoreLessTriangle").className = "glyphicon glyphicon-menu-up";
        });


        //If Collapsible Divs are hidden then display 'glyphicon-menu-down' (down arrow):

        //About section
        $("#collapsibleAboutDiv").on('hidden.bs.collapse', function () {
            document.getElementById("aboutMoreLessTriangle").className = "glyphicon glyphicon-menu-down";
        });

        //Philosophy section
        $("#collapsiblePhilosophyDiv").on('hidden.bs.collapse', function () {
            document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-menu-down";
        });

        //Projects section
        $("#collapsibleProjectsDiv").on('hidden.bs.collapse', function () {
            document.getElementById("projectsMoreLessTriangle").className = "glyphicon glyphicon-menu-down";
        });


    }]);