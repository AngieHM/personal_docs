var cot = require('cot-lib');
 
var credentials = {username: "idlab-a-student", password: "EythsQfk54nCaX6pnnd8H3zb"};
var client = new cot.CotClient('https://cot-api-dev.tengu.io/', credentials);
//var hash = cot.Util.Geohash.encode(31.123456,15.321654);
//var id1 = "lora.70B3D58FF0032D3A";
//var id2 = "lora.70B3D58FF0032D46";
var ids =  ["lora.70B3D58FF0032D3A"
,"lora.70B3D58FF0032D46"
,"lora.70B3D58FF0032D4A"
,"lora.70B3D58FF0032D71"
,"lora.70B3D58FF0032D89"
,"lora.70B3D58FF0032E0B"
,"lora.70B3D58FF0032E24"
,"lora.70B3D58FF0032E3A"
,"lora.70B3D58FF0032E42"
,"lora.70B3D58FF0032E48"
,"lora.70B3D58FF0032E49"
,"lora.70B3D58FF0032E4D"
,"lora.70B3D58FF0032E55"
,"lora.70B3D58FF0032E5D"
,"lora.70B3D58FF0032E62"
,"lora.70B3D58FF0032E82"
,"lora.70B3D58FF0032E95"
,"lora.70B3D58FF0032EA2"]
var cityId = "antwerp_medium_detail"
var dataClient = client.withSources("lora.70B3D58FF0032D3A", "lora.70B3D58FF0032D46", "lora.70B3D58FF0032D4A", "lora.70B3D58FF0032D71", "lora.70B3D58FF0032D89",  );
var layerClient = client.withCityId(cityId);
var response = dataClient.getData("airquality.no2");
//console.log(response);

var response_data = layerClient.getLayer("airquality.no2");

console.log(response_data);

response.latest().subscribe(
    function(nextData) { 
        // handle nextData as its coming in, this handler will be called on every update with new data
        console.log(nextData)
    },
    function(error) {
        // do something when an error occurs
    },
    function() {
        // this handler will be called when the data streaming is complete and there is no more incoming data
    });
/*client.getCityIds().subscribe(
    function(nextData) { 
        // handle nextData as its coming in, this handler will be called on every update with new data
        console.log(nextData)
    },
    function(error) {
        // do something when an error occurs
    },
    function() {
        // this handler will be called when the data streaming is complete and there is no more incoming data
    }
);*/


