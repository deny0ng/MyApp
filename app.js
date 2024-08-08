/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SalesApp.Application',

    name: 'SalesApp',

    requires: [
        // This will automatically load all classes in the SalesApp namespace
        // so that application classes do not need to require each other.
        'SalesApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'SalesApp.view.main.Main'
});
