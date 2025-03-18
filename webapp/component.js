sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel'],
  function (UIComp, JSONModel) {
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
      }
    })
  }
)
