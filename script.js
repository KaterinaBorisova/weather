const calculate=document.querySelector('#btn');
calculate.addEventListener('click',counte);

const addCount=document.querySelector('#add');
addCount.addEventListener('click',choice);


function choice(e){
    e.preventDefault();
    tip.style.display='block';
}

function counte(e){
    e.preventDefault();
    const sum=document.querySelector('#bill').value;
    const totalTip=document.querySelector('#people').value;
    const totalSum=document.querySelector('#tip').value;

    if(bill===''|| people===''|| people<1) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста заполните все поля!'
        })
    }
    let tipPerson=sum/totalTip;
    let addPerson=(sum*totalSum)/totalTip;
    let sumPerson=tipPerson+addPerson;

    tipPerson=tipPerson.toFixed(2);
    addPerson=addPerson.toFixed(2);
    sumPerson=sumPerson.toFixed(2);

    document.querySelector('#one').textContent=tipPerson;
    document.querySelector('#two').textContent=addPerson;
    document.querySelector('#three').textContent=sumPerson;
}


