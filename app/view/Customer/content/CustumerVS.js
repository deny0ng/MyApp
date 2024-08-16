Ext.define('SalesApp.view.Customer.content.CustomerVS', {
    extend: 'Ext.window.Window',
    alias: 'widget.grid.Panel',
    controller: 'addcustomercontroller',
    xtype: 'cvs',
    viewModel: {
        type: 'addcustomer'
    },
    bind: {
        title: '{title}',
    },
    layout: 'fit',
    resizable: true,
    closable: true,
    modal: true,
    height:700,
    width: 500,
    layout: {
        type: 'form',
        align: 'middle',
    },
    items: [{
        xtype: 'grid',
        itemId: 'grid',
        height: 700,
        bind: {
            store: '{selected}'
        },
        columns: [
            { header: 'Customer', dataIndex: 'moviename', flex: 1 },
            { header: 'RentCost', dataIndex: 'price', flex: 1 },
            { header: 'Image', dataIndex: 'url', flex: 1 },

        ]
    }],

});