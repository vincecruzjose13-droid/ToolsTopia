// AUTH
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const authMsg = document.getElementById("authMsg");

if(loginBtn){
 loginBtn.onclick = () => {
  auth.signInWithEmailAndPassword(
    email.value, password.value
  ).then(()=>location="dashboard.html")
  .catch(e=>authMsg.textContent=e.message);
 };
}

if(signupBtn){
 signupBtn.onclick = () => {
  auth.createUserWithEmailAndPassword(
    email.value, password.value
  ).then(()=>location="dashboard.html")
  .catch(e=>authMsg.textContent=e.message);
 };
}

function logout(){
 auth.signOut().then(()=>location="login.html");
}

// INVENTORY
function addItem(){
 const name = itemName.value;
 const qty = itemQty.value;
 if(!name || !qty) return;
 db.ref("inventory/"+auth.currentUser.uid).push({
  name, qty
 });
}

if(document.getElementById("inventoryList")){
 db.ref("inventory/"+auth.currentUser.uid).on("value",snap=>{
  inventoryList.innerHTML="";
  snap.forEach(d=>{
   inventoryList.innerHTML+=`
    <div class="card">${d.val().name} — Qty: ${d.val().qty}</div>
   `;
  });
 });
}

// BORROW
function addBorrow(){
 db.ref("borrow/"+auth.currentUser.uid).push({
  item:borrowItem.value,
  person:borrowName.value
 });
}

if(document.getElementById("borrowList")){
 db.ref("borrow/"+auth.currentUser.uid).on("value",snap=>{
  borrowList.innerHTML="";
  snap.forEach(d=>{
   borrowList.innerHTML+=`
    <div class="card">${d.val().item} → ${d.val().person}</div>
   `;
  });
 });
}

// TASKS
function addTask(){
 db.ref("tasks/"+auth.currentUser.uid).push({
  text:taskText.value
 });
}

if(document.getElementById("taskList")){
 db.ref("tasks/"+auth.currentUser.uid).on("value",snap=>{
  taskList.innerHTML="";
  snap.forEach(d=>{
   taskList.innerHTML+=`
    <div class="card">${d.val().text}</div>
   `;
  });
 });
}
