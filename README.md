# fileExtDeterminer.js
Library helps to determine the extension of a file. Supported extensions: jpg, gif, bmp, png
#Usage
To use library you need to add fileExtDeterminer.js to your project
#Simple example

```html
<html>
<head>
    <meta charset="UTF-8">
</head>
    <body>
    <input type="file" onchange="processFile(this)">
    <script type="text/javascript" src="fileExtDeterminer.min.js"></script>
    <script>
       function processFile(e) {
        fileExtDeterminer.detect(e.files[0],
            function(type) {
                alert("The type of file is " + type);
            },
            function() {
                alert("can not determine file type")
            }
        )
       } 
    </script>   
    </body>
</html>
```
