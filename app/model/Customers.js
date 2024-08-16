Ext.define("SalesApp.model.Customers", {
  extend: "SalesApp.model.Base",
  fields: [
    { name: "customerID", type: "string", allowNull: true },
    { name: "name", type: "string", allowNull: true },
    { name: "address", type: "string", allowNull: true },
    { name: "address2", type: "string", allowNull: true },
    { name: "city", type: "string", allowNull: true },
    { name: "contact", type: "string", allowNull: true },
    { name: "dataID", type: "string", allowNull: true },
  ],
});
