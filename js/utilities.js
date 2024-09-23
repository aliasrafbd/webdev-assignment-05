function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue).toFixed(2);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue).toFixed(2);
    return textNumber;
}

function showSectionById(id) {
    // hide sections
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // Show the Section 
    document.getElementById(id).classList.remove('hidden');
}

function InnerTextBalanceCalculator(idInput, accountBalance, modalId, donatedFor) {
    const donatedAmount = getInputFieldValueById(idInput);
        if(donatedAmount > 0 && typeof(donatedAmount) !== 'NaN') {
            const previousAmount = getTextFieldValueById(accountBalance);
            const totalDonationLeft = getTextFieldValueById('total-amount-left');

            const currentAmount = previousAmount + donatedAmount;
            const donationLeft = totalDonationLeft - donatedAmount;

            document.getElementById(accountBalance).innerText = currentAmount;
            document.getElementById('total-amount-left').innerText = donationLeft;

            const donatedWhere = document.getElementById(donatedFor).innerText;
            // add to transaction history

            const parentDiv = document.getElementById('transaction-history');
            const div = document.createElement('div');
            const p = document.createElement('p');
            const h6 = document.createElement('h6');
            p.innerText = `${donatedAmount} taka is ${donatedWhere}`;

            const now = new Date();
            const formattedDate = now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZoneName: 'short' });
            h6.innerText = `Date: ${formattedDate}`;

            div.appendChild(p);
            div.appendChild(h6);
            
            parentDiv.appendChild(div);

            document.getElementsByTagName(`${div}`).styles.background

        }
        else {
            alert("Donation should be number and greater than 0");
            document.getElementById(modalId).classList.add('hidden');
        }
}