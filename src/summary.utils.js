import { categories } from "./common.utils";


//Add categories monthly sum to each month
export function categoriesMonthlySum(budgets, expenses) {

    //Create categories object in each month with 0 spent
    for (let month in budgets) {
        const catIds = Object.keys(categories).map(el => [el, 0]);
        budgets[month].categories = Object.fromEntries(catIds);
    }
    categories;
    //Calculate the monthly sum of each category
    for (let entry of Object.values(expenses)) {
        const date = new Date(entry.date);
        //Leading zero in month makes 2 hours difference ?!
        const month = Date.parse(`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}`).toString();

        if (budgets.hasOwnProperty(month)) {
            budgets[month].categories[entry.category] += Number(entry.amount);
        }
    }

    return budgets;
}