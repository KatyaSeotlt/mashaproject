/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};
function checkResult(){

var inputResult = document.getElementById('result'),
result = Number(inputResult.value),
p1 = Number(document.getElementById('p1').innerText),
p2 = Number(document.getElementById('p2').innerText),
znak = document.getElementById('znak').innerText;
if(znak=="+"){
 var res = p1+p2;
}
if(znak=="-"){
 var res = p1-p2; 
}
var newznak=["+", "-"];
check(res, result);
var randomZnak= randomInteger(0,1);
var maxp2val=9;
p1 = randomInteger(0, 9);
if(randomZnak=="1"){
var maxp2val=p1;
}
document.getElementById('znak').innerText=newznak[randomZnak];
document.getElementById('p1').innerText=p1;
document.getElementById('p2').innerText=randomInteger(0, maxp2val);
inputResult.value='';
}
function check(res, result){
 if(res==result){
 goodResult();
 }else{
 badResult(); 
 }
}
function goodResult(){
 var girl = document.getElementById('girl');
 var margin = Number(girl.style.marginLeft.slice(0, -2));
 margin=margin+32; 
 if(margin>300){
 alert('Ты выйграл');
 margin=0;
 }
 girl.style.marginLeft=margin+'px'; 
}
function badResult(){
 var girl = document.getElementById('girl');
 var margin = Number(girl.style.marginLeft.slice(0, -2));
 margin=margin-32; 
 if(margin>0){
 girl.style.marginLeft=margin+'px'; 
 }
 

}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }