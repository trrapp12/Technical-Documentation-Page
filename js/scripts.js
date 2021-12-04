(() => {
  console.log('scripts.js loaded')
  let codeAreas = document.querySelectorAll('.code-button');
  console.log(codeAreas)
  for (let i = 0; i < codeAreas.length; i++) {
    codeAreas[i].addEventListener('click', function() {
      // codeAreas.style.backgroundColor = "red";
      codeAreas[i].select();
      codeAreas[i].setSelectionRange(0, 99999);

      navigator.clipboard.writeText(codeAreas[i].value);
      alert('Copied to Text: ' + codeAreas[i].value);
    })
  }
})();
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
