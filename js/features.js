document.getElementById('btn-donation').addEventListener('click', function() {
    showSectionById('donate-section');
    document.getElementById('btn-donation').classList.add('bg-custom-col-green');
    document.getElementById('btn-history').classList.remove('bg-custom-col-green');
});

document.getElementById('btn-history').addEventListener('click', function() {
    showSectionById('history-section');
    document.getElementById('btn-history').classList.add('bg-custom-col-green');
    document.getElementById('btn-donation').classList.remove('bg-custom-col-green');
    document.getElementById('footer-bg').classList.remove('bg-yellow-50');
});

