const form = document.querySelector('.login-form');




form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;
    console.log(formEl);
    const email = formEl.email.value;
    console.log(email);
  



    // const formEl = event.currentTarget.elements;
    // const email = formEl.email.value;
    // const password = formEl.password.value;

//     const formData = {
//         email,
//         password,
//     };

//   if (email==='' || password==='') {
//       alert('Please, fill all form fields');
//   } else {
//       console.log(formData);

//   }

//     form.reset();
    
     
};
