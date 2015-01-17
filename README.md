# FindFileFormatJs
Library helps to determine the format of a file, even if the file without extenstion.
Supported extensions: jpg, gif, png
#Usage
To use library you need to add findFileFormat.js to your project
#Simple example

```html
<html>
<head>
    <meta charset="UTF-8">
</head>
    <body>
    <input type="file" onchange="processFile(this)">
    <script type="text/javascript" src="findFileFormat.js"></script>
    <script>
       function processFile(e) {
        fff.find(e.files[0],
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
