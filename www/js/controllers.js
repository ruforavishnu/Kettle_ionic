angular.module('starter.controllers', [])



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$rootScope) {
  $scope.playlists = [
    { title: 'Week 1 Day 1', id: 1 },
    { title: 'Week 1 Day 2', id: 2 },
    { title: 'Week 1 Day 3', id: 3 },
    { title: 'Week 2 Day 1', id: 4 },
    { title: 'Week 2 Day 2', id: 5 },
    { title: 'Week 2 Day 3', id: 6 },
    { title: 'Week 3 Day 1', id: 7 },
    { title: 'Week 3 Day 2', id: 8 },
    { title: 'Week 3 Day 3', id: 9 },
    { title: 'Week 4 Day 1', id: 10 },
    { title: 'Week 4 Day 2', id: 11 },
    { title: 'Week 4 Day 3', id: 12 },
  ];

  


  $scope.playGif = function(){
    console.log('clicked on start ');
    console.log('dynamicImageLink value:'+$rootScope.dynamicImageLink);
    document.getElementById('excimage').src = ""+$rootScope.dynamicImageLink;

    var timeLeft = 30;
    var elem = document.getElementById('countdownTime');

    var timerId = setInterval(countdown,1000);

    function countdown(){
      if(timeLeft == 0)
      {
          clearTimeout(timerId);
          console.log('time up');

          
          //do something
      }
      else
      {
        elem.innerHTML = timeLeft +'';
        timeLeft--;
      }

    }

  };



//note no 9 and 11 are missing

      $rootScope.pageId=id;
      $rootScope.selectedIndex = id;
      $rootScope.staticImageLink = "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif";
      $rootScope.dynamicImageLink = "";
      $rootScope.audioLink = "";


    $scope.loadPage = function(id){


      console.log('loading page :'+id);
      

      $rootScope.pageId=id;
      $rootScope.selectedIndex = id;
      $rootScope.staticImageLink = "";
      $rootScope.dynamicImageLink = "";
      $rootScope.audioLink = "";

      


console.log('inside switch, staticImageLink:'+staticImageLink);
      switch(id)
      {

        case 1:
              $rootScope.excTitle = "Neck Stretch - Front to Back";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W01_The_neck_stretch_front_to_back.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;

        case 2:
              $rootScope.excTitle = "Neck Stretch - Left to Right";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W02_The_neck_stretch_left_to_right.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W02_The_neck_stretch_left_to_right.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;

        case 3:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W03_Neck_stretch_lateral_flexion.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;


         case 4:
              $rootScope.excTitle = "Shoulder - Roll back";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W04_Shoulder_roll_back.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W04_Shoulder_roll_back.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 5:
              $rootScope.excTitle = "Shoulder - Roll front";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W05_Shoulder_roll_front.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W05_Shoulder_roll_front.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 6:
              $rootScope.excTitle = "Scapular Rotation";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W06_Scapular_rotation.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W06_Scapular_rotation.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 7:
              $rootScope.excTitle = "The Matrix";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W07_The_Matrix.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W07_The_Matrix.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 8:
              $rootScope.excTitle = "Shoulder Rotation";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W08_Shoulder_rotation.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 9:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 10:
              $rootScope.excTitle = "Spinal";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W10_Spinal_flexion.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 11:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
         case 12:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W12_Bending_forward_flexion.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;
        default:

              $rootScope.excTitle = "Default excercise";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W01_The_neck_stretch_front_to_back.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;



      }

      $rootScope.excTitle="Excercise title"+ id;

      
      

      console.log('inside PlaylistsCtrl, clicked on '+$rootScope.selectedIndex);

    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
