'use strict'
// Updates the UI
// const store = require('../store.js')
const showDreamsTemplate = require('../templates/dream-listing.handlebars')
const showDreamTemplate = require('../templates/dream-expand.handlebars')
const editDreamTemplate = require('../templates/dream-edit.handlebars')

// AUTHENTICATION
const onSuccess = (message) => {
  $('#feedback').text(message)
  // the index and its value gets passed to the stored data
}

const onFailure = (message) => {
  $('#feedback').text(message)
}

const makeDreamSuccess = () => {
  $('.newDream').show()
}

const makeDreamFail = () => {
  onFailure("Couldn't retreive dream data.")
}
// on create dream success
const onCreateSuccess = () => {
  $('.newDream').hide()
  onSuccess('New Dream Saved')
}

const onCreateFail = () => {
  onFailure("Couldn't create dream.")
}

// On get dreams
const onGetDreamsSuccess = (data) => {
  const showDreamsHtml = showDreamsTemplate({ dreams: data.dreams })
  $('.dreams-content').html(showDreamsHtml)
  $('.dream-list').show()
  $('.getDreams').hide()
  onSuccess('Dream List Retrieved')
}

const onGetDreamsFailure = responseData => {
  onFailure("Couldn't retreive dreams data.")
}

// on expand dream
const onGetDreamSuccess = (data) => {
  const showDreamHtml = showDreamTemplate({ dream: data.dream }) /// SHOW DATA????
  $('.dreams-content').html(showDreamHtml)
  $('.getDreams').show()
  onSuccess('Dream Retrieved')
}

const onGetDreamFailure = responseData => {
  onFailure("Couldn't retreive dream data.")
}

const onEditDreamsSuccess = (dreamId) => {
  const editDreamHtml = editDreamTemplate({ dream: dreamId }) /// SHOW DATA????
  $('#edit-dreams').html(editDreamHtml)
  $('.dreams-content').hide()
  onSuccess('Make Changes')
}

const onEditDreamFail = () => {
  onFailure("Couldn't edit dream.")
}

const dreamDeleteSuccess = () => {
  onFailure('Dream successfully deleted.')
}

const dreamDeleteFail = () => {
  onFailure('Error.')
}

const onSaveEditSuccess = data => {
  const showDreamHtml = showDreamTemplate({ dream: data.dream }) /// SHOW DATA????
  $('.dreams-content').html(showDreamHtml)
  $('.dreams-content').show()
  onSuccess('Updates Saved')
}

const onSaveEditFail = () => {
  onFailure("Couldn't save changes.")
}

module.exports = {
  onCreateSuccess,
  onGetDreamSuccess,
  onGetDreamFailure,
  onGetDreamsSuccess,
  onGetDreamsFailure,
  onEditDreamsSuccess,
  onSaveEditSuccess,
  makeDreamSuccess,
  onFailure,
  onSuccess,
  onSaveEditFail,
  onEditDreamFail,
  onCreateFail,
  makeDreamFail,
  dreamDeleteFail,
  dreamDeleteSuccess
}
