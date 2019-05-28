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

var data = '<?xml version="1.0" encoding="utf-8"?>\n' +
    '\n' +
    '<methodCall xmlns:ex="http://ws.apache.org/xmlrpc/namespaces/extensions">\n' +
    '  <methodName>action</methodName>\n' +
    '  <params>\n' +
    '    <param>\n' +
    '      <value>\n' +
    '        <struct>\n' +
    '          <member>\n' +
    '            <name>call-priority</name>\n' +
    '            <value>3</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>skill-name</name>\n' +
    '            <value>666</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>from-call-uri</name>\n' +
    '            <value>sip:13567890001@10.0.33.96</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>task-type</name>\n' +
    '            <value>VOICE</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>object-class</name>\n' +
    '            <value>acd-line</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>app-ssn-id</name>\n' +
    '            <value>10.0.33.96_3667e039-7709-41c0-8e4e-307a163c0f9b</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>media-type</name>\n' +
    '            <value>1</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>uri</name>\n' +
    '            <value>sip:400_organ2@acd.u3c.com</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>get-idle-agent</name>\n' +
    '            <value>\n' +
    '              <i4>0</i4>\n' +
    '            </value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>http-request-url</name>\n' +
    '            <value>http://10.0.33.96:8090/com.hundsun.u3c.acdcc/get_agent</value>\n' +
    '          </member>\n' +
    '        </struct>\n' +
    '      </value>\n' +
    '    </param>\n' +
    '  </params>\n' +
    '</methodCall>\n'

axios.post('http://10.0.33.96:8110/RPC2', data)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
