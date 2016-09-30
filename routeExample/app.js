/* Angular version 1.0.7 has to be used other wise error may occur with angular compatibility issue */

var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
                function($routeProvider) {
                    $routeProvider.
                        when('/ShowOrder/:orderId', {templateUrl: 'show_order.html', controller: 'ShowOrderController'});
}]);


sampleApp.controller('ShowOrderController', function($scope, $routeParams) {
    console.log($routeParams)
    $scope.order_id = $routeParams.orderId;
});

