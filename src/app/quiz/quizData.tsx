
// const  DataOfQuiz=()=>{

const frontend_basic_quiz =[


// HTML
    
    [
                  
              {
                  question:"What does HTML stand for?",
                  options:[
                  
                      {id:0,ans:"Hyperlinks and Text Markup Language",isCorrect:false},
                      {id:1,ans:"Hyper Text Markup Language",isCorrect:true},
                      {id:2,ans:"Home Tool Markup Language",isCorrect:false},
                      {id:3,ans:"Hyper Tool Markup Language",isCorrect:false}
                      
                  ]
              }
              ,
              
              {
                  question:"Which HTML tag is used to define a hyperlink?",
                  options:[
                  
                      {id:0,ans:"<link>",isCorrect:false},
                      {id:1,ans:"<href>",isCorrect:false},
                      {id:2,ans:"<a>",isCorrect:true},
                      {id:3,ans:"<hyperlink>",isCorrect:false}
                      
                  ]
              },
              
              {
                  question:"What is the correct way to create a heading level 1 (h1) in HTML?",
                  options:[
                  
                      {id:0,ans:"<heading>",isCorrect:false},
                      {id:1,ans:"<h1>",isCorrect:true},
                      {id:2,ans:"<head>",isCorrect:false},
                      {id:3,ans:"<h>",isCorrect:false}
                      
                  ]
              } ,
                 
          
              ]
        ,


        // CSS
        [
            
            {
                question:"What does CSS stand for?",
                options:[
                
                    {id:0,ans:"Cascading Style Sheets",isCorrect:true},
                    {id:3,ans:"Creative Style Sheets",isCorrect:false},
                    {id:1,ans:"Computer Style Sheets",isCorrect:false},
                    {id:2,ans:"Colorful Style Sheets",isCorrect:false},
                    
                ]
            }
            ,
            
            {
                question:"How do you apply inline CSS to an HTML element?",
                options:[
                
                    {id:0,ans:"<style>...</style>",isCorrect:false},
                    {id:1,ans:"<css>...</css>",isCorrect:false},
                    {id:2,ans:"<inline>...</inline>",isCorrect:false},
                    {id:3,ans:'style="..."',isCorrect:true}
                    
                ]
            },
            
            {
                question:"What is the correct CSS syntax to select an element with ID 'myElement'?",
                options:[
                
                    {id:0,ans:".myElement",isCorrect:true},
                    {id:1,ans:"#myElement",isCorrect:false},
                    {id:2,ans:"<myElement>",isCorrect:false},
                    {id:3,ans:"element.myElement",isCorrect:false}
                    
                ]
            } ,
               
        ],
          

    //  JS 
  [
                
                    {
                        question:"What is the correct way to declare a variable in JavaScript?",
                        options:[
                        
                            {id:0,ans:"variable num = 10;",isCorrect:false},
                            {id:1,ans:" var num = 10;",isCorrect:true},
                            {id:2,ans:"int num = 10;",isCorrect:false},
                            {id:3,ans:"let num = 10;",isCorrect:false}
                            
                        ]
                    }
                     ,             
                    {
                        question:"How do you write an inline comment in JavaScript?",
                        options:[
                        
                            {id:0,ans:"/* This is a comment */",isCorrect:false},
                            {id:1,ans:" <!-- This is a comment -->",isCorrect:false},
                            {id:2,ans:"// This is a comment",isCorrect:true},
                            {id:3,ans:"# This is a comment",isCorrect:false}
                            
                        ]
                    } ,
                    {
                        question:"What is the result of the expression: 5 + '5' in JavaScript?",
                        options:[
                        
                            {id:0,ans:"55",isCorrect:false},
                            {id:1,ans:"10",isCorrect:false},
                            {id:2,ans:"5",isCorrect:false},
                            {id:3,ans:'"55"',isCorrect:true}
                            
                        ]
                    },
                    
            
                  ],
   
  ]   






export function getQuizData_current(head:string){


const langName = ["HTML","CSS","JavaScript"]


switch(head){

case "HTML":
    return (frontend_basic_quiz[0]);
    break;
case "CSS":
    return (frontend_basic_quiz[1]);
    break;
case "JavaScript":
    return (frontend_basic_quiz[2]);
    break;
}



}    




