Ext.define("SalesApp.view.Customer.content.CustomerFC", {
  extend: "Ext.window.Window",
  controller: "addcustomercontroller",
  xtype: "customerform",
  viewModel: {
    type: "addcustomer",
  },
  bind: {
    title: "{title}",
  },
  layout: "fit",
  resizable: false,
  closable: true,
  modal: true,
  layout: {
    type: "form",
    align: "middle",
  },
  items: [
    {
      xtype: "form",
      layout: "anchor",
      itemId: "addcustomer",
      bodyStyle: "background-color:none",
      items: [
        {
          xtype: "textfield",
          anchor: "100%",
          name: "customerID",
          fieldLabel: "Customer ID",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "name",
          fieldLabel: "Name",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          name: "address",
          fieldLabel: "Address",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "address2",
          fieldLabel: "Address2",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "city",
          fieldLabel: "City",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "contact",
          fieldLabel: "Contact",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "dataID",
          fieldLabel: "Data ID:",
          allowBlank: false,
        },
        {
          xtype: "button",
          text: "Add",
          minWidth: 140,
          listeners: {
            click: "addcustomercontroller",
          },
        },
      ],
    },
  ],
});
