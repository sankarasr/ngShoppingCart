(function () {
'use strict';
//App, controller and service
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//To Buy list controller and its functions
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;
  toBuyCtrl.showItems = function(){
    return ShoppingListCheckOffService.getToBuy();
  };

  toBuyCtrl.buyItem     = function (itemName){
    ShoppingListCheckOffService.buyItem(itemName);
    };
}

//Already bought list controller and its functions
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;
  boughtCtrl.showItems = function(){
      return ShoppingListCheckOffService.getBought();
    };
}

//Service
function ShoppingListCheckOffService(){

    var service = this;

     var items =[{
                         name: "Milk",
                         type: "cartons",
                         quantity: "2",
                         bought: "false"
                       },
                       {
                         name: "Donuts",
                         type: "boxes",
                         quantity: "2",
                         bought: "false"
                       },
                       {
                         name: "Cookies",
                         type: "bags",
                         quantity: "3",
                         bought: "false"
                       },
                       {
                         name: "Chocolate",
                         type: "bars",
                         quantity: "5",
                         bought: "false"
                       }
                       ];


      service.buyItem = function (itemName){
        var idx = items.findIndex(function (el){
            return el.name == itemName;
        });
        items[idx].bought = "true";
      };


      service.getToBuy = function (){
        return items.filter(function (el){
                if(el.bought == "false"){
                    return el;
                }
            });
      };

      service.getBought = function (){
        return items.filter(function (el){
                if(el.bought == "true"){
                    return el;
                }
            });
      };
};

})();