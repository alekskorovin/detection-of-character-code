/*global angular */
(function() {
    var SymbolsDirective = function(symbolsFactory) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.ngModel,
                    function(characters) {
                        scope.letters = characters.split('');
                        scope.elements = [];
                        angular.forEach(
                            scope.letters,
                            function(character, id) {
                                var element = {
                                    id: id,
                                    letter: character,
                                    code: symbolsFactory.checkCodeOf(character),
                                    isAscii: symbolsFactory.isAscii(character)
                                };
                                scope.elements.push(element);
                            }
                        );

                        scope.symbols = scope.elements;
                    }
                );
            }
        };
    };
    
    SymbolsDirective.$inject = ['symbolsFactory'];

    angular.module('customersApp')
      .directive('mySymbols', SymbolsDirective);
    
}());