document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const authMsg = document.getElementById("authMsg");

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (loginBtn) {
    loginBtn.onclick = () => {
      if (!window.auth) {
        alert("Firebase not ready yet. Refresh page.");
        return;
      }

      auth.signInWithEmailAndPassword(
        email.value,
        password.value
      )
      .then(() => window.location = "dashboard.html")
      .catch(err => authMsg.textContent = err.message);
    };
  }

  if (signupBtn) {
    signupBtn.onclick = () => {
      if (!window.auth) {
        alert("Firebase not ready yet. Refresh page.");
        return;
      }

      auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      )
      .then(() => window.location = "dashboard.html")
      .catch(err => authMsg.textContent = err.message);
    };
  }

});

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
// ================= INVENTORY SYSTEM =================

document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.getElementById("addItemBtn");
  const itemName = document.getElementById("itemName");
  const itemQty = document.getElementById("itemQty");
  const list = document.getElementById("inventoryList");

  if (!addBtn) return; // prevents errors if not on dashboard

  const inventoryRef = db.ref("inventory");

  // Add item
  addBtn.onclick = () => {
    if (!itemName.value || !itemQty.value) {
      alert("Please enter item and quantity");
      return;
    }

    inventoryRef.push({
      name: itemName.value,
      qty: itemQty.value
    });

    itemName.value = "";
    itemQty.value = "";
  };

  // Display items
  inventoryRef.on("value", snapshot => {
    list.innerHTML = "";

    snapshot.forEach(child => {
      const data = child.val();
      const li = document.createElement("li");
      li.textContent = `${data.name} (${data.qty})`;
      list.appendChild(li);
    });
  });

});
