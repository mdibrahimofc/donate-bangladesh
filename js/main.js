
    // noakhali flood card functionality

document.getElementById('donate-submit-noakhali').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('noakhali-balance');
    const noakhaliDonate = inputNumber('donate-amount-noakhali'); 

    // check validation for donate amount
    if(noakhaliDonate <= 0 || isNaN(noakhaliDonate) || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        document.getElementById('modal').classList.remove('hidden')

    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('noakhali-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-noakhali').value = '';


    // history data addes here 

    const cardText = documentText('noakhali-text')
    let div = createElement('div');
    div.classList.add('p-8', 'rounded-md', 'shadow-md', 'space-y-4');

    let historySection = id('history-section');
    historySection.insertBefore(div, historySection.firstChild);

    let h2 = document.createElement('h2');
    h2.classList.add('font-bold', 'sm:text-3xl');
    h2.innerHTML = `${noakhaliDonate} Taka is Donated for famine-2024 ${cardText}`
    
    div.appendChild(h2);

    // show date functionality is here 
    const date = new Date()
    let p = document.createElement('p');
    p.innerHTML = `Date: ${date}`
    div.appendChild(p);



})

    // feni flood card functionaliy 


document.getElementById('donate-submit-feni').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('feni-balance');
    const noakhaliDonate = inputNumber('donate-amount-feni'); 

    // check validation for donate amount
    if(noakhaliDonate <= 0 || isNaN(noakhaliDonate) || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        document.getElementById('modal').classList.remove('hidden')

    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('feni-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-feni').value = '';
    console.log({ mainBalance, noakhaliBalance, noakhaliDonate, updateMainBalance, updateNoakhaliBalance });
})

    // quota movement card functionality 


document.getElementById('donate-submit-quota').addEventListener('click', function () {
    const mainBalance = textNumber('main-balance');
    const noakhaliBalance = textNumber('quota-balance');
    const noakhaliDonate = inputNumber('donate-amount-quota'); 

    // check validation for donate amount
    if(noakhaliDonate <= 0 || isNaN(noakhaliDonate) || noakhaliDonate > mainBalance){
        alert('Enter a valid amount to proceed with the donation.');
        return
    }else{
        document.getElementById('modal').classList.remove('hidden')

    }

    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonate;
    const updateMainBalance = mainBalance - noakhaliDonate;
    document.getElementById('main-balance').textContent = updateMainBalance;
    document.getElementById('quota-balance').textContent = updateNoakhaliBalance;
    document.getElementById('donate-amount-quota').value = '';
    console.log({ mainBalance, noakhaliBalance, noakhaliDonate, updateMainBalance, updateNoakhaliBalance });
})


// close modal functionality is here 

document.getElementById('close-modal').addEventListener('click', function(){
    document.getElementById('modal').classList.add('hidden')
})
