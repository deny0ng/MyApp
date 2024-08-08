Ext.define("SalesApp.store.CustomerStore", {
  extend: "Ext.data.Store",
  alias: "store.listCustomer",
  storeId: "listCustomer",
  model: "SalesApp.model.Customers",
  identifier: "sequential",
  proxy: {
    type: "rest",
    enablePaging: true,
    api: {
      create: "https://localhost:44380/api/Customer/AddCustomer",
      read: "https://localhost:44380/api/Customer/GetCustomers",
      update: "https://localhost:44380/api/Customer/EditCustomer/{customerId}",
    },
    reader: {
      type: "json",
      rootProperty: "listCustomers",
      successProperty: "statusCode",
      messageProperty: "statusMessage",
    },
    writer: {
      type: "json",
    },
  },
  autoLoad: true,
});
