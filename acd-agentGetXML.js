/**
 * Created by chenpeiwen on 2019/3/24.
 * 动态获取坐席信息
 */
var axios = require("axios")
var instance = axios.create({
    address: '10.0.33.96',
    port:'8110',
    timeout: 1000,
    headers: {'Content-Type': 'text/xml'}
});

console.log("init")

var Android = 2;
var Ios = 3;

axios.post('http://10.0.33.96:8110/RPC2', '<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\n' +
    '<methodCall>\n' +
    '\t<methodName>get</methodName>\n' +
    '\t<params>\n' +
    '\t\t<param>\n' +
    '\t\t\t<value><struct>\n' +
    '\t\t\t\t<member>\n' +
    '\t\t\t\t\t<name>object-class</name><value><string>acd-agent</string></value>\n' +
    '\t\t\t\t</member>\n' +
    '\t\t\t</struct></value>\n' +
    '\t\t</param>\n' +
    '\t</params>\n' +
    '</methodCall>')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
