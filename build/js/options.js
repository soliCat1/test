const options=document.querySelectorAll(".option");let delay=1e3;const initOptions=()=>{options.forEach((t=>{setTimeout((()=>t.style.opacity=1),delay),delay+=1e3}))};export{initOptions};