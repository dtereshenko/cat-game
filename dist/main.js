(()=>{"use strict";const e=document.querySelector.bind(document),n=document.querySelectorAll.bind(document),t=new Audio("./src/sounds/meow.mp3"),d=new Audio("./src/sounds/catHiss.mp3"),o=new Audio("./src/sounds/catGetLive.mp3");let r=0,a=2,i=null;document.addEventListener("DOMContentLoaded",(()=>{console.log("Loaded"),c(),l(),u("🐱"),s(),g()}));const s=()=>{const e=n("td");for(let n=0;n<10;n++){const n=Math.round(100*Math.random());console.log("dogPosition",n),e[n].dataset.dog="yes"}},c=()=>{e("#lives-count").innerText=new Array(a).fill("❤️").join("")},l=()=>{i=document.createElement("table");const e=`<tr>${new Array(10).fill("<td>🐭</td>").join("")}</tr>`;i.innerHTML=new Array(10).fill(e).join(""),document.body.append(i)},u=n=>{e("td").innerHTML=`<div id="drag-me" draggable="true">${n}</div>`},m=e=>e.preventDefault(),p=n=>{const i=n.target;if("yes"===i.dataset.dog)return(()=>{const n=e("#drag-me");e("td").append(n)})(),i.innerText="🐶",a--,c(),d.play(),void(0===a&&(e("#game-over").style.display="block",e("#drag-me").remove()));i.innerText&&(i.innerText="",r++,r%10!=0&&t.play(),(n=>{e("#mice-count").innerText=n})(r),r>0&&r%10==0&&(a++,c(),o.play())),i.append(e("#drag-me"))},g=()=>{i.addEventListener("dragover",m),i.addEventListener("drop",p)}})();