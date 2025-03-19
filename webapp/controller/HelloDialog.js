sap.ui.define(
  ['sap/ui/base/ManagedObject', 'sap/ui/core/Fragment'],
  function (ManagedObject, Fragment) {
    'use strict'
    return ManagedObject.extend('myapp.controller.HelloDialog', {
      constructor: function (oView) {
        this._oView = oView
      },

      exit: function () {
        delete this._oView()
      },

      open: function () {
        var oView = this._oView

        // Create the dialog lazily
        if (!oView.byId('helloDialog')) {
          var oFragmentController = {
            onCloseDialog: function () {
              oView.byId('helloDialog').close()
            }
          }
          // Load asynchronous XML Fragment
          Fragment.load({
            id: oView.getId(),
            name: 'myapp.view.HelloDialog',
            controller: oFragmentController
          }).then(function (oDialog) {
            // Connect dialog to the root view of component (model, lifecycle)
            oView.addDependent(oDialog)
            oDialog.open()
          })
        } else {
          oView.byId('helloDialog').open()
        }
      }
    })
  }
)
