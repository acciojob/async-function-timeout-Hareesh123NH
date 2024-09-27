//your JS code here. If required.
const btn=document.getElementById("btn");
const output=document.getElementById("output");

btn.addEventListener("click",async()=>{
	output.innerText="";
	const input=document.getElementById("text").value;
	const delay=document.getElementById("delay").value;
	await delayFn(delay);
	output.innerText=input;
});
function delayFn(d){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res();
		},d) 
	});
}