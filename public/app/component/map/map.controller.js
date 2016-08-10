angular.module('maps')
  .controller('mapsCtrl', function($scope, mapsSrvc) {

    $scope.getChargers = function() {
      mapsSrvc.getAllLocations().then(function(response) {
        for (var i = 0; i < response.length; i++) {
          response[i].gps = response[i].gps.split(', ')
        }
        $scope.location = response;
        $scope.initMap();
      })
    }

    $scope.initMap = function() {
      $scope.mapDiv = document.getElementById('map');
      $scope.map = new google.maps.Map($scope.mapDiv, {
          center: {lat: 39.8333333, lng: -98.585522},
          zoom: 4,
          mapTypeControl: false
      });
      for (var i = 0; i < $scope.location.length; i++){
        $scope.latLng = new google.maps.LatLng($scope.location[i].gps[0], $scope.location[i].gps[1]);
        $scope.marker = new google.maps.Marker({
          position: $scope.latLng,
          map: $scope.map,
          title: $scope.location.city
        });
        $scope.marker.info = $scope.location[i];
        $scope.marker.addListener('click', function() {
          $scope.station = this.info;
          // console.log(($scope.station.city));
          console.log(this.info.city);
          $scope.$apply();
        })
      }
    }

    $scope.getChargers();
})


          // $scope.infowindow.open($scope.map);

// $scope.contentString = '<div class="iWindow">'+
//             '<div id="siteNotice">'+
//             '</div>'+
//             '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//             '<div id="bodyContent">'+
//             '<p><b>'+ $scope.location[i].city + '</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//             'sandstone rock formation in the southern part of the '+
//             'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//             'south west of the nearest large town, Alice Springs; 450&#160;km '+
//             '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//             'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//             'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//             'Aboriginal people of the area. It has many springs, waterholes, '+
//             'rock caves and ancient paintings. Uluru is listed as a World '+
//             'Heritage Site.</p>'+
//             '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//             'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//             '(last visited June 22, 2009).</p>'+
//             '</div>'+
//             '</div>';
// $scope.infowindow = new google.maps.InfoWindow({
//   content: $scope.contentString,
//   pixelOffset: new google.maps.Size(300, 0)
// })
