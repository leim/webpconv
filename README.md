# webpconv
a [node.js](http://nodejs.org) module to convert webp image to other format and vice versa.

  [webpconv](https://www.npmjs.com/package/webpconv)

## Installation
```bash
  $ npm install webpconv -save
```

## How to use
```js
  //require the module
  var webpconv = require('webpconv');
  
  //input webp and output other format
  webpconv.dwebp("input.webp", "output.jpg", function(err, resp){
      if(err){
          throw(err);
      }else{
          console.log(JSON.stringify(resp));
      }
  });
 
  //input other format and output webp, you must specify the quality of the output webp image
  webpconv.cwebp("input.png", "output.webp", "75", function(err, resp){
      if(err){
          throw(err);
      }else{
          console.log(JSON.stringify(resp));
      }
  });

```

## License
    [MIT] (LICENSE)