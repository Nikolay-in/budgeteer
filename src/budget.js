import { addBudget, getBudgets, getBudget, delBudget } from "./budget.utils";
import { clearSelected, createTag, tr, td } from "./common.utils";


const form = document.getElementById('new-budget');
const [saveBtn, cancelBtn] = document.querySelectorAll('form#new-budget button');
const tbody = document.querySelector('table.editor tbody');

let editId = null;


// //Hydrate
hydrate();

function hydrate() {
    let budgets = getBudgets();
    //Get values and sort by date 
    if (budgets) {
        budgets = [...Object.values(budgets)].sort((a, b) => b.month - a.month);
        tbody.replaceChildren(...budgets.map(createRow));
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

    //Check if date is valid
    if (formData.month.match(/\b((0[1-9])|1[0-2])-\d{4,}\b/g) == null) {
        return alert('Required date format is mm-yyyy.');
    }

    if (formData.income < formData.budget) {
        return alert('Income cannot be less than budget.');
    }

    //Format date to unix time
    const [month, year] = formData.month.split('-');
    formData.month = Date.parse(`${year}-${month}`);

    //Set id depending if in edit mode
    if (editId) {
        formData.id = editId;
        clearSelected();
    } else {
        formData.id = formData.month;
    }

    //Create and re-hydrate
    if (addBudget(formData, editId) == true) {
        hydrate();
        form.reset();
        editId = null;
    }
}

function createRow(data) {
    const date = new Date(data.month);

    const row = createTag('tr', { id: data.id },
        td(`${date.toLocaleString('en-US', { month: 'short' })}.${date.getFullYear()}`),
        td(createTag('span', { className: 'currency' }, data.income)),
        td(createTag('span', { className: 'currency' }, data.budget)),
        td(createTag('button', {}, 'Edit'), createTag('button', {}, 'Delete')),
    );

    return row;
}

function tableClick(e) {
    if (e.target.tagName == 'BUTTON') {
        const row = e.target.parentElement.parentElement;

        if (e.target.textContent == 'Edit') {
            //Get entry from localStorage by id
            const entry = getBudget(row.id);
            editId = row.id;

            const [dateInput, incomeInput, budgetInput] = document.querySelectorAll('form#new-budget input');
            const date = new Date(entry.month); //Unix time to object

            dateInput.value = `${(date.getMonth() + 1).toString().padStart(2, 0)}-${date.getFullYear()}`;
            incomeInput.value = entry.income;
            budgetInput.value = entry.budget;

            //Select current
            clearSelected();
            row.classList.add('selected');

        } else if (e.target.textContent == 'Delete' && confirm('Are you sure you want to delete this entry?')) {
            //Delete from localStorage
            delBudget(row.id);
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
        const row = tr(createTag('td', { colSpan: '4' }, 'No entries yet.'));
        tbody.replaceChildren(row);
    }
}