
//possible query format 


// to get id of element clicked by user
let submitted_answer;
  //score function
  function score(clicked_id){
    submitted_answer=document.getElementById(clicked_id).innerHTML;
  }


// fetch info from trivia api
function submit(){
    fetch('https://opentdb.com/api.php?amount=10&category=9')
      .then(function(response) {
        return response.json();
      }).then(function(myJson) {
        //create variables;
           let questionArray=[];
           let correct_answer=[];
           let answers=[];
           let myData=myJson.results;
           

        // adding api data into varibles;   
           for (let i=0;i<myData.length;i++){
             questionArray.push(myData[i].question);
             correct_answer.push(myData[i].correct_answer);
             myData[i].incorrect_answers.push(myData[i].correct_answer);
             answers.push(myData[i].incorrect_answers);
           }

           //randamize the answers array
           function shuffleArray(array){
             for (let i=array.length-1;i>0;i--){
               const j=Math.floor(Math.random()*(i+1));
               [array[i],array[j]]=[array[j],array[i]];
             }
           }

           for (let i=0;i<answers.length;i++){
             shuffleArray(answers[i]);
           }

           //to check if it is randamized

           console.log(answers[0]);


           let page_number=0;
           let score_points=0;
           console.log(page_number);
           console.log(score_points);
         
        // initial page after user submits the request
        document.getElementById("question").innerHTML=questionArray[page_number];
        document.getElementById("a1").innerHTML=answers[page_number][0];
        document.getElementById("a2").innerHTML=answers[page_number][1];
        document.getElementById("a3").innerHTML=answers[page_number][2];
        document.getElementById("a4").innerHTML=answers[page_number][3];
      

      //function to turn pages when any answer is clicked
    
         let page=document.getElementsByClassName("button01");
       for(let i=0;i<page.length;i++){
             page[i].addEventListener('click',turnpage);}

       console.log(page);
            
     
           //add event handlers
           function turnpage(){
             
               if (submitted_answer===correct_answer[page_number]){
                 score_points+=100;
                 console.log(score_points);
               }

               if (page_number<9){
                 page_number++;
                  
                 document.getElementById("question").innerHTML=questionArray[page_number];
                 document.getElementById("a1").innerHTML=answers[page_number][0];
                 document.getElementById("a2").innerHTML=answers[page_number][1];
                 document.getElementById("a3").innerHTML=answers[page_number][2];
                 document.getElementById("a4").innerHTML=answers[page_number][3];
               }else{
                for (let i=0;i<page.length;i++){
                     page[i].style.visibility='hidden';}
                document.getElementById("question").style.visibility='hidden';
                  // document.getElementById("result").innerHTML=score_points;
        
                  if (score_points>800){
                    document.getElementById("result").innerHTML="You are awesome!"
                  }else if (score_points<200){
                    document.getElementById("result").innerHTML="Try one more time!"
                  }else{
                    document.getElementById("result").innerHTML="You are good!"
                  }
                }
           }
          });

    }
          