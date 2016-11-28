(function(){

//  define our main module
var app = angular.module('wiki-viewer', []);

// attach controller to (inside) our app
app.controller('WikiController', ['$scope', '$http', function($scope, $http){
  $scope.input = {term: ''};
  $scope.results = [];
  $scope.searchWiki = function() {
    console.log("Hey");
    };

}]);





})();
