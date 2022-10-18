import { getExpense, getExpenses, addExpense, delExpense, getMonthlyExpenses } from "./expenses.utils";
import { categories, createTag, tr, td, clearSelected, getMonthInUnix } from "./common.utils";
import { v4 as uuid } from "uuid";
import { getBudget } from "./budget.utils";

const form = document.getElementById('new-expense');
const [saveBtn, cancelBtn] = document.querySelectorAll('form#new-expense button');
const tbody = document.querySelector('table.editor tbody');

let editId = null;

//Hydrate
hydrate();

function hydrate() {
    let expenses = getExpenses();
    //Get values and sort by date 
    if (expenses) {
        expenses = [...Object.values(expenses)].sort((a, b) => b.date - a.date);
        tbody.replaceChildren(...expenses.map(createRow));
    }

    //Check if table is empty
    checkEmptyTable();
}


//Save button functionality
saveBtn.addEventListener('click', onSave);

//Cancel button functionality
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    editId = null;
    clearSelected();
});

//Table body onclick event
tbody.addEventListener('click', tableClick);


function onSave(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));

    if (Object.values(formData).some(el => el === '')) {
        return alert('All fields are required.');
    }

    //Format date to unix time
    formData.date = Date.parse(formData.date);

    //Set id depending if in edit mode
    if (editId) {
        formData.id = editId;
        clearSelected();
    } else {
        formData.id = uuid();
        //Check if id is unique
    }

    //Get month in unix format and check if there is a budget for this month
    const monthInUnix = getMonthInUnix(new Date(formData.date));
    const plannedMonth = getBudget(monthInUnix);
    if (plannedMonth == null) {
        return alert('There is no budget planned for this month.');
    }

    //Check if monthly income is enough
    const monthlyExpenses = getMonthlyExpenses(monthInUnix, editId);

    if ((plannedMonth.income - monthlyExpenses) < formData.amount) {
        return alert('Your remaining monthly income is not enough.');
    }

    //Check planned budget
    if ((plannedMonth.budget - monthlyExpenses) < formData.amount) {
        const confirmation = confirm('You are exceeding your planned budget, do you want to proceed?');

        if (confirmation == false) {
            return;
        }
    }

    //Create and re-hydrate
    addExpense(formData);
    hydrate();
    form.reset();
    editId = null;
}

function createRow(data) {
    const date = new Date(data.date);

    const row = createTag('tr', { id: data.id },
        td(`${date.getDate()}.${date.toLocaleString('en-US', { month: 'short' })}`),
        td(data.name),
        td(categories[data.category]),
        td(createTag('span', { className: 'currency' }, data.amount)),
        td(createTag('button', {}, 'Edit'), createTag('button', {}, 'Delete')),
    );

    return row;
}

function tableClick(e) {
    if (e.target.tagName == 'BUTTON') {
        const row = e.target.parentElement.parentElement;

        if (e.target.textContent == 'Edit') {
            //Get entry from localStorage by id
            const entry = getExpense(row.id);
            editId = row.id;

            const [dateInput, nameInput, amountInput] = document.querySelectorAll('form#new-expense input');
            const categorySelectOption = document.querySelector(`form#new-expense select[name="category"] option[value="${entry.category}"]`);
            const date = new Date(entry.date); //Unix time to object

            dateInput.value = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
            nameInput.value = entry.name;
            amountInput.value = entry.amount;
            categorySelectOption.selected = true;

            //Highlight current entry
            clearSelected();
            row.classList.add('selected');

        } else if (e.target.textContent == 'Delete' && confirm('Are you sure you want to delete this entry?')) {
            //Delete from localStorage
            delExpense(row.id);
            row.remove();
            checkEmptyTable();

            //If current entry was in edit mode/form
            if (row.id == editId) {
                form.reset();
                editId = null;
            }
        }
    }
}

function checkEmptyTable() {
    if (tbody.children.length == 0) {
        const row = tr(createTag('td', { colSpan: '5' }, 'No entries yet.'));
        tbody.replaceChildren(row);
    }
}