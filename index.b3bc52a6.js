var e,t=0,r=document.querySelector(".container"),n=document.getElementById("start"),o=!1;function i(){e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],document.getElementById("field").innerHTML="";for(var t=0;t<4;t++)for(var r=0;r<4;r++){var n=document.createElement("div");n.id=t.toString()+"-"+r.toString(),a(n,e[t][r]),document.getElementById("field").append(n)}d(),d()}function a(e,t){e.innerText="",e.classList.value="",e.classList.add("field-cell"),t>0&&(e.innerText=t.toString(),t<=2048&&(e.classList.add("field-cell--"+t.toString()),2048===t&&r.querySelector(".message-win").classList.remove("hidden")))}function s(e){return e.filter(function(e){return 0!==e})}function c(e){for(var r=s(e),n=0;n<r.length-1;n++)r[n]===r[n+1]&&(r[n]*=2,r[n+1]=0,t+=r[n]);for(r=s(r);r.length<4;)r.push(0);return r}function d(){if(l())for(var t=!1,r=.9>Math.random()?2:4;!t;){var n=Math.floor(4*Math.random()),o=Math.floor(4*Math.random());if(0===e[n][o]){e[n][o]=r;var i=document.getElementById(n.toString()+"-"+o.toString());i.innerText=r.toString(),i.classList.add("field-cell--"+r),t=!0}}}function l(){for(var t=0;t<4;t++)for(var r=0;r<4;r++)if(0===e[t][r])return!0;return!1}n.addEventListener("click",function(){n.classList.contains("start")?(n.classList.remove("start"),n.classList.add("restart"),n.innerText="Restart",o||(r.querySelector(".message-start").classList.add("hidden"),o=!0,i())):n.classList.contains("restart")&&(function(){n.innerText="Start",t=0,document.getElementById("score").innerText=t,e=[,,,,].fill(0).map(function(){return[,,,,].fill(0)});for(var r=0;r<4;r++)for(var o=0;o<4;o++)a(document.getElementById(r.toString()+"-"+o.toString()),0)}(),n.innerText="Restart",r.querySelector(".message-lose").classList.add("hidden"),o=!0,i())}),document.addEventListener("keyup",function(n){if(!l()&&!function(){for(var t=0;t<4;t++)for(var r=0;r<4;r++)if(t>0&&e[t][r]===e[t-1][r]||t<3&&e[t][r]===e[t+1][r]||r>0&&e[t][r]===e[t][r-1]||r<3&&e[t][r]===e[t][r+1])return!0;return!1}()){r.querySelector(".message-lose").classList.remove("hidden");return}switch(n.code){case"ArrowLeft":(function(){for(var t=0;t<4;t++){var r=e[t];r=c(r),e[t]=r;for(var n=0;n<4;n++)a(document.getElementById(t.toString()+"-"+n.toString()),e[t][n])}})(),d();break;case"ArrowRight":(function(){for(var t=0;t<4;t++){var r=e[t];r.reverse(),r=c(r),e[t]=r.reverse();for(var n=0;n<4;n++)a(document.getElementById(t.toString()+"-"+n.toString()),e[t][n])}})(),d();break;case"ArrowUp":(function(){for(var t=0;t<4;t++){var r=[e[0][t],e[1][t],e[2][t],e[3][t]];r=c(r);for(var n=0;n<4;n++)e[n][t]=r[n],a(document.getElementById(n.toString()+"-"+t.toString()),e[n][t])}})(),d();break;case"ArrowDown":(function(){for(var t=0;t<4;t++){var r=[e[0][t],e[1][t],e[2][t],e[3][t]];r.reverse(),(r=c(r)).reverse();for(var n=0;n<4;n++)e[n][t]=r[n],a(document.getElementById(n.toString()+"-"+t.toString()),e[n][t])}})(),d()}document.getElementById("score").innerText=t});
//# sourceMappingURL=index.b3bc52a6.js.map
