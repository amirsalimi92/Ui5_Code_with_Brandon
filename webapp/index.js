sap.ui.define(['sap/ui/core/ComponentContainer'], function (CompCont) {
  'use strict'

  new CompCont({
    name: 'myapp',
    settings: {
      id: 'myapp'
    },
    async: true
  }).placeAt('content')
})
