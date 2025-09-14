let products = [
  {name:"2kg powder", qty:1, price:0, amount:0},
  {name:"3kg पाउडर", qty:1, price:0, amount:0},
  {name:"निरु 1kg पाउडर", qty:1, price:0, amount:0},
  {name:"फ्री सोप 6 pcs", qty:1, price:0, amount:0},
  {name:"1800 gm सोप", qty:1, price:0, amount:0},
  {name:"Nilu 2700 gm साबण", qty:1, price:0, amount:0},
  {name:"बर्तन बार 5 pcs", qty:1, price:0, amount:0},
  {name:"210 gm सोप", qty:1, price:0, amount:0},
  {name:"बर्तन बार 220 gm", qty:1, price:0, amount:0},
  {name:"टॉयलेट 500 ml", qty:1, price:0, amount:0},
  {name:"बाथरूम 500 ml", qty:1, price:0, amount:0},
  {name:"डिश वॉश 1 ltr premium", qty:1, price:0, amount:0},
  {name:"डिश वॉश 400 ml", qty:1, price:0, amount:0},
  {name:"डिश वॉश 900 ml", qty:1, price:0, amount:0},
  {name:"डिश वॉश 5ltr cane", qty:1, price:0, amount:0},
  {name:"मीन 200ml", qty:1, price:0, amount:0},
  {name:"मीन 500ml", qty:1, price:0, amount:0},
  {name:"ब्लँक 500ml", qty:1, price:0, amount:0},
  {name:"कपडा फिक्स 1 ltr", qty:1, price:0, amount:0},
  {name:"लिक्विड 1 ltr", qty:1, price:0, amount:0},
  {name:"ऑल क्लिन 500 ml", qty:1, price:0, amount:0},
  {name:"ओशियन फ्रेश शांपू 500 ml", qty:1, price:0, amount:0},
  {name:"मेड क्लिनर 500 ml", qty:1, price:0, amount:0},
  {name:"ग्लास क्लिनर 500 ml", qty:1, price:0, amount:0},
  {name:"बाथरूम 500 ml", qty:1, price:0, amount:0},
  {name:"spunz साबणी", qty:1, price:0, amount:0},
  {name:"तारा पाउडर", qty:1, price:0, amount:0},
  {name:"तारा धारणी", qty:1, price:0, amount:0},
  {name:"चेट क्लिन pouch जारी", qty:1, price:0, amount:0},
  {name:"कपडे ब्रश", qty:1, price:0, amount:0},
  {name:"नवा ओवल ब्रश", qty:1, price:0, amount:0},
  {name:"रुंद किंग लाकडी ब्रश", qty:1, price:0, amount:0},
  {name:"टॉयलेट ब्रश (nath)", qty:1, price:0, amount:0},
  {name:"टॉयलेट ब्रश (लॉंग)", qty:1, price:0, amount:0},
  {name:"खरात premium", qty:1, price:0, amount:0},
  {name:"बाथरूम खरात GOLD", qty:1, price:0, amount:0},
  {name:"मॉप 6'' इंच", qty:1, price:0, amount:0},
  {name:"मॉप 9'' इंच", qty:1, price:0, amount:0},
  {name:"मॉप kotak", qty:1, price:0, amount:0},
  {name:"झकी मॉप", qty:1, price:0, amount:0},
  {name:"जे की झाडू", qty:1, price:0, amount:0},
  {name:"cleano झाडू", qty:1, price:0, amount:0},
  {name:"एक्सप्रेस ब्लॅक झाडू", qty:1, price:0, amount:0},
  {name:"अमरमति 60 gm", qty:1, price:0, amount:0},
  {name:"अमरमति 150 gm", qty:1, price:0, amount:0},
  {name:"जुई 100 gm", qty:1, price:0, amount:0},
  {name:"जुई प्रेगनन्स", qty:1, price:0, amount:0},
  {name:"गंगाजल 30 ml", qty:1, price:0, amount:0},
  {name:"पेप्या पाउडर 200 gm", qty:1, price:0, amount:0},
  {name:"आयलॅव्हली हॅयर ऑईल", qty:1, price:0, amount:0},
  {name:"चमक", qty:1, price:0, amount:0},
  {name:"drain क्लिनर", qty:1, price:0, amount:0},
  {name:"चहा पाउडर", qty:1, price:0, amount:0},
  {name:"चहा पाउडर", qty:1, price:0, amount:0},
  {name:"सामर्थ्य सुपडी", qty:1, price:0, amount:0},
  {name:"सामर्थ्य मग 750 ml", qty:1, price:0, amount:0},
  {name:"नवा झाडू ब्रश", qty:1, price:0, amount:0},
  {name:"नोव्ही झाडा ब्रश", qty:1, price:0, amount:0}
  
];
let cart = [];

