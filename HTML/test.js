// create a request object
var request  = new XMLHttpRequest();

// Open the request
request.open('GET','https://restcountries.com/v2/all',true);

//send the request 
request.send();

//load the response
request.onload = function () {
    var respdata = JSON.parse(this.response);
    var result=[];
    respdata.filter(item =>{
        result+="Country Name : "+item.name+" "+ "CallingCode : "+item.callingCodes+"\n"
    });
    console.log(result);

}