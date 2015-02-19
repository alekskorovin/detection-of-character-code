/*global angular */
(function() {
    
    var SelectOnClick = function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function () {
                    this.select();
                });
            }
        };
        
    };
    
    SelectOnClick.$inject = [];

    angular.module('customersApp')
        .directive('selectOnClick', SelectOnClick);
    
}());