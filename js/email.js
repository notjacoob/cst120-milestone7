/*
Jacob Blair
CST120
Milestone 7
12/10/23
This is my own work
*/
let iter = 0;
const sendEmail = () => {
  iter++; // for id tracking
  const toastContainer = $("#toast-container"); // get toast container
  const email = $(`#inputEmail`).val(); // get email in form
  const subject = $(`#inputSubject`).val(); // get subject in form
  if (email != "" && subject != "") {
    const html = `<div class="toast p-1 col-6" role="alert" id="toast-${iter}">
                    <div class="toast-header">
                        <strong class="me-auto">Email Sent!</strong>
                        <small>Right now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                    </div>
                    ${email}: ${subject}
                </div>`; // create toast html using data from form
    toastContainer.append($(html)); // add toast to div container
    $(`#toast-${iter}`).toast("show"); // show toast
    setTimeout(() => {
      // delay so that we can still display the toast
      $("#email-form").submit()
    }, 2000)
  }
}; 
