(function(){
    "use strict";

    angular.module('Main',[
        //dependencies here
    ])

    .controller('MainController',function($scope){
        $scope.name = 'Carl'
        $scope.categories = ['Home','View','Update','Delete', 'Create'];
        $scope.sub_categories = [
            {id:1,name:'cat1',url:'#',category:'Create'},
            {id:2,name:'Cat2',url:'#',category:'Delete'},
            {id:3,name:'Cat3',url:'#',category:'Update'},
            {id:4,name:'Cat3',url:'#',category:'Update'},
            {id:5,name:'Cat4',url:'#',category:'Create'}
        ];

        $scope.currentCategory = 'Create';

        $scope.setCurrentCategory = function(category){
            $scope.currentCategory = category;
        }

        $scope.isCurrentCategory = function(category){
            return $scope.currentCategory === category;
        }
    });

})();



