Ext.define("SalesApp.view.Customer.content.CustomerVModelContent", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.addcustomer",
  listCustomer: {
    store: {
      type: "listCustomers",
    },
  },
  data: {
    title: "Add Customer",
  },
});
