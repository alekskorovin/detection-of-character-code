(function() {
    
    var SymbolsController = function ($scope) {
        $scope.field = $scope.field || { input: '' };
        $scope.asciiFilterOn = $scope.asciiFilterOn || false;
        
        $scope.asciiFilter = function(symbol) {
            var showOnlyNotAsciiSymbols = $scope.showOnlyNotAsciiSymbols || false;
            
            if(showOnlyNotAsciiSymbols) {
                if (symbol.isAscii !== showOnlyNotAsciiSymbols) {
                    return symbol;
                }
             } else {
                 return symbol;
             }
        };
    };
    
    SymbolsController.$inject = ['$scope'];

    angular.module('customersApp')
      .controller('SymbolsController', SymbolsController);
    
}());