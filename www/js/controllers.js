


angular.module('starter.controllers', [])

.run(function($ImageCacheFactory){


 

  $ImageCacheFactory.Cache([

    "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif",

             "http://efgh-technologies.com/resources/gif/W02_The_neck_stretch_left_to_right.gif",
             "http://efgh-technologies.com/resources/gif/W03_Neck_stretch_lateral_flexion.gif",
             "http://efgh-technologies.com/resources/gif/W04_Shoulder_roll_back.gif",
             "http://efgh-technologies.com/resources/gif/W05_Shoulder_roll_front.gif",
             "http://efgh-technologies.com/resources/gif/W06_Scapular_rotation.gif",
             "http://efgh-technologies.com/resources/gif/W07_The_Matrix.gif",
            "http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif",
             "http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif",
             "http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif",
            "http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif",
             "http://efgh-technologies.com/resources/gif/W12_Bending_forward_flexion.gif"


    ]).then(function(){
    console.log("done preloading!");
  });
})


.controller('KettleCtrl', function($scope,$rootScope){

  
}
)
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

.controller('PlaylistsCtrl', function($scope,$rootScope,$ImageCacheFactory) {



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

  $rootScope.timers = new Array();


//note no 9 and 11 are missing
/*
$ImageCacheFactory.Cache([
       "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif",

             "http://efgh-technologies.com/resources/gif/W02_The_neck_stretch_left_to_right.gif",
             "http://efgh-technologies.com/resources/gif/W03_Neck_stretch_lateral_flexion.gif",
             "http://efgh-technologies.com/resources/gif/W04_Shoulder_roll_back.gif",
             "http://efgh-technologies.com/resources/gif/W05_Shoulder_roll_front.gif",
             "http://efgh-technologies.com/resources/gif/W06_Scapular_rotation.gif",
             "http://efgh-technologies.com/resources/gif/W07_The_Matrix.gif",
            "http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif",
             "http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif",
             "http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif",
            "http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif"
             "http://efgh-technologies.com/resources/gif/W12_Bending_forward_flexion.gif"
    ]).then(function(){
        console.log("Images done loading!");
    },function(failed){
        console.log("An image filed: "+failed);
    });


*/
  
  

  $scope.playGif = function(){
    console.log('clicked on start ');
    console.log('dynamicImageLink value:'+$rootScope.dynamicImageLink);
    console.log('staticImageLink value:'+$rootScope.staticImageLink);
   
    
    var buttonValue = document.getElementById('toggleButton').innerHTML;
    if(buttonValue === 'START')
    {
      document.getElementById('toggleButton').innerHTML='STOP';
     
     $rootScope.dynamicImageLink = $rootScope.tempLink;
    }
    else
    {
      document.getElementById('toggleButton').innerHTML='START';

      $rootScope.dynamicImageLink = $rootScope.staticImageLink;
      
      
      
     
    }
    console.log('buttonValue:'+buttonValue);
   /* var timeLeft = 30;
    var elem = document.getElementById('countdownTime');

   var timerId = setInterval(countdown,1000); 
   $rootScope.timers.push(timerId);


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

    }*/

  };




 


    $scope.loadPage = function(id){
      
      

      $rootScope.selectedIndex = id;
      $rootScope.staticImageLink = "";
      $rootScope.dynamicImageLink = "";
      $rootScope.audioLink = "";
      $rootScope.excTitle="Excercise title";

      $rootScope.tempLink = "";

      for(i = 0; i < $rootScope.timers.length;i++)
      {
        clearTimeout(timers[i]);
      }




      
      


      $rootScope.pageId = id;

      image1 = new Image();
            image2 = new Image();
            image3 = new Image();
            image4 = new Image();
            image5 = new Image();
            image6 = new Image();
            image7 = new Image();
            image8 = new Image();
            image9 = new Image();
            image10 = new Image();
            image11= new Image();
            image12 = new Image();

            image1.src =  "http://efgh-technologies.com/resources/gif/W01_The_neck_stretch_front_to_back.gif";

            image2.src = "http://efgh-technologies.com/resources/gif/W02_The_neck_stretch_left_to_right.gif";
            image3.src = "http://efgh-technologies.com/resources/gif/W03_Neck_stretch_lateral_flexion.gif";
            image4.src = "http://efgh-technologies.com/resources/gif/W04_Shoulder_roll_back.gif";
             image5.src = "http://efgh-technologies.com/resources/gif/W05_Shoulder_roll_front.gif";
             image6.src = "http://efgh-technologies.com/resources/gif/W06_Scapular_rotation.gif";
             image7.src = "http://efgh-technologies.com/resources/gif/W07_The_Matrix.gif";
             image8.src="http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif";
             image9.src = "http://efgh-technologies.com/resources/gif/W08_Shoulder_rotation.gif";
             image10.src = "http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif";
             image11.src="http://efgh-technologies.com/resources/gif/W10_Spinal_flexion.gif";
             image12.src="http://efgh-technologies.com/resources/gif/W12_Bending_forward_flexion.gif";

             

      console.log("loadPage invoked with pageId:"+$rootScope.pageId);
      console.log("loadPage invoked with image1:"+image1);
      console.log("loadPage invoked with image1 src:"+image1.src);
      




      switch(id)
      {
        case 1:
              $rootScope.excTitle = "Neck Stretch - Front to Back";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W01_The_neck_stretch_front_to_back.jpg";
              $rootScope.dynamicImageLink = image1.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;

        case 2:
              $rootScope.excTitle = "Neck Stretch - Left to Right";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W02_The_neck_stretch_left_to_right.jpg";
              $rootScope.dynamicImageLink = image2.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W02_The_neck_stretch_left_to_right.mp3";
              break;

        case 3:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = image3.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W03_Neck_stretch_lateral_flexion.mp3";
              break;


         case 4:
              $rootScope.excTitle = "Shoulder - Roll back";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W04_Shoulder_roll_back.jpg";
              $rootScope.dynamicImageLink = image4.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W04_Shoulder_roll.mp3";
              break;
         case 5:
              $rootScope.excTitle = "Shoulder - Roll front";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W05_Shoulder_roll_front.jpg";
              $rootScope.dynamicImageLink = image5.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W05_Forward_shoulder_stretch.mp3";
              break;
         case 6:
              $rootScope.excTitle = "Scapular Rotation";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W06_Scapular_rotation.jpg";
              $rootScope.dynamicImageLink = image6.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W06_Scapular_rotation.mp3";
              break;
         case 7:
              $rootScope.excTitle = "The Matrix";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W07_The_Matrix.jpg";
              $rootScope.dynamicImageLink = image7.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W07_The_Matrix.mp3";
              break;
         case 8:
              $rootScope.excTitle = "Shoulder Rotation";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W08_Shoulder_rotation.jpg";
              $rootScope.dynamicImageLink = image8.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W08_Shoulder_inward_rotation.mp3";
              break;
         case 9:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = image9.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W08_Shoulder_inward_rotation.mp3";
              break;
         case 10:
              $rootScope.excTitle = "Spinal";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W10_Spinal_flexion.jpg";
              $rootScope.dynamicImageLink = image10.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W10_Left_spinal_flexion.mp3";
              break;
         case 11:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W03_Neck_stretch_lateral_flexion.jpg";
              $rootScope.dynamicImageLink = image11.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W11_Right_spinal_flexion.mp3";
              break;
         case 12:
              $rootScope.excTitle = "Neck Stretch - Lateral flexion";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W12_Bending_forward_flexion.jpg";
              $rootScope.dynamicImageLink = "http://efgh-technologies.com/resources/gif/W12_Bending_forward_flexion.gif";
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W12_Bending_forward_flexion.mp3";
              break;
        default:

              $rootScope.excTitle = "Default excercise";
              $rootScope.staticImageLink = "http://efgh-technologies.com/resources/jpg/W01_The_neck_stretch_front_to_back.jpg";
              $rootScope.dynamicImageLink = image12.src;
              $rootScope.audioLink = "http://efgh-technologies.com/resources/audio/W01_The_neck_stretch_front_to_back.mp3";
              break;



      }
      var audio = new Audio($rootScope.audioLink);
      audio.play();
      $rootScope.tempLink = $rootScope.dynamicImageLink;

      $rootScope.dynamicImageLink = $rootScope.staticImageLink;

      //first = new freezeframe('#excimage').freeze();
    //  first = new freezeframe('#excimage').freeze();





    

      

      console.log('inside PlaylistsCtrl, clicked on '+$rootScope.selectedIndex);

    }

    console.log('controlller loaded');
    //document.getElementById('excimage').innerHTML.src = '<b>test</b>';


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
