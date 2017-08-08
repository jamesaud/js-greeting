
(function(global, $){
    "use strict";
    
     var Greetr = function(firstName, lastName, language){
         return new Greetr.init(firstName, lastName, language);
     }
     
     var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: "Hello",
        es: "Hola",
    }

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    }

    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion"
    }
    
    Greetr.prototype = {};

    Greetr.prototype = {        
        fullName: function(){
            return this.firstName + " " + this.lastName;    
        },
        
        validate: function() {
        if (supportedLangs.indexOf(this.language) === -1){
        throw "Invalid Language";
        };  
        },
        
        greeting: function(){
            return greetings[this.language] + " " + this.firstName + "!";
        },
        
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
    
        greet: function(formal){
            var msg;
            
            if (formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            
            if (console){
                console.log(msg);
            }
            return this;
        },
        
        setLang: function(lang){
            this.language = lang;
            
            this.validate();
        },
        
        HTMLGreeting: function(selector, formal){
            if (!$) {
                throw "jQuery not loaded";
            }
            
            if (!selector) {
                throw "missing selector";
            }
            
            var msg
            
            if (formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
        }
            
             $(selector).html(msg);
            
            return this;
    }
    }

     
     Greetr.init = function(firstName, lastName, language){
         
         var self = this;
         this.firstName = firstName || "";
         this.lastName = lastName || "";
         this.language = language || "en";
     };
    
     
    Greetr.init.prototype = Greetr.prototype;
    
    global.G$ = global.Greetr = Greetr;
     
})(window, jQuery);