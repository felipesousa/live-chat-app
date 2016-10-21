(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController($scope, $firebaseArray, $firebaseAuth, $ionicPopup, $ionicLoading) {

    const ref       = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.auth     = $firebaseAuth();
    $scope.login    = function () {
      $scope.auth.$signInWithPopup("google");
    }

    $scope.auth
	    .$onAuthStateChanged(function(firebaseUser) {
	      if (firebaseUser) {
	        $scope.user = firebaseUser;
          $ionicLoading.hide();
	      } else {
	      	$scope.user = $scope.auth.$getAuth();
          $ionicPopup
            .confirm({
              title: 'Ops!',
              template: 'É necessário estar logado para poder enviar mensagens!',
              scope: null,
              buttons: [{
                text: 'Fazer Login',
                type: 'button-positive',
                onTap: function(e) {
                  console.log('to por aquil');
                  $ionicLoading.show({
                    content: 'Loading'
                  });
                  $scope.auth.$signInWithPopup("google");
                  return true;
                }
              }]
            });
	      }
    	});

    $scope.addMessage = function(msg) {
      $scope.messages.$add({
        text:  msg,
        name:  $scope.user.displayName,
        email: $scope.user.email,
        photo: $scope.user.photoURL
      });

      return $scope.textMsg = '';
    };
  }

})();