// Show products
function displayProducts(filter="") {
  let list = document.getElementById("productList");
  list.innerHTML="";
  products
    .filter(p=>p.name.toLowerCase().includes(filter.toLowerCase()))
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


// Edit product in product list
function editProduct(i){
  let newName = prompt("Enter new name", products[i].name);
  let newQty = prompt("Enter new quantity", products[i].qty);
  let newPrice = prompt("Enter new price", products[i].price);

  if(newName && newQty && newPrice){
    products[i].name = newName;
    products[i].qty = parseInt(newQty);
    products[i].price = parseInt(newPrice);
    products[i].amount = products[i].qty * products[i].price;
    displayProducts();
  }
}

// Remove product from product list
function removeProduct(i){
  if(confirm("Are you sure to delete this product?")){
    products.splice(i,1);
    displayProducts();
  }
}




// Add product
function addProduct(){
  let name=document.getElementById("newName").value;
  let qty=parseInt(document.getElementById("newQty").value);
  let price=parseInt(document.getElementById("newPrice").value);

  if(!name || !qty || !price) { alert("Fill all fields"); return; }

  let amount=qty*price;
  products.push({name, qty, price, amount});
  displayProducts();
  document.getElementById("newName").value="";
  document.getElementById("newQty").value="";
  document.getElementById("newPrice").value="";
}

// Add to Cart
function addToCart(index){
  let selectedQty = prompt("Enter quantity", 1);   // user कडून qty घ्या
  if(!selectedQty || isNaN(selectedQty) || selectedQty <= 0){
    alert("Invalid quantity!");
    return;
  }
  selectedQty = parseInt(selectedQty);

  // नवीन item तयार करा qty आणि amount सह
  let item = {
    name: products[index].name,
    qty: selectedQty,
    price: products[index].price,
    amount: selectedQty * products[index].price
  };

  cart.push(item);
  showCart();
}


// Show Cart
function showCart(){
  let cartList=document.getElementById("cartList");
  cartList.innerHTML="";
  let total=0;

  if(cart.length === 0){
    cartList.innerHTML = "<li>🛍️ No items in cart</li>";
  }

  cart.forEach((item,i)=>{
    total+=item.amount;
    cartList.innerHTML+=`
      <li>
        <div>
          ${item.name} <br>
          <small>Qty: ${item.qty} × ₹${item.price} = <b>₹${item.amount}</b></small>
        </div>
        <div>
          <button class="edit" onclick="editCart(${i})">✏️</button>
          <button class="del" onclick="removeCart(${i})">❌ Remove</button>
        </div>
      </li>`;
  });

  document.getElementById("totalAmount").innerText=`Total: ₹${total}`;
}

// Edit Cart
function editCart(i){
  let newQty=prompt("Enter new quantity", cart[i].qty);
  if(newQty && !isNaN(newQty)){
    cart[i].qty=parseInt(newQty);
    cart[i].amount=cart[i].qty*cart[i].price;
    showCart();
  }
}

// Remove Cart
function removeCart(i){
  cart.splice(i,1);
  showCart();
}

// Generate PDF (Invoice Style)
function generatePDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p","pt","a4");

  // Header
  doc.setFontSize(20);
  doc.setTextColor(40);
  doc.text("ANIRUDDHA SHOPEE", 40, 40);
  doc.setFontSize(10);
  doc.text("Plot no 9, Golden City, Bahadarpur Road, Parola", 40, 60);
  doc.text("Phone: 9322200655  Email: aniruddhashopee@gmail.com", 40, 75);

  // Estimate Title
  doc.setFontSize(16);
  doc.setTextColor(0,0,200);
  doc.text("Estimate", 260, 100);

  // Customer Info (Demo)
  doc.setTextColor(0);
  doc.setFontSize(12);
  doc.text("Estimate For:", 40, 130);
  doc.text("GAURAV SHINDE", 120, 130);
  doc.text("AT-POST: SHINDI TAL: BHADGAON DIST: JALGAON", 120, 145);
  doc.text("Contact: 8010843324", 120, 160);

  // Estimate details
  doc.text("Estimate No.: 6", 400, 130);
  doc.text("Date: 27-02-2025", 400, 145);

  // Table data
  let tableData = cart.map((p,i)=>[
    i+1,
    p.name,
    p.qty,
    `₹${p.price}`,
    `₹${p.amount}`
  ]);

  doc.autoTable({
    startY: 190,
    head: [["#", "Item name", "Quantity", "Price/Unit", "Amount"]],
    body: tableData,
    theme: "grid",
    headStyles: { fillColor: [41, 128, 185], textColor: 255, halign: "center" },
    bodyStyles: { halign: "center" },
    styles: { fontSize: 10 }
  });

  // Totals
  let total = cart.reduce((sum,p)=>sum+p.amount,0);
  let finalY = doc.lastAutoTable.finalY + 20;

  doc.setFontSize(12);
  doc.text(`Sub Total: ₹${total.toLocaleString()}`, 400, finalY);
  doc.text(`Total: ₹${total.toLocaleString()}`, 400, finalY+20);

  // Amount in words
  doc.setFontSize(10);
  doc.text(`Estimate Amount In Words: ${toWords(total)} only`, 40, finalY);

  // Footer
  doc.setFontSize(10);
  doc.text("Terms and Conditions:", 40, finalY+60);
  doc.text("Thanks for doing business with us!", 40, finalY+75);
  doc.text("Authorized Signatory", 400, finalY+100);

  doc.save("AniruddhaShopee_Estimate.pdf");
}

// Convert numbers to words
function toWords(num) {
  const a = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
    'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const b = ['','', 'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  if((num= num.toString()).length > 9) return 'Overflow';
  let n = ('000000000' + num).substr(-9).match(/(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})/);
  if(!n) return; 
  let str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + ' Crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' Lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' Thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' Hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
  return str;
}

// Search
document.getElementById("searchBox").addEventListener("input",(e)=>{
  displayProducts(e.target.value);
});

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  let btn=document.getElementById("darkToggle");
  btn.innerText=document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ====== Send to WhatsApp (only Item & Qty) ======
function sendWhatsApp() {
  if (!cart || cart.length === 0) {
    alert("No items in cart!");
    return;
  }

  let msg = "🛒 * Order List *\n";
  msg += "-----------------------------\n";

  cart.forEach((p,i)=>{
    msg += `${i+1}. ${p.name} - Qty: ${p.qty}\n`;
  });

  msg += "-----------------------------\n";
  msg += "_Sent from Aniruddha Shopee_";

  // WhatsApp नंबर (91 = India)
  let phone = "918010843324";  

  // Open WhatsApp
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}


displayProducts();
