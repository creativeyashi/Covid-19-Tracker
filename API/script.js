var app = angular.module('myapp', [])
const url = 'https://covid19.mathdro.id/api'
app.controller('mycontroller', function($scope, $http) {
    $http.get(url).then(function(response) {

        $scope.alldata = response.data
    }, function(err) {
        console.log(err)
    })

    $scope.countrywise = function() {
        country = $scope.country
        $http.get(url + `/countries/` + country).then(function(response) {
            console.log(response.data)
            $scope.alldataCountryWise = response.data
        }, function(err) {
            console.log(err)
        })

    }


})