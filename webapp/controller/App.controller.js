sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
  ],
  function (Controller, MsgToast, JsonM, ResModel) {
    'use strict'
    return Controller.extend('myapp.App', {
      onInit: function () {
        // Set the data model on the view
        var oData = {
          recipient: {
            name: 'Ui5'
          }
        }

        var oModel = new JsonM(oData)
        this.getView().setModel(oModel)

        // set i18n model
        var i18nModel = new ResModel({
          bundleName: 'myapp.i18n.i18n',
          supportedLocales: [''],
          fallbackLocale: ''
        })
        this.getView().setModel(i18nModel, 'i18n')
      },
      onShowHello: function () {
        var oModel = this.getView().getModel()
        var sName = oModel.getProperty('/recipient/name')

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
