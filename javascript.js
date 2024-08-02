
//adding income function
function addIncome() {
  var income = prompt("Enter the income amount:");
  console.log("Income added:", income);
  localStorage.setItem('income', income);
}
const dialog = document.getElementById("Expense-dialog")

 function showExpenseDialog(){
  dialog.showModal()
 }
 function closeExpenseDialog(){
  dialog.close()
 }
 const balance=document.querrySelector("balance");
 const description=document.querrySelector("desc");
 const amount=document.querrySelector("amt");

 