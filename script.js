


   let select = document.querySelector("select")
       numw = [`✓ Microsoft Copilot`,`✓ Chatgpt4`," plus !"]
       list1 = ['https://wa.me/18772241042?text=Hi+Copilot+(code%3ANUgMqQos)','']
       numt = ['✓ Spect ia bot',`✓ bad idea ia`,`✓ Chatgpt 4`,`✓ text to img`,`✓ img to text robot `,`✓ Wormgpt`,`✓ text to audio`,` plus !`]
       list2 = [`https://t.me/SPECTs_AI_bot`,`https://badidea.ai https://t.me/badideaaibot`,`https://t.me/ChatGPT2112_bot`,`https://t.me/imageToText_bot`,`https://t.me/imgtotextRobot`,`https://t.me/wormgptbuy_bot`,`https://t.me/FoxtuneBetaBot`]
       function number(){
       if(select.value=="WhatsApp"){
      document.querySelector("div").innerHTML=""
      for(i=0;i<numw.length;i++){
      h =  document.createElement("h6")
      h.append(document.createTextNode(`${numw[i]}`))
      a = document.createElement("a") 
      if(i==2){
      
      a.setAttribute("href",`https://api.whatsapp.com/send?text= welcome to our bot website : https://protocol-xxx.github.io/Bot/`)
      }
      else{
      
      a.setAttribute("href",`${list1[i]}`)
      }
      
      a.append(h)

      document.querySelector("div").append(a)
       
       }
       }
       else{
       document.querySelector("div").innerHTML=""

       for(i=0;i<numt.length;i++){
       h =  document.createElement("h6")
       h.append(document.createTextNode(`${numt[i]}`))
       a = document.createElement("a") 
       if(i==7){
       
       a.setAttribute("href",`https://api.whatsapp.com/send?text= welcome to our bot website : https://protocol-xxx.github.io/Bot/`)
       }
       else{
       
       a.setAttribute("href",`${list2[i]}`)
       }
       
       a.append(h)
       
       document.querySelector("div").append(a)
       
       }
       
       
       }
        
     document.querySelector("body").style.backgroundImage=`url('')`
      bare() 
       }
       
       setTimeout(number,3000)
       $(document).ready(() => {
       $.getJSON("https://api.ipify.org?format=json", function (data) {
       $("#p9").html(" Local IP : "+data.ip);
       });
       });
       function bare(){
       const styleSheet = document.styleSheets[0];
       const keyframes = `
       @keyframes myAnimation {
       0% { width: 10%; background-color: red; }
       10% { width: 18%; background-color:red; }
       25% { width: 25%; background-color: green; }
       50% { width: 50%; background-color: green; }
       75% { width: 75%; background-color: green; }
       80% { width: 80%; background-color: green; }
       90% { width: 90%; background-color: green; }
       100% { width: 100%; background-color: transparent; }
       }
       `;
       // التحقق من وجود التحريك مسبقًا، وإزالته إن وجد
       if (styleSheet.cssRules[styleSheet.cssRules.length - 1].name === "myAnimation") {
       styleSheet.deleteRule(styleSheet.cssRules.length - 1);
       }
       styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
       
       // تطبيق التحريك على العنصر
       const element = document.getElementById('hr0');
       element.style.animation = 'none'; // إعادة تعيين التحريك
       element.offsetWidth; // إعادة التشغيل
       element.style.animation = 'myAnimation 4s 1 1s';
       }
