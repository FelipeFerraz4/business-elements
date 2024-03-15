const fullNameInput = document.getElementById('full_name');
const sendButton = document.getElementById('send');

let employee = {
    name: ''
};

sendButton.addEventListener('click',  () => {
    let name = fullNameInput.value;
    employee.name = name;
    console.log(employee);
})
