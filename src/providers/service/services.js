(function(){
	"use strict";
 
	angular.module('starter.controllers').value("Config",{
 //getUrl:"http://localhost/ineb/",
 getUrl:"http://www.inebmed.com.br/",
 getUrl2:"http://www.inebmed.com.br/api/"
		
	})

	

	angular.module('starter.controllers').service("Data", function($http, Config){

    this.loginData = function(credential){
      return $http({
        method: "POST",
        url: Config.getUrl2 + "apiLogin.php",
        data: credential,
        headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
      });
    };


    this.getData = function(params){
      return $http({
        method: "POST",
        url: Config.getUrl2 + "apiRecupera.php",
        data: params,
        headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
      });
    };

		

this.getUnidades = function(params){

			return  $http({

          method:"POST",
          url: Config.getUrl+"getUnidades.php",
          data : params,
          headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }

      
      })

		};


    this.setAgenda = function(dados){
      return $http({
        method: "POST",
        url: "http://inebmed.com.br/preagendamento/setapp",
        data: dados,
        headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
      });
    };


    this.getDicas = function(params){

      return  $http({

          method:"POST",
          url: Config.getUrl+"noticia/getappdicas",
          data : params,
          headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }

      
      })

    };
     this.getDicasOne = function(params){

      return  $http({

          method:"POST",
          url: Config.getUrl+"noticia/getappid",
          data : params,
          headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }

      
      })

    };


		this.getUser = function(params){

			return  $http({

          method:"POST",
          url: Config.getUrl+"getUser.php",
          data : params,
          headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }

      
      })

		};
	this.getNews = function(){

      return  $http({

          method:"POST",
          url: Config.getUrl+"noticia/getappnews",
         
          headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }

      
      })

    };
      this.getNewsOne = function(params){

      return  $http({

          method:"POST",
          url: Config.getUrl+"noticia/getappid",
          data : params,
          headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }

      
      })

    };

	
	});
})();