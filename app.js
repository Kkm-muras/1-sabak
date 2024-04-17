const start=document.querySelector("#start");
const btns=document.querySelectorAll("button");
console.log(start.innerHTML);

let count=0;

console.log(btns);
btns[0].onclick=()=>{
    count++;
    start.innerHTML=count;
    start.style.color="green";
};
btns[1].onclick=()=>{
    if (count>0)
{    count--;
    start.innerHTML=count;
    start.style.color="red";}
}