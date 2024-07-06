const menubarBtn = document.querySelector('.content-nav i')
menubarBtn.addEventListener("click",function(){
    document.querySelector('.content-nav ul').classList.toggle('active')
});

const customerTable = document.getElementById('customerTable');
const searchInput = document.getElementById('searchInput');

// Lấy dữ liệu khách hàng từ API hoặc database
fetch('/api/customers')
  .then(response => response.json())
  .then(customers => {
    displayCustomers(customers);
  });

function displayCustomers(customers) {
  const tableBody = customerTable.querySelector('tbody');
  tableBody.innerHTML = '';

  customers.forEach(customer => {
    const row = tableBody.insertRow();

    const sttCell = row.insertCell();
    sttCell.textContent = customer.stt;

    const tourCodeCell = row.insertCell();
    tourCodeCell.textContent = customer.tourCode;

    const avatarCell = row.insertCell();
    const avatar = document.createElement('img');
    avatar.src = customer.avatar;
    avatar.width = 3
  })};
  