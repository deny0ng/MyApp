Ext.define("SalesApp.view.Customer.content.CustomerCC", {
  extend: "Ext.app.ViewController",
  alias: "controller.addcustomercontroller",
  addcustomercontroller: function (btn) {
    var win = btn.up("window");
    var data = win.down("form").getValues();
    var store = Ext.create("SalesApp.store.CustomerStore", {});
    console.log(data);
    store.load({
      scope: this,
      callback: function () {
        store.add(data);
        store.sync();
        win.hide();
        Ext.Msg.alert("Success", "Added SuccessFul!");
      },
    });
  },
});
