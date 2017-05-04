  angular.module('expandAccordionSectionsModule', [])
     .controller('ExpandAccordionSectionsController', [
     function expandDivsFunction() {
         var mq = window.matchMedia("(min-width: 768px)");

         if (mq.matches) { // window width is at least 768px
             console.log("The window width is at least 768px wide");
             $('.customCollaspeSection').collapse('show');
             document.getElementById("aboutMoreLessTriangle").className = "glyphicon glyphicon-menu-up";
             document.getElementById("philosophyMoreLessTriangle").className = "glyphicon glyphicon-menu-up";
             document.getElementById("projectsMoreLessTriangle").className = "glyphicon glyphicon-menu-up";
         }
         else { // window width is less than 768px
             console.log("The window width is less than 768px");
         }

     }]);