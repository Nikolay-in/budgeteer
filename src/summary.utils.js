import { categories, getMonthInUnix } from "./common.utils";


//Add categories monthly sum to each month
export function categoriesMonthlySum(budgets, expenses) {

    //Create categories object in each month with 0 spent
    for (let month in budgets) {
        const catIds = Object.keys(categories).map(el => [el, 0]);
        budgets[month].categories = Object.fromEntries(catIds);
        budgets[month].spent = 0;
        budgets[month].overrun = 0;
        budgets[month].savings = 0;
    }

    if (expenses != null) {
        //Calculate the monthly sum of each category
        for (let entry of Object.values(expenses)) {
            const date = new Date(entry.date);
            const month = getMonthInUnix(date);

            if (budgets.hasOwnProperty(month)) {
                budgets[month].categories[entry.category] += Number(entry.amount);
            }
        }

    }

    //Calculate monthly spent, overrun, savings
    for (let month in budgets) {
        budgets[month].spent = Object.values(budgets[month].categories).reduce((acc, b) => acc + b, 0);
        budgets[month].overrun = budgets[month].spent - budgets[month].budget;
        budgets[month].savings = budgets[month].income - budgets[month].spent;
    }

    // console.log(budgets);
    return budgets;
}