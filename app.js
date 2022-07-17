'use strict';

var theme = 'dark-theme'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {

    document.body.classList.toggle('light-theme'),
    document.body.classList.toggle('dark-theme')

    const className = document.body.className
    theme = document.body.className

});