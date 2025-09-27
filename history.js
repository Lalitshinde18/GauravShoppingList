// Get cart from localStorage
let historyCart = JSON.parse(localStorage.getItem("cartHistory")) || [];
let historyList = document.getElementById("historyList");
let total = 0;

// Display cart items in history
if(historyCart.length === 0){
  historyList.innerHTML = "<li>No items in history</li>";
} else {
  historyCart.forEach((item, i)=>{
    total += item.amount;
    historyList.innerHTML += `
      <li>
        ${i+1}. ${item.name} - Qty: ${item.qty} × ₹${item.price} = ₹${item.amount}
      </li>
    `;
  });
}

// Display total amount
document.getElementById("totalAmount").innerText = `Total: ₹${total}`;

// Optional: Dark mode toggle if needed
const darkToggle = document.getElementById("darkToggle");
if(darkToggle){
  darkToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    darkToggle.innerText = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}
