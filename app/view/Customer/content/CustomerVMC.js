Ext.define("SalesApp.view.Customer.content.CustomerVMC", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.addcustomer",
    stores: {
      listCustomer: {
        type: "listCustomer"
      }
    },
    data:{
      title: 'Add Customer',
  }

  });
  