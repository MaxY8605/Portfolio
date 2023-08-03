var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      
      function opentab (tabname) {
          for(tablink of tablinks){
              tablink.classList.remove("active-link");
          }
          for(tabcontent of tabcontents){
            
              tabcontent.classList.remove("active-tab");
          }
          event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab");
        }

const scriptURL = 'https://script.google.com/macros/s/AKfycbymsGI6xk2KO2NeHHPoD5VJXArwuNLLkedcd98sMWqIodyXkiR_QmPyx7eS03SobzjK/exec'
const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
})
