//your JS code here. If required.
function updateOutput() {
  // Create a Promise that resolves after 1 second with the string "Hello, world!"
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });

  // When the Promise resolves, update the text of the HTML element with ID "output"
  myPromise.then((result) => {
    const outputElem = document.getElementById('output');
    outputElem.innerText = result;
  });
}

// Call the updateOutput() function to start the process
updateOutput();

