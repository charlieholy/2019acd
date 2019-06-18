/**
 * Created by chenpeiwen on 2019/3/24.
 * 动态获取队列配置
 */
var axios = require("axios")
var instance = axios.create({
    address: '10.0.33.96',
    port:'8110',
    timeout: 1000,
    headers: {'Content-Type': 'text/xml'}
});



axios.post('http://10.0.33.96:8110/RPC2', '<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\n' +
    '<methodCall>\n' +
    '\t<methodName>get</methodName>\n' +
    '\t<params>\n' +
    '\t\t<param>\n' +
    '\t\t\t<value><struct>\n' +
    '\t\t\t\t<member>\n' +
    '\t\t\t\t\t<name>object-class</name><value><string>acd-queue</string></value>\n' +
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
