sap.ui.define(['sap/ui/core/mvc/Controller'], function (Controller) {
  'use strict'
  return Controller.extend('myapp.controller.App', {
    onInit: function () {},

    onOpenDialog: function () {
      this.getOwnerComponent().openHelloDialog()
    }
  })
})
