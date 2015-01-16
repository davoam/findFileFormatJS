var fff = (function() {

  var types = {
    "1196314761": "png",
    "944130375": "gif",
    "544099650": "bmp",
    "-520103681": "jpg",
  }

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
          var type = types[int32View[0]];
          
          if (self.successHandler && type ) {
            self.successHandler(type);
          }
          if (self.errorHandler && !type) {
            self.errorHandler();
          }
        }
        fr.readAsArrayBuffer(file.slice(0, 4))
    }
  }

  return fff;

})();