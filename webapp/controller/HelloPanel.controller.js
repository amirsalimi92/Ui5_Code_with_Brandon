sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  function (Controller, MsgToast, Fragment) {
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
      },

      onOpenDialog: function () {
        var oView = this.getView()

        // Create the dialog lazily
        if (!this.byId('helloDialog')) {
          // Load asynchronous XML Fragment
          Fragment.load({
            id: oView.getId(),
            name: 'myapp.view.HelloDialog',
            controller: this
          }).then(function (oDialog) {
            // Connect dialog to the root view of component (model, lifecycle)
            oView.addDependent(oDialog)
            oDialog.open()
          })
        } else {
          this.byId('helloDialog').open()
        }
      },

      onCloseDialog: function () {
        this.byId('helloDialog').close()
      }
    })
  }
)
