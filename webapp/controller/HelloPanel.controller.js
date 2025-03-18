sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  function (Controller, MsgToast) {
    'use strict'
    return Controller.extend('myapp.controller.HelloPanel', {
      onShowHello: function () {
        // Get a value from oModel
        // var oModel = this.getView().getModel()
        // var sName = oModel.getProperty('/recipient/name')

        // Read the i18n model
        var oBundle = this.getView().getModel('i18n').getResourceBundle()
        var sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name')
        var sMsg = oBundle.getText('helloMsg', [sRecipient])

        MsgToast.show(sMsg)
      }
    })
  }
)
