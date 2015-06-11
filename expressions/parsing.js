var app = angular.module('parseApp', []);
app.controller('MyController', function($scope, $parse) {

    $scope.person = {
        name: 'vzip'
    };

    $scope.$watch('expr', function(newVal, oldVal, scope) {
        if (newVal != oldVal) {
            var parseFun = $parse(newVal);
            $scope.parsedValue = parseFun(scope);
        }
    });
});