document.querySelector('.circle-wrapper').addEventListener('click' ,function() {
  
  fetchRandomAdvice();
  
  

  


})

function fetchRandomAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (!response.ok) {
            // If the response is not OK, throw an error
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON from the response body
    })
    .then(data => {
        console.log(data); // Handle the parsed JSON data
        displayAdvice(data);
        
    })
    .catch(error => {
        console.error('Fetch error:', error); // Handle any errors that occurred
    });

}

function displayAdvice(adviceData){
  const adviceNumber = document.querySelector('.advice-number');
  const adviceStatement = document.querySelector('.advice-statement');

  const { id , advice} = adviceData.slip
  console.log(advice);
  console.log(id);

  adviceNumber.innerHTML= `<p>ADVICE #${id}</p>`;
  adviceStatement.innerHTML = `<h2>"${advice}"</h2>`
  
  
}
