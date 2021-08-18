
// Money Input Find Function 
function moneyInputFind(moneyValue) {
    const moneyBothValueInput = document.getElementById(moneyValue);
    const moneyValueFind = parseFloat(moneyBothValueInput.value);
    moneyBothValueInput.value = '';
    return moneyValueFind;
}

function totalAfterDepositAndWithdraw(depositWithdraw, parameterId) {
    const totalDeposit = document.getElementById(parameterId);
    const totalDepositValueFind = totalDeposit.innerText;
    totalDeposit.innerText = parseFloat(totalDepositValueFind) + depositWithdraw;
}

function totalBalanceUpdate(isValue, totalBalnce, depositwithdraw) {
    const totalBalance = document.getElementById(totalBalnce);
    const totalBalanceValueFind = totalBalance.innerText;
    if (isValue == true) {
        totalBalance.innerText = parseFloat(totalBalanceValueFind) + depositwithdraw;
    } else {
        totalBalance.innerText = parseFloat(totalBalanceValueFind) - depositwithdraw;
    }
}

function getCurrent() {
    const totalAmount = document.getElementById('total-balance');
    const totalAmountNumber = parseFloat(totalAmount.innerText);
    return totalAmountNumber;
}

// deposit button work function 

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositValueFind = moneyInputFind('deposit-money');
    if (depositValueFind > 0) {
        // deposit total addition
        totalAfterDepositAndWithdraw(depositValueFind, 'total-deposit');
        //total balance addition
        totalBalanceUpdate(true, 'total-balance', depositValueFind);
    }
})

// Withdraw button function work 

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValueFind = moneyInputFind('withdraw-money');
    const curretTotal = getCurrent();
    if (withdrawValueFind > 0 && curretTotal >= withdrawValueFind) {
        // withdraw money total 
        totalAfterDepositAndWithdraw(withdrawValueFind, 'total-withdraw');
        // withdraw after total balance 
        totalBalanceUpdate(false, 'total-balance', withdrawValueFind);
    }

})