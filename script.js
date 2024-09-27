//your JS code here. If required.
const btn=document.getElementById("btn");
const output=document.getElementById("output");

btn.addEventListener("click",async()=>{
	output.innerText="";
	let input=document.getElementById("text");
	let delay=document.getElementById("delay");
	await delayFn(delay.value);
	output.innerText=input.value;
	input.value="";
	delay.value=0;
});
function delayFn(d){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res();
		},d) 
	});
}