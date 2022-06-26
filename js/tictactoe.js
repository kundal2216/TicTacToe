var state=true;
var arr1=[1,0,1,0,1,0,0,1,0]
var user1,user2;

function setVal(p){
    console.log(state);
    if(state){
    document.getElementById(p).innerHTML=setIndex(p,"X");
    document.getElementById("turn").innerHTML=(user2+" "+"turn");
    }
    else{
    document.getElementById(p).innerHTML=setIndex(p,"O");
    document.getElementById("turn").innerHTML=(user1+" "+"turn");
    }
    console.log(arr1);
    getWinner(); 
}
function setIndex(index,val){
   if(arr1[index]==1||arr1[index]==0){
       arr1[index]=val;
       state=!state;       
   }
   else{
       alert("not allowed");
   }
   return arr1[index];
}
// function getWinner(){
//     if(arr1[0]==arr1[1]&&arr1[1]==arr1[2]||arr1[3]==arr1[4]&&arr1[4]==arr1[5]||arr1[6]==arr1[7]&&arr1[7]==arr1[8]){
        
//         if(state==false){
//             alert(user1+ "winner");
//         }
//         else{
//             alert(user2+ "winner");
//         }
//         resetArray();
//         Counter();
       
//     }
//     else if(arr1[0]==arr1[3]&&arr1[3]==arr1[6]||arr1[1]==arr1[4]&&arr1[4]==arr1[7]||arr1[2]==arr1[5]&&arr1[5]==arr1[8]){
    
//         if(state==false){
//             alert(user1+ "winner");
//         }
//         else{
//             alert(user2+ "winner");
//         }
//         resetArray();
//         Counter();
//     }
//     else if(arr1[2]==arr1[4]&&arr1[4]==arr1[6]||arr1[0]==arr1[4]&&arr1[4]==arr1[8]){
        
//         if(state==false){
//             alert(user1+ "winner");
//         }
//         else{
//             alert(user2+ "winner");
//         }
//         resetArray();
//         Counter();
//     }
// }
function getWinner(){
    const winnerProb=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winnerProb.length;i++){
        const [a,b,c]= winnerProb[i];
        if(arr1[a]==arr1[b]&&arr1[b]==arr1[c]){
            if(state==false){
                // alert(user1+" winner");
                document.getElementById("winner").innerHTML=(user1+" winner!!");
                color= "#187ABB";
            }
            else{
                // alert(user2+" winner");
                document.getElementById("winner").innerHTML=(user2+" winner!!");
                color= "#187ABB";
            }
            highlight(a,b,c,color);
            resetArray();
            Counter();
            break;
        }
    }
}
function highlight(x,y,z,c)
{
    document.getElementById(x).style.backgroundColor=c;
    document.getElementById(y).style.backgroundColor=c;
    document.getElementById(z).style.backgroundColor=c;
}
function start(){
    user1=document.querySelector('#user1').value;
    user2=document.querySelector('#user2').value;
    if(user1=="" || user2==""){
        alert('please fill the box first');
    }
    else{
    document.querySelector("#welcome").style.display="none";
    document.querySelector("#gamediv").style.display="block";
    }
    document.querySelector('#name1').innerHTML=user1;
    document.querySelector('#name2').innerHTML=user2;
}
function reset(){
     state=true;
     arr1=[1,0,1,0,1,0,0,1,0];
     for(let i=0;i<=8;i++){
         document.getElementById(i).innerHTML="";
         document.getElementById(i).style.backgroundColor="#5faee3";
         
     }
     document.getElementById("turn").innerHTML=("");
    //  document.querySelectorAll(".box").style.backgroundColor="#5faee3";
    //  document.querySelectorAll(".box").style.backgroundColor="#5faee3";
    //  document.querySelectorAll(".box").style.backgroundColor="#5faee3";
 }
 function resetArray(){
    arr1=[null,null,null,null,null,null,null,null,null];
 }
 function Counter(){
    var counter1=document.getElementById("count1")
    var counter2=document.getElementById("count2")
        if(state=!state){
            counter1.innerText=parseInt(counter1.innerText)+1;
        }
        else {
            counter2.innerText=parseInt(counter2.innerText)+1;
        }
 }
function restart(){
    location.reload();
}
