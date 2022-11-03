const http = require('http')


console.log("Starting Integration Test Case Execution");
console.log(" ############# TEST CASE 1 #############");
testcase1();


function testcase1(){
    console.log("Executing test case 1 - To check for fixtures scrolling")
    let error;
    var url = "http://localhost:3000/v1/fixtures/list?previous_id=5";
      
      http.request(url, function(res,callback) {
        console.log('STATUS: ' + res.statusCode);
        if(res.statusCode !== 200) {
            console.log("Test case failed ",res)
            error = "Test case failed"
            callback(error)
        }
        callback("Test case Success")
        
}).end()
}

