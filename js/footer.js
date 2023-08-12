(() => {
    const footerContainer =  document.getElementById('footer')
    console.log(footerContainer)

    footerContainer.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})();