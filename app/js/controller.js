//prodsController
var prodCtrl = navsProdCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.$back = function() { 
        window.history.back();
    };
}

var prodCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    //zepto
    Zepto(function($){
        $(".more_btn a").click(function(){
            $(".priceZone, .shopCart_btn, .prodShow").toggleClass("hidein");
            $(".prod_specNavs").toggleClass("active");
            $(this).toggle($(this).text("-more"));
        });
    });
}

//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1];
    $scope.counter = 0;

    var update = function() {
        $scope.counter++;
        Data[0].price = prods.price;
        Data[0].piece = prods.piece;
        alert($scope.counter);
    };
}

var bonusCtrl = function($scope, Data ,$stateParams){ 
    Zepto(function($){
        $(window).resize(function(){
            sizefix();
            bonusPos();
        });
        sizefix();
        //bonusPos();
        function sizefix(){
            var _h = $(window).height(),
                _navH = $(".navs").height();
            $(".main").height(_h - _navH - 20);
        }

        function bonusPos(){
            var _bonusFrame_h = $(".bonusList").height(),
                _bonusLists_h = $(".bonusList > ul").height(),
                _bonusMargin = ((_bonusLists_h - _bonusFrame_h)/2) - 60;

            $(".bonusList > ul").css("-webkit-transform","translate3d(0,-"+_bonusMargin+"px,0)");
        }

    });
}

var gameCtrl = function($scope, Data ,$stateParams){ 
    Zepto(function($){
        sizefix();
        $(window).resize(function(){sizefix();});



        var $value = 1,
            _deg = ($value*45)*-1;
        $.fn.addKeyframe([{
            name: "board-main-run",
            "from":$.keyframe.browserCode()+"transform:rotate(0deg)",
            "to":$.keyframe.browserCode()+"transform:rotate("+(1800+_deg)+"deg)",
        }]);


        $("a.start").click(function(){
            $(".main-animate").find("div.linear").removeClass("lienar");
            $(".main-animate").find(".lightBall").addClass("lightBall-run");
            $(".main-animate").find(".board_main").playKeyframe({
                name: 'board-main-run',
                timingFunction:'ease',
                repeat:'1',
                duration:'8000',
                direction:'normal',
                fillMode: 'forwards',
                delay: 0
            });
            $(".main-animate").find(".blackCircle").addClass("blackCircle-run");
        });

        function sizefix(){
            var _h = $(window).height(),
                _navH = $(".navs").height();
            $(".main").height(_h - _navH - 20);
        }
    });
}

umallApp.controller('shopCtrl',shopCtrl);
umallApp.controller('prodCtrl',prodCtrl);
umallApp.controller('bonusCtrl',bonusCtrl);
umallApp.controller('gameCtrl',gameCtrl);
