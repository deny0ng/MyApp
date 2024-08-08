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
      //
    }
  },
});
