// Load data from localStorage if available
let products = JSON.parse(localStorage.getItem("products")) || [
  {name:"2kg powder", qty:1, price:0, amount:0},
  {name:"3kg पाउडर", qty:1, price:0, amount:0},
  {name:"निरु 1kg पाउडर", qty:1, price:0, amount:0},
  {name:"3kg पाउडर", qty:1, price:0, amount:0},
  {name:"निरु 1kg पाउडर", qty:1, price:0, amount:0},
  {name:"फ्री सोप 6 pcs", qty:1, price:0, amount:0}
  
  // ... बाकी products
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save products and cart to localStorage
function saveData() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Display Products
function displayProducts(filter="") {
  let list = document.getElementById("productList");
  list.innerHTML="";
  products.filter(p=>p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((p,i)=>{
      list.innerHTML+=`
        <div class="card">
          <h3>${p.name}</h3>
          <p>Qty: ${p.qty}</p>
          <p>Price: ₹${p.price}</p>
          <p class="amount">Total: ₹${p.amount}</p>
          <div class="btn-group">
            <button onclick="addToCart(${i})">➕ Add</button>
            <button onclick="editProduct(${i})">✏️ Edit</button>
            <button onclick="removeProduct(${i})">❌ Remove</button>
          </div>
        </div>
      `;
    });
}

// Add/Edit/Remove Product
function editProduct(i){
  let newName = prompt("Enter new name", products[i].name);
  let newQty = prompt("Enter new quantity", products[i].qty);
  let newPrice = prompt("Enter new price", products[i].price);
  if(newName && newQty && newPrice){
    products[i].name = newName;
    products[i].qty = parseInt(newQty);
    products[i].price = parseInt(newPrice);
    products[i].amount = products[i].qty * products[i].price;
    saveData();
    displayProducts();
  }
}

function removeProduct(i){
  if(confirm("Are you sure to delete this product?")){
    products.splice(i,1);
    saveData();
    displayProducts();
  }
}

function addProduct(){
  let name=document.getElementById("newName").value;
  let qty=parseInt(document.getElementById("newQty").value);
  let price=parseInt(document.getElementById("newPrice").value);
  if(!name || !qty || !price) { alert("Fill all fields"); return; }
  let amount=qty*price;
  products.push({name, qty, price, amount});
  saveData();
  displayProducts();
  document.getElementById("newName").value="";
  document.getElementById("newQty").value="";
  document.getElementById("newPrice").value="";
}

// Cart Functions
function addToCart(index){
  let selectedQty = prompt("Enter quantity", 1);
  if(!selectedQty || isNaN(selectedQty) || selectedQty <= 0){ alert("Invalid quantity!"); return; }
  selectedQty = parseInt(selectedQty);
  let item = { name: products[index].name, qty: selectedQty, price: products[index].price, amount: selectedQty * products[index].price };
  cart.push(item);
  saveData();
  showCart();
}

function showCart(){
  let cartList=document.getElementById("cartList");
  cartList.innerHTML="";
  let total=0;
  if(cart.length === 0){ cartList.innerHTML = "<li>🛍️ No items in cart</li>"; }
  cart.forEach((item,i)=>{
    total+=item.amount;
    cartList.innerHTML+=`
      <li>
        <div>${item.name} <br><small>Qty: ${item.qty} × ₹${item.price} = <b>₹${item.amount}</b></small></div>
        <div>
          <button class="edit" onclick="editCart(${i})">✏️</button>
          <button class="del" onclick="removeCart(${i})">❌ Remove</button>
        </div>
      </li>`;
  });
  document.getElementById("totalAmount").innerText=`Total: ₹${total}`;
}

function editCart(i){
  let newQty=prompt("Enter new quantity", cart[i].qty);
  if(newQty && !isNaN(newQty)){
    cart[i].qty=parseInt(newQty);
    cart[i].amount=cart[i].qty*cart[i].price;
    saveData();
    showCart();
  }
}

function removeCart(i){
  cart.splice(i,1);
  saveData();
  showCart();
}

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  document.getElementById("darkToggle").innerText = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Search
document.getElementById("searchBox").addEventListener("input",(e)=>{ displayProducts(e.target.value); });

// Initial Load


// pdf generator code 

function generatePDF() {
  if (!cart || cart.length === 0) {
    alert("No items in cart!");
    return;
  }

  let bodyData = [
    [
      { text: "Item", bold: true },
      { text: "Qty", bold: true },
      { text: "Price", bold: true },
      { text: "Amount", bold: true }
    ]
  ];

  let total = 0;
  cart.forEach((p) => {
    total += p.amount;
    bodyData.push([
      p.name, // ✅ Marathi text आता नीट दिसेल
      p.qty.toString(),
      "₹" + p.price,
      "₹" + p.amount
    ]);
  });

  bodyData.push([
    { text: "Total", colSpan: 3, alignment: "right", bold: true }, {}, {}, "₹" + total
  ]);

  var docDefinition = {
    content: [
      { text: "🛒 Aniruddha Shopee", style: "header" },
      { text: "Customer Bill", style: "subheader" },
      { text: "----------------------------", margin: [0, 5] },
      {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          body: bodyData
        }
      },
      { text: "🙏 धन्यवाद!", style: "footer" }
    ],
    defaultStyle: {
      font: "NotoDevanagari"  // ✅ Force Devanagari font
    },
    styles: {
      header: { fontSize: 18, bold: true, alignment: "center" },
      subheader: { fontSize: 14, margin: [0, 10] },
      footer: { italics: true, alignment: "center", margin: [0, 20] }
    }
  };

  pdfMake.createPdf(docDefinition).download("Bill.pdf");
}



// ====== Send to WhatsApp (only Item & Qty) ======
function sendWhatsApp() {
  if (!cart || cart.length === 0) {
    alert("No items in cart!");
    return;
  }

  let msg = "🛒 *Order List*\n";
  msg += "-----------------------------\n";

  let total = 0;
  cart.forEach((p, i) => {
    let amount = p.qty * p.price;
    total += amount;
    msg += `${i + 1}. ${p.name} - Qty: ${p.qty} - ₹${amount}\n`;
  });

  msg += "-----------------------------\n";
  msg += `*Total Bill: ₹${total}*\n`;
  msg += "_Sent from Aniruddha Shopee_";

  // WhatsApp नंबर (91 = India)
  let phone = "918010843324";  

  // Open WhatsApp
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}










displayProducts();
showCart();
