'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    console.log('Inside submit handler for Name field of MODAL')

    event.preventDefault()

    const input = $('#name').val()
    console.log('Name entered is: ', input)

    // Hide the modal from displaying to the suer
    $('#myModal').modal('hide')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
