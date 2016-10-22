(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
      $scope.dishes = "";
      $scope.message = "";
      $scope.split = function(){
        var arrayOfDishes = $scope.dishes.split(",");
        if (arrayOfDishes.length <= 3)
          $scope.message = "Enjoy!";
        else 
          $scope.message = "Too Much!";
      }    
  }
  

})();
