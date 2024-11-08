//adding income function

function addIncome() {
  var income = prompt("Enter the income amount:");
  console.log("Income added:", income);
  localStorage.setItem('income', income);
  document.getElementById('balance').innerText=income;
}


const dialog = document.getElementById("Expense-dialog")

 function showExpenseDialog(){

  dialog.showModal()
 }
 function addExpensee(){
  var amt=praseFloat(document.getElementById('amt').value);
  
  document.getElementById('balance').innerText=amt;
  document.getElementById('balance').value=' ';
  console.log("expense added:", amt);
  localStorage.setItem('expense', amt);
  document.getElementById('balance').innerText=amt;
 
 }
 function closeExpenseDialog(){
  dialog.close()
 }
 function openInstagram(){
 var instagramUrl = 'https://www.instagram.com/mr__dhinshkumar__tn47?igsh=djg3bmNhMnZpbmiq';
  window.open(instagramUrl, '_blank');
 }
 function openLinkedin(){
 var linkedinUrl = 'https://www.linkedin.com/in/dhinesh-Kumar-793208301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  window.open(linkedinUrl, '_blank');
 }
function openTransaactionspage() {
  var transactionsUrl ='expens.html';
  window.open(transactionsUrl,'_blank');
}
