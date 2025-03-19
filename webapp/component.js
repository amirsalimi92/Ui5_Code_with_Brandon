sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    './controller/HelloDialog'
  ],
  function (UIComp, JSONModel, HelloDialog) {
    'use strict'
    return UIComp.extend('myapp.component', {
      metadata: {
        manifest: 'json'
      },

      init: function () {
        // Call the init function of the parent
        UIComp.prototype.init.apply(this, arguments)

        // Set data model
        var oData = {
          recipient: {
            name: 'Ui5'
          }
        }
        var oModel = new JSONModel(oData)
        this.setModel(oModel)

        // Define the dialog here
        this._helloDialog = new HelloDialog(this.getRootControl())
      },

      exit: function () {
        this._helloDialog.destroy()
        delete this._helloDialog
      },

      openHelloDialog: function () {
        this._helloDialog.open()
      }
    })
  }
)
