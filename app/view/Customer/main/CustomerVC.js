Ext.define("SalesApp.view.Customer.main.CustomerVC", {
  extend: "Ext.app.ViewController",
  alias: "controller.customerVC",
  Add: function (btn) {
    Ext.create("SalesApp.view.Customer.content.CustomerFC").show();
  },
  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },
  onConfirm: function (choice) {
    if (choice === "yes") {
    }
  },
  onEditButtonClick: function () {
    var grid = this.getView().down("grid"),
      selection = grid.getSelectionModel().getSelection();
    var store = this.getViewModel().getStore("listCustomer");

    if (selection.length === 1) {
      var customerRecord = selection[0];

      var editForm = Ext.create("Ext.form.Panel", {
        bodyPadding: 10,
        defaultType: "textfield",
        items: [
          {
            xtype: "textfield",
            fieldLabel: "Customer ID:",
            name: "customerID",
            value: customerRecord.get("customerID"),
          },
          {
            xtype: "textfield",
            fieldLabel: "Name:",
            name: "name",
            value: customerRecord.get("name"),
          },
          {
            xtype: "textfield",
            fieldLabel: "Address:",
            name: "address",
            value: customerRecord.get("address"),
          },
          {
            xtype: "textfield",
            fieldLabel: "Address2:",
            name: "address2",
            value: customerRecord.get("address2"),
          },
          {
            xtype: "textfield",
            fieldLabel: "City:",
            name: "city",
            value: customerRecord.get("city"),
          },
          {
            xtype: "textfield",
            fieldLabel: "Contact:",
            name: "contact",
            value: customerRecord.get("contact"),
          },
          {
            xtype: "textfield",
            fieldLabel: "Data ID:",
            name: "dataID",
            value: customerRecord.get("dataID"),
          },
        ],
      });
      var editWindow = Ext.create("Ext.window.Window", {
        title: "Edit Customer",
        layout: "fit",
        modal: true,
        items: [editForm],
        buttons: [
          {
            text: "Save",
            handler: function () {
              customerRecord.set(editForm.getValues());
              store.sync({
                success: function () {
                  Ext.Msg.alert("Success", "Customer updated successfully!");
                },
                failure: function () {
                  Ext.Msg.alert("Error", "Unable to update customer!");
                },
              });

              editWindow.close();
            },
          },
          {
            text: "Cancel",
            handler: function () {
              editWindow.close();
            },
          },
        ],
      });

      editWindow.show();
    } else {
      Ext.Msg.alert("Error", "Please select a single customer to edit.");
    }
  },
  onCheckboxChange: function (column, rowIndex, checked, record) {
    if (checked) {
        var customerID = record.get('customerID')
        var store = Ext.create('SalesApp.store.CustomerStore', {});
        store.load({
            scope: this,
            callback: function () {
                var data = store.findRecord("customerID", customerID)
                if (data == null) {
                    store.add([{ customerID: customerID }]);
                    store.sync();
                }

            }
        })

    } else {
        // perform some action when the checkbox is unchecked
        var customerID = record.get('customerID')
        var store = Ext.create('SalesApp.store.CustomerStore', {});
        store.load({
            scope: this,
            callback: function () {
                var data = store.findRecord("customerID", customerID)
                if (data == null) {
                } else {
                    store.remove(store.findRecord('customerID', customerID, 0, false, false, false));
                    store.sync();
                }

            }
        })

    }
},
});
