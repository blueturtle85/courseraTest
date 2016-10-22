(function (){
  'use strict';

  angular.module('Assignment1', [])
  .controller('DishesController', DishesController);
  DishesController.$inject = ['$scope'];

  function DishesController($scope){
      $scope.dishes = "";
      $scope.test = "1231";
  }


})();
