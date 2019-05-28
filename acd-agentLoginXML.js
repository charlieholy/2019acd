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
    '            <name>skills</name>\n' +
    '            <value/>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>agent-sign-type</name>\n' +
    '            <value>sign-in</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>agentType</name>\n' +
    '            <value>\n' +
    '              <i4>0</i4>\n' +
    '            </value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>object-class</name>\n' +
    '            <value>acd-agent</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>name</name>\n' +
    '            <value>座席 1001</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>sign-queue-list</name>\n' +
    '            <value>sip:400_organ2@acd.u3c.com</value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>always-available</name>\n' +
    '            <value>\n' +
    '              <i4>0</i4>\n' +
    '            </value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>monitor-presence</name>\n' +
    '            <value>\n' +
    '              <i4>0</i4>\n' +
    '            </value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>position</name>\n' +
    '            <value>\n' +
    '              <i4>0</i4>\n' +
    '            </value>\n' +
    '          </member>\n' +
    '          <member>\n' +
    '            <name>uri</name>\n' +
    '            <value>sip:1001@u3c.com</value>\n' +
    '          </member>\n' +
    '        </struct>\n' +
    '      </value>\n' +
    '    </param>\n' +
    '  </params>\n' +
    '</methodCall>\n'

axios.post('http://10.0.33.96:8110/RPC2',data)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
