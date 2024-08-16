Ext.define("SalesApp.view.Customer.main.CustomerVMain", {
  extend: "Ext.Panel",
  alias: "widget.listCustomer",
  title: "Customers",
  controller: "customerVC",
  xtype: "customerVMain",
  viewModel: {
    type: "cusVM",
  },
  tbar: [
    {
      text: "Add Customer",
      listeners: {
        click: "Add",
      },
    },
    {
      text: "Edit Customer",
      listeners: {
        click: "onEditButtonClick",
      },
    },

    {
      xtype: "textfield",
      emptyText: "Search Customers...",
      listeners: {
        change: "onCustomerSearch",
      },
    },
  ],
  items: [
    {
      xtype: "grid",
      bind: {
        store: "{listCustomer}",
      },
      emptyText: "No customers found",
      itemId: "grids",
      height: 830, // Set the height of the grid
      scrollable: true, // Enable scrolling
      columns: [
        { text:"",
          xtype: 'checkcolumn',
          dataIndex: 'selected',
          width: 100,
          listeners: {
            checkchange: 'onCheckboxChange'
          }
        }, 
        {
          header: "CustomerID",
          dataIndex: "customerID",
          flex: 1,
          allowNull: true,
        },
        {
          header: "Name",
          dataIndex: "name",
          flex: 1,
          allowNull: true,
        },
        {
          header: "Address",
          dataIndex: "address",
          flex: 1,
          allowNull: true,
        },
        {
          header: "Address2",
          dataIndex: "address2",
          flex: 1,
          allowNull: true,
        },
        {
          header: "City",
          dataIndex: "city",
          flex: 1,
          allowNull: true,
        },
        {
          header: "Contact",
          dataIndex: "contact",
          flex: 1,
          allowNull: true,
        },
        {
          header: "DataID",
          dataIndex: "dataID",
          flex: 1,
          allowNull: true,
        },
      ],
      dockedItems: [
        {
          xtype: "pagingtoolbar",
          dock: "bottom",
          displayInfo: true,
        },
      ],
    },
  ],
});
