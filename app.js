
document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
	document.documentElement.style.fontSize = innerWidth/16 + 'px';
}

	$('#index_footer a').on('touchstart',function(){
		$('#index_footer a').css('color','#838383');
		$('#index_footer span').css('color','#838383');
		$(this).css('color','red');
		$(this).find('span').css('color','red');
	})


var app= angular.module('myApp',['ngRoute','angularCSS'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'./views/discount.html',
                controller:'discountCtrl'
            })
            .when('/family',{
                templateUrl:'./views/family.html',
                controller:'familyCtrl'
            })
            .when('/global',{
                templateUrl:'./views/global.html',
                controller:'globalCtrl'
            })
            .when('/car',{
                templateUrl:'./views/car.html',
                controller:'carCtrl'
            })
            .when('/mine',{
                templateUrl:'./views/mine.html',
                controller:'mineCtrl'
            })
            .otherwise({redirectTo:'/'});
    }]);
