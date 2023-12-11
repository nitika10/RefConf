sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jquery.sap.global",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, jQuery) {
        "use strict";

        return Controller.extend("com.oil.refconf.controller.Main", {
            
            onInit: function () {
                // var oModel = new JSONModel(sap.ui.require.toUrl("refinaryns/refineryconfig/model/graph.json"));
                // this.getView().setModel(oModel);
                this._graph = this.byId("graph");
            
                // // Add the custom statuses to the graph
                // this._graph.setBorderColor("RED");
                // this._graph.setBorderColor("BLUE");

                // custom labels
                this._graph.setCustomLegendLabel({
                    label: "Custom node label",
                    status: "Success",
                });
        
                // custom labels
                this._graph.setCustomLegendLabel({
                    label: "Custom line label",
                    status: "Warning",
                    isNode: false
                });
        
                this._graph.setCustomLegendLabel({
                    label: "Custom group label",
                    status: "Standard",
                    isGroup: true
                });
        
                this._graph.attachEvent("graphReady", function (oEvent) {
                    // show legend by default
                    jQuery(".sapSuiteUiCommonsNetworkGraphLegend").show();
                });
            },
            legendChange: function (oEvent) {
                var sKey = oEvent.getSource().getProperty("selectedKey");
                if (sKey === "Default") {
                    this._graph.destroyLegend();
                } else {
                    this._graph.setLegend(new sap.ui.core.HTML({
                        content: "<B>Custom HTML in legend</B>"
                    }));
                }
            },
        });
    });

    function newFunction() {
        return "blue";
    }