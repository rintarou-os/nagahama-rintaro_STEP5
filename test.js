const input = document.getElementById("inputtext");
const showBtn = document.getElementById("showBtn");
const display = document.getElementById("displayArea");
const bgbtn = document.getElementById("bgbtn");
const tablebody = document.getElementById("tablebody");

showBtn.addEventListener("click", function()  {
    const text = input.value;
  
    if (text === "") {
      alert("入力値が空です。");
      console.log(text);
      return;
    }
  
    display.textContent = text;
    display.classList.toggle("highlight");

const newRow = tablebody.insertRow(); 
const cellText = newRow.insertCell(0); 
const cellBtn = newRow.insertCell(1);  

cellText.textContent = text; 
input.value = "";

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "削除";
cellBtn.appendChild(deleteBtn);

const rowCount = tablebody.rows.length; 

if (rowCount >= 3) {
  showBtn.style.display = "none"; 
}

deleteBtn.addEventListener('click',function(){
  newRow.remove();

  if(tablebody.rows.length < 3){
    showBtn.style.display = "inline-block";
  }
});
});

const colors =["lightblue","lightgreen","lightcoral"];
let index = 0;
 bgbtn.addEventListener('click',function(){
  document.body.style.backgroundColor = colors[index];
  index++;
  if(index >= colors.length){
    index = 0;
  }
 });
 

 console.log("--- 今回のテスト:ループ開始 ---");
 for(let i =1; i <= 5; i++ ){
console.log(i + "回目のループです");
 };