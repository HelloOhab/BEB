document.getElementById("btn-deposit").addEventListener("click", function() {
    const deposit = document.getElementById("amount-deposit");
    const depositAmout = deposit.value;
    // convert string to number 
    const depositAmountNumber = parseFloat(depositAmout);

    // get the deportist total 
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalAmoutValue = depositTotal.innerText;
    // convert string to number 
    const newdepositAmountValue = parseFloat(depositTotalAmoutValue)
    // Add number to set total amount 
    const currentDepositAmount = newdepositAmountValue + depositAmountNumber;

    depositTotal.innerText = currentDepositAmount;

    // total balance
    const balanceTotalElement = document.getElementById("Balance-total");
    const previousTotalBalanceAmount = balanceTotalElement.innerText;
    // Convert the type 
    const previousTotalBalace = parseFloat(previousTotalBalanceAmount);

    // calculate current balance 
    const currentpreviousTotalBalace = previousTotalBalace + depositAmountNumber;
    balanceTotalElement.innerText = currentpreviousTotalBalace

    // clear the deposit filed 
    deposit.value = "";

})