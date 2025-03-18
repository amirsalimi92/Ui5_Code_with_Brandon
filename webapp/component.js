sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
  ],
  function (UIComp, JSONModel, ResModel) {
    'use strict'
    return UIComp.extend('myapp.Component', {
      metadata: {
        rootView: {
          viewName: 'myapp.view.App',
          type: 'XML',
          async: true,
          id: 'app'
        }
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

        // Set i18n model
        var i18nModel = new ResModel({
          bundleName: 'myapp.i18n.i18n',
          supportedLocales: [''],
          fallbackLocale: ''
        })
        this.setModel(i18nModel, 'i18n')
      }
    })
  }
)
