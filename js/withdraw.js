document.getElementById("btn-withdraw").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("bebwithdraw-amount");
    const initialWithdrawAmountString = withdrawAmount.value;
    const initialWithdrawAmount = parseFloat(initialWithdrawAmountString); //type conversion of initial withdraw ammount

    const bebPreviousWithdrawAmountInitial = document.getElementById("withdraw-amount");
    const bebPreviousWithdrawAmountString = bebPreviousWithdrawAmountInitial.innerText;
    const bebPreviousWithdrawAmount = parseFloat(bebPreviousWithdrawAmountString);
    const bebCurrentWithdrawAmount = bebPreviousWithdrawAmount + initialWithdrawAmount;

    bebPreviousWithdrawAmountInitial.innerText = bebCurrentWithdrawAmount;

    const balanceTotalElement = document.getElementById("Balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const newBalanceTotal = previousBalanceTotal - bebCurrentWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawAmount.value = "";
})