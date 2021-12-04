(() => {
  console.log('scripts.js loaded')
  let codeAreas = document.querySelectorAll('.code-button');
  console.log(codeAreas)
  for (let i = 0; i < codeAreas.length; i++) {
    codeAreas[i].addEventListener('click', function() {
      codeAreas.style.backgroundColor = "red";
      codeAreas.select();
      codeAreas.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(codeAreas.value);
      alert('Copied to Text: ' + codeAreas.value);
    })
  }
})();
