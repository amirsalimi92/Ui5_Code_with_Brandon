sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'
  return Controller.extend('myapp.App', {
    onShowHello: function () {
      alert('Hello there!')
    }
  })
})
