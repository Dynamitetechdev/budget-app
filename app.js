// inputs
let budget_amount = document.querySelector(".input_budget");
let expense_name = document.querySelector(".expenses_name");
let expense_amount = document.querySelector(".expenses_amount");

let allInput = document.querySelectorAll("input");
// Buttons
let add_budget_button = document.querySelector(".budget_btn");
let add_expenses_button = document.querySelector(".add_expenses");
console.log(add_budget_button);
let remove_button = document.getElementsByClassName("remove_button");

//table
let table_list = document.querySelector("table")
console.log(table_list)
let expense_value = document.getElementsByClassName("expenses_value");
// Button addEventlistener
add_budget_button.addEventListener("click", showBudget)
add_expenses_button.addEventListener("click", addExpenses)

function showBudget(e){
    e.preventDefault()
    document.querySelector('.your_budget').textContent = `$${budget_amount.value}`;
    document.querySelector(".balance").textContent = `$${budget_amount.value}`;
    clear()

}

function addExpenses(e){
    e.preventDefault();
    let expenses_list = document.createElement("tr");
    expenses_list.innerHTML = `
    <td>${expense_name.value}</td>
    <td class="expenses_value" >${expense_amount.value}</td>

    <td>Edit</td>
    <td class="remove_button">Delete</td>
    `
    table_list.appendChild(expenses_list);
    clear_expeneses();

    for(let i = 0; i < remove_button.length; i++){
        let button = remove_button[i];
        button.addEventListener('click', remove_item)
    }
    expenses()
}

function clear(){
    budget_amount.value = ""
}
function clear_expeneses(){
    document.querySelector(".expenses_form").reset();
}
function remove_item(event){
    let element = event.target;
    element.parentElement.remove();
    expenses()
};

function expenses(){
    let sum = 0
    for(let i = 0; i < expense_value.length; i++){
    let newVal = Number(expense_value[i].innerHTML); 
    sum = sum + newVal;
    console.log(sum)
    document.querySelector(".your_expenses").textContent =`$${sum}` 
    }

    function clearExpense(){
        if(remove_button.length < 1){
            document.querySelector(".your_expenses").textContent ="$0";
        }
    }
    clearExpense()
};
function calculate_balance(){
    expenses();
    let balance = parseInt(budget_amount.value) - sum;
    console.log(balance)
}
calculate_balance()