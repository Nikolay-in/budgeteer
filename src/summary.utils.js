import { categories, getMonthInUnix } from "./common.utils";


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
        const month = getMonthInUnix(date);

        if (budgets.hasOwnProperty(month)) {
            budgets[month].categories[entry.category] += Number(entry.amount);
        }
    }

    return budgets;
}