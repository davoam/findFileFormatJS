var fff = (function() {
  "use strict";

  var types = {
    "1196314761": "png",
    "944130375": "gif",
    "-520103681": "jpg",
    "1178882085": "pdf"
  };

  var fff = {
    successHandler: null,
    errorHandler: null,
    find: function(file, successHandler, errorHandler) {
        if (!(file instanceof File)) {
            console.error("the first argument in detect function should be instance of File");
            return false;
        }  

        var fr = new FileReader();
        var self = this;
        self.successHandler = successHandler; 
        self.errorHandler = errorHandler; 

        fr.onload = function(e) {
            var buffer = e.currentTarget.result;
            var int32View = new Int32Array(buffer);
            var format = types[int32View[0]];
            
            if (self.successHandler && format) {
              self.successHandler(format);
            }
            
            if (self.errorHandler && !format) {
              self.errorHandler();
            }
        }

        fr.readAsArrayBuffer(file.slice(0, 4))
        }
    }

    return fff;

})();