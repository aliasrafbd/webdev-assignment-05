// Donation Calculation for Noakhali 
document.getElementById('btn-donate-now-n')
    .addEventListener('click', function(event){
        event.preventDefault();
        InnerTextBalanceCalculator('input-donate-now-n', 'account-balance-noakhali', 'my_modal_n', 'donate-for-n');
});


// Donation Calculation for Feni 
document.getElementById('btn-donate-now-f')
    .addEventListener('click', function(event){
        event.preventDefault();
        InnerTextBalanceCalculator('input-donate-now-f', 'account-balance-feni', 'my_modal_f', 'donate-for-f');
});


// Donation Calculation for Quota 
document.getElementById('btn-donate-now-q')
    .addEventListener('click', function(event){
        event.preventDefault();
        InnerTextBalanceCalculator('input-donate-now-q', 'account-balance-quota', 'my_modal_q', 'donate-for-q');
});
