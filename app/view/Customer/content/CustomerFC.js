Ext.define("SalesApp.view.Customer.content.CustomerFC", {
  extend: "Ext.window.Window",
  controller: "addcustomercontroller",
  xtype: "customerform",
  viewModel: {
    type: "addcustomer",
  },

  bind: {
    title: "{ADD CUSTOMER}",
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
          name: "Name",
          fieldLabel: "name",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "Name",
          fieldLabel: "name",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          name: "Address",
          fieldLabel: "address",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "Address",
          fieldLabel: "address",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "City",
          fieldLabel: "city",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "Contact",
          fieldLabel: "contact",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          anchor: "100%",
          name: "DataId",
          fieldLabel: "dataId",
          allowBlank: false,
        },
        {
          xtype: "button",
          text: "Add",
          minWidth: 140,
          listeners: {
            click: "addcustomer",
          },
        },
      ],
    },
  ],
});
