Ext.define("SalesApp.view.Customer.main.CustomerVModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.cusVM",
  stores: {
    listCustomer: {
      type: "listCustomer",
    },
  },
});
