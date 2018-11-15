sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"Showroom/CarShowroom/model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("Showroom.CarShowroom.controller.Notificationservice", {
	formatter: formatter,
		service: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Notification");
		},
			item: function (oevent) {
			var obj = oevent.getParameters().listItem.getBindingContext("myModel").getObject(),
				jmodel = this.getView().getModel("myModel");
			jmodel.setProperty("/Panel", obj);
			if (obj.av == "Pending") {
				this.getView().byId("Reject").setVisible(true);
				this.getView().byId("Accept").setVisible(true);
			} else {
				this.getView().byId("Reject").setVisible(false);
				this.getView().byId("Accept").setVisible(false);
			}

		},
			onNavBack: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Pro");
		}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Showroom.CarShowroom.view.Notificationservice
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Showroom.CarShowroom.view.Notificationservice
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Showroom.CarShowroom.view.Notificationservice
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Showroom.CarShowroom.view.Notificationservice
		 */
		//	onExit: function() {
		//
		//	}

	});

});