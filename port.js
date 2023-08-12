function port(){
    Swal.fire({
        title: 'How old are you?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Your age',
        inputAttributes: {
          min: 8,
          max: 120,
          step: 1
        },
        inputValue: 25
      })
}
 function openwindow(){
    window.open("https://www.linkedin.com/in/zeeshan-haider-747465260/")
}


let date = new Date();
let fullyear = date.getFullYear()
let year = document.getElementById("year");
year.innerHTML = fullyear
console.log(fullyear)