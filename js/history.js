document.getElementById('history').addEventListener('click', function(){
    id('history-section').classList.remove('hidden');

    // create a div for history section 
    let div = createElement('div');
    div.classList.add('p-8', 'rounded-md', 'shadow-md', 'space-y-4');

    let historySection = id('history-section');
    historySection.appendChild(div);

    let value = function amount(amount){
        let value = amount;
        return value
    };

    console.log(value);
    
    
})