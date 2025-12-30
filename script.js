// ================= DATA =================
let cart = [];
let total = 0;
let selectedCar = "";

// ================= TOGGLE CART =================
function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
}

// ================= ADD TO CART =================
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCartUI();
}

// ================= REMOVE FROM CART =================
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCartUI();
}

// ================= UPDATE CART UI =================
function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const countEl = document.getElementById("cart-count");

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        ₹${item.price} / day
      </div>

      <div style="display:flex; gap:6px;">
        <button onclick="bookFromCart('${item.name}', ${item.price})">Book</button>
        <button onclick="removeFromCart(${index})">✖</button>
      </div>
    `;
    cartList.appendChild(li);
  });

  totalEl.textContent = total;
  countEl.textContent = cart.length;
}

// ================= BOOK FROM CART =================
function bookFromCart(car, price) {
  selectedCar = car;
  document.getElementById("booking-car").innerText =
    `Booking for ${car} (₹${price}/day)`;

  document.getElementById("bookingModal").classList.add("open");
}

// ================= BOOKING MODAL =================
function openBooking(car, price) {
  selectedCar = car;
  document.getElementById("booking-car").innerText =
    `Booking for ${car} (₹${price}/day)`;

  document.getElementById("bookingModal").classList.add("open");
}

function closeBooking() {
  document.getElementById("bookingModal").classList.remove("open");
}

function confirmBooking() {
  alert(`Booking confirmed for ${selectedCar}`);
  closeBooking();
}
