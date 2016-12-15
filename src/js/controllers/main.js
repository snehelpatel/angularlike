import $ from 'jquery';

function MainController ($scope) {

  $scope.number = 1;
  $scope.likes = `0 Likes`;

  var add = true;
  $scope.toggle = function () {
    add = !add;
  }

    $scope.addLike = function () {
      if (add === true) {
        var newNumber = ++$scope.number;
        if (newNumber < 0){
          $scope.likeMsg = `0 Likes`;
        } else if (newNumber === 1) {
          $scope.likes = `${newNumber} Like`;
        } else {
          $scope.likes = `${newNumber} Likes`;
        }
      } else {
        var newNumber = --$scope.number;
        if (newNumber < 0) {
          $scope.likeMessage = `0 Likes`;
        } else if (newNumber === 1) {
          $scope.likes = `${newNumber} Like`;
        } else {
          $scope.likes = `${newNumber} Likes`;
        }
      }
    }

};

MainController.$inject = ['$scope'];
export { MainController };
