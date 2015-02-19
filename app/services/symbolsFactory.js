/*global angular */
(function() {
    var symbolsFactory = function() {
    
        var factory = {};
        
        factory.checkCodeOf = function(character) {
            var code = character.charCodeAt(0);
            return code;
        };
        
        factory.isAscii = function (character) {
            var ascii = /^[ -~]+$/;
            var isAscii = false;
            if(ascii.test(character)) {
                isAscii = true;
            }
            return isAscii;
        };
        
        return factory;
    };

    symbolsFactory.$inject = [];

    angular.module('customersApp').factory('symbolsFactory', symbolsFactory);

}());