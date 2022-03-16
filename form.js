  //  calender header
  var date = new Date()
  var mon = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGEST", "SEPTEMPER", "OCTOBER", "NAVEMBER", "DECEMBER"];
  var dateMonth = date.getMonth();
  var dateYear = date.getFullYear();
  var dateDate = date.getDate();
  var  monText= mon[dateMonth];

  var presentMonth = document.getElementById("month");
  presentMonth.innerHTML = monText;

  var camma = document.getElementById("camma");
  camma.innerHTML = ",";

  var presentYear = document.getElementById("year");
  presentYear.innerHTML = dateYear;

  var dropDown = document.getElementById("sel");
  dropDown.setAttribute("style", "background-color :rgb(101, 101, 218) ;color:white; font-size : 15px;")
  dropDown.hidden = true;

  var downArrow = document.getElementById("icon");
  downArrow.onclick = function(){
      dropDown.hidden = false;
      presentYear.hidden =true;
      downArrow.hidden = true;
  }

  // left Arrow
  var leftArrow = document.getElementById("left-arrow");
  leftArrow.onclick = function(){
      var left = mon.indexOf(presentMonth.textContent);
      console.log(left);
      if(left==0){
          presentMonth.innerHTML = mon[11];
          presentYear.innerHTML = (--dateYear);
      }
      else{
          presentMonth.innerHTML = mon[left-1];
      }
      for(let i=0; i<=30;i++){
          var tableData = document.getElementsByTagName("td")[i];
          if(presentYear.textContent !== date.getFullYear()){
              tableData.setAttribute("style","color:black; border: 2px solid #ccc;");
              tableData.disabled = false;
              tableData.addEventListener('click',fun);
          } 
      }
      dis();
  }


  // Right Arrow
  var rightArrow = document.getElementById("right-arrow");
  rightArrow.onclick = function(){
    var left = mon.indexOf(presentMonth.textContent);
    if(left==11){
      if(presentMonth.textContent == "DECEMBER" && presentYear.textContent < date.getFullYear()){
          presentYear.innerHTML = (++dateYear);
      }
      presentMonth.innerHTML = mon[0];       
    }
    else{
      presentMonth.innerHTML = mon[left+1];
    }
    for(let i=0; i<=30;i++){
      var tableData = document.getElementsByTagName("td")[i];
      if(mon.indexOf(presentMonth.textContent) <= date.getMonth() && presentYear.textContent== date.getFullYear()){
          tableData.setAttribute("style","color:black; border: 2px solid #ccc;");
      } 
    }
    dis();
  }


  // onclick function
  function fun(){
      for(let i =0; i<=30; i++){
        var clickClass = document.getElementsByClassName("num")[i];
        if(this){
          this.setAttribute("style","background-color:rgb(101, 101, 218); color:white; border-radius:50px; border: 5px solid #ccc;");
        }
        clickClass.removeAttribute("style","background-color:rgb(101, 101, 218); color:white; border-radius:50px; border: 2px solid #ccc;");
      }
      dis();
  }



  var one = document.getElementById("one").addEventListener("click",fun);
  var two = document.getElementById("two").addEventListener("click",fun);
  var three =  document.getElementById("three").addEventListener("click",fun);
  var four =  document.getElementById("four").addEventListener("click",fun);
  var five =  document.getElementById("five").addEventListener("click",fun);
  var six =  document.getElementById("six").addEventListener("click",fun);
  var seven =  document.getElementById("seven").addEventListener("click",fun);
  var eight =  document.getElementById("eight").addEventListener("click",fun);
  var nine =  document.getElementById("nine").addEventListener("click",fun);
  var one_zero =  document.getElementById("one-zero").addEventListener("click",fun);
  var one_one =  document.getElementById("one-one").addEventListener("click",fun);
  var one_two =  document.getElementById("one-two").addEventListener("click",fun);
  var one_three =  document.getElementById("one-three").addEventListener("click",fun);
  var one_four =  document.getElementById("one-four").addEventListener("click",fun);
  var one_five =  document.getElementById("one-five").addEventListener("click",fun);
  var one_six =  document.getElementById("one-six").addEventListener("click",fun);
  var one_seven =  document.getElementById("one-seven").addEventListener("click",fun);
  var one_eight =  document.getElementById("one-eight").addEventListener("click",fun);
  var one_nine =  document.getElementById("one-nine").addEventListener("click",fun);
  var two_zero = document.getElementById("two-zero").addEventListener("click",fun);
  var two_one = document.getElementById("two-one").addEventListener("click",fun);
  var two_two = document.getElementById("two-two").addEventListener("click",fun);
  var two_three = document.getElementById("two-three").addEventListener("click",fun);
  var two_four = document.getElementById("two-four").addEventListener("click",fun);
  var two_five = document.getElementById("two-five").addEventListener("click",fun);
  var two_six = document.getElementById("two-six").addEventListener("click",fun);
  var two_seven = document.getElementById("two-seven").addEventListener("click",fun);
  var two_eight = document.getElementById("two-eight").addEventListener("click",fun);
  var two_nine = document.getElementById("two-nine").addEventListener("click",fun);
  var three_zero = document.getElementById("three-zero").addEventListener("click",fun);
  var three_one = document.getElementById("three-one").addEventListener("click",fun);


  // main function
  function dis(){
      for( let i=0; i<=30; i++){
          var tableData = document.getElementsByTagName("td")[i];
          if(tableData.textContent > date.getDate() && presentMonth.textContent == mon[date.getMonth()] && (presentYear.textContent == date.getFullYear() || dropDown.value == date.getFullYear())){
              var fullYear = document.getElementById("fullYear").onclick = function (){
                  dropDown.hidden = false;
                  presentYear.innerHTML ="";  
                  downArrow.hidden =true;
                  tableData.removeEventListener('click',fun);    
              }

              tableData.setAttribute("style","background-color:#f0efef; color:black; border-radius:50px; border: 2px solid #ccc;");
              tableData.disabled = true;
              tableData.removeEventListener('click',fun);
          }
          else if(mon.indexOf(presentMonth.textContent) > date.getMonth() && (presentYear.textContent >= date.getFullYear() || dropDown.value >= date.getFullYear())){
              var fullYear = document.getElementById("fullYear").onclick = function (){
                  dropDown.hidden = false;
                  presentYear.innerHTML ="";  
                  downArrow.hidden =true; 
                  
              }
              tableData.setAttribute("style","background-color:#f0efef; color:black; border-radius:50px; border: 2px solid #ccc;");
              tableData.removeEventListener('click',fun);  
              tableData.disabled = true;
              
          }
          else{
              tableData.disabled = false;
              tableData.addEventListener('click',fun);
          }
      }
  }


// calender value 
  var calender = document.getElementById("calender")
  calender.hidden =true;
  var myDate = document.getElementById("myDate");
  myDate.onclick = function(){
    calender.hidden =false;
    for(let i =0;i<=30;i++){
      var clickClass = document.getElementsByClassName("num")[i];
      clickClass.onclick = function(){
        var text = this.textContent;
        var m = mon.indexOf(presentMonth.textContent)+1;
        if(text < 10){
          text = "0" + this.textContent;
        }

        if(m < 10){
          m = "0" + m;
        }
        if(text > date.getDate() && mon.indexOf(presentMonth.textContent) == date.getMonth() && (presentYear.textContent == date.getFullYear() || dropDown.value == date.getFullYear())){
          myDate.value ="";
        }
        else if(mon.indexOf(presentMonth.textContent) > date.getMonth() && (presentYear.textContent >= date.getFullYear() || dropDown.value >= date.getFullYear())){
          myDate.value ="";
        }
        else{
          myDate.value =text +"/"+ m +"/"+presentYear.textContent;
          document.getElementById("bt").onclick = function (){
          document.getElementById("down").onclick = function (){
            myDate.value =text +"/"+ m +"/"+dropDown.value;
          }
          document.getElementById("calender").hidden = true;
        }        
      }
    }
  }       
}
