
const account = {
    name: 'Andrew Noval',
    income: [],
    expenses: [],
    getAccountSummary: function() {

        let totalExp = 0 ;
        let totalInc = 0;
        let Summ = 0;

        this.expenses.forEach((exp) => {
           
           totalExp = totalExp + exp.amount;
       
        })

        this.income.forEach((inc) => {

            totalInc = totalInc + inc.amount;

        })

        Summ = totalInc - totalExp;


        return `you have $${Summ} in acc - income: $${totalInc} and expenses: $${totalExp}`;

    }

}

account.addExpence = (desc, amount) => {
    account.expenses.push({desc: desc, amount: amount})
}

account.addIncome = (desc, amount) => {
    account.income.push({ desc: desc, amount: amount })
}




account.addExpence('rent', 950);
account.addExpence('cars', 250);
account.addExpence('internet', 70);
account.addIncome('upwork', 640);

console.log(account.getAccountSummary())
