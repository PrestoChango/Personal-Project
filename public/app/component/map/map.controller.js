angular.module('app')
  .controller('mapsCtrl', function($scope, mapsSrvc) {

    $scope.getChargers = () => {
      mapsSrvc.getAllLocations().then((response) => {
        for (let i = 0; i < response.length; i++) {
          response[i].gps = response[i].gps.split(', ')
        }
        $scope.location = response;
        $scope.initMap();
      })
    }

    $scope.initMap = () => {
      $scope.icon = {
        url: "../../../assets/img/supercharger.png",
        scaledSize: new google.maps.Size(23, 35)
      };

      $scope.mapDiv = document.getElementById('map');

      $scope.map = new google.maps.Map($scope.mapDiv, {
          center: {lat: 39.8333333, lng: -98.585522},
          zoom: 5,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
          styles: [
          {
            featureType: 'road',
            stylers: [
              {saturation: -80}
            ]
          },
           {
             featureType: 'poi',
             stylers: [
               {lightness: 40},
               {saturation: -50}
             ]
           }
        ]
      });

      //autocomplete code
     $scope.infowindow = new google.maps.InfoWindow();
     $scope.marker1 = new google.maps.Marker({
        map: $scope.map,
        anchorPoint: new google.maps.Point(0, -29)
      });
      $scope.input = document.getElementById('search-box');

      $scope.options = {
        types: ['(cities)'],
        componentRestrictions: {country: 'us'}
      }
      $scope.autoComplete = new google.maps.places.Autocomplete($scope.input, $scope.options);
      $scope.autoComplete.bindTo('bounds', $scope.map);

      //runs when place is selected from dropdown list
      $scope.autoComplete.addListener('place_changed', () => {
        $scope.infowindow.close();
        $scope.marker1.setVisible(false);
        $scope.place = $scope.autoComplete.getPlace();
         if (!$scope.place.geometry) {
          //  window.alert("Autocomplete's returned place contains no geometry");
           return;
         }

         if ($scope.place.geometry.viewport) {
           $scope.map.fitBounds($scope.place.geometry.viewport);
           $scope.map.setZoom(8);
         } else {
           $scope.map.setCenter($scope.place.geometry.location);
           $scope.map.setZoom(8);
         }

         $scope.marker1.setIcon(/** @type {google.maps.Icon} */({
           url: $scope.place.icon,
           size: new google.maps.Size(71, 71),
           origin: new google.maps.Point(0, 0),
           anchor: new google.maps.Point(17, 34),
           scaledSize: new google.maps.Size(35, 35)
         }));

         $scope.marker1.setPosition($scope.place.geometry.location);
         $scope.marker1.setVisible(true);

         $scope.address = '';
         if ($scope.place.address_components) {
            $scope.address = [
             ($scope.place.address_components[0] && $scope.place.address_components[0].short_name || ''),
             ($scope.place.address_components[1] && $scope.place.address_components[1].short_name || ''),
             ($scope.place.address_components[2] && $scope.place.address_components[2].short_name || '')
           ].join(' ');
         }

         $scope.infowindow.setContent('<div><strong>' + $scope.place.name + '</strong><br>' + $scope.address);
         $scope.infowindow.open($scope.map, $scope.marker1);

      })


      for (let i = 0; i < $scope.location.length; i++){
        $scope.latLng = new google.maps.LatLng($scope.location[i].gps[0], $scope.location[i].gps[1]);
        $scope.marker = new google.maps.Marker({
          position: $scope.latLng,
          map: $scope.map,
          icon: $scope.icon
        });
        $scope.marker.info = $scope.location[i];
        $scope.marker.addListener('click', function() {
          $scope.station = this.info;
          $scope.map.setZoom(8);
          if($('.info-pane').is(':hidden')) {
            $('.info-pane').show();
          }
          $scope.latLng = new google.maps.LatLng(this.info.gps[0], this.info.gps[1])
          $scope.map.setCenter($scope.latLng);
          $scope.$apply();
        })
      }
    }

    $scope.getChargers();
})
