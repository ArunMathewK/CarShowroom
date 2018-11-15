sap.ui.define([
	'jquery.sap.global',
	"sap/ui/core/mvc/Controller",
	"Showroom/CarShowroom/model/formatter",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"

], function (jQuery, Controller, formatter, MessageToast, History) {
	"use strict";

	return Controller.extend("Showroom.CarShowroom.controller.Notification", {
		formatter: formatter,
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
	var ob = this.getView().byId("model").getProperty("text");
		var oModel = this.getView().getModel("myModel");
		for (var i = 0; i < oModel.oData.Sales.length; i++) {
				if (ob === oModel.oData.Sales[i].CarName) {
				this.getView().byId("TopSpeed").setText(oModel.oData.Sales[i].TopSpeed);
					this.getView().byId("Engine").setText(oModel.oData.Sales[i].Engine);
						this.getView().byId("Cost").setText(oModel.oData.Sales[i].Cost);
						break;
				}

			}
		},
		onNavBack: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Pro");
		},

		service: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Notificationservice");
		},
		Accept: function () {
			var oModel = this.getView().getModel("myModel");
			var ob = this.getView().byId("model").getProperty("text");
			// var Transaction = oModel.oData.notification;
			// oModel.setProperty("/notification/", "accepted");
			for (var i = 0; i < oModel.oData.notification.length; i++) {
				if (ob === oModel.oData.notification[i].CarName) {
					oModel.oData.notification[i].av = "Available";
				}

			}
			oModel.setProperty("/notification", oModel.oData.notification);
			for (var i = 0; i < oModel.oData.Sales.length; i++) {
				if (ob === oModel.oData.Sales[i].CarName) {
					oModel.oData.Sales[i].av = "Available";

				}
			}
			oModel.setProperty("/Sales", oModel.oData.Sales);
			var items = {

				CarName: ob,
				av: "Available",
					"status":"*"

			};
			var itemData = [];

			for (var i = 0; i < oModel.oData.notificationback.length; i++) {
				itemData.push(oModel.oData.notificationback[i]);
			}
			itemData.push(items);
			oModel.setProperty("/notificationback", itemData);

			MessageToast.show(ob + " is Accepted");
		},

		Reject: function () {
			var oModel = this.getView().getModel("myModel");
			var ob = this.getView().byId("model").getProperty("text");

			for (var i = 0; i < oModel.oData.notificationback.length; i++) {
				if (ob === oModel.oData.notificationback[i].CarName) {
					oModel.oData.Sales[i].av = "Available";

				}
			} // var Transaction = oModel.oData.notification;
			// oModel.setProperty("/notification/", "accepted");
			for (var i = 0; i < oModel.oData.notification.length; i++) {
				if (ob === oModel.oData.notification[i].CarName) {
					oModel.setProperty("/notification/" + i + "/av", "rejected");
				}
			}
			var items = {

				CarName: ob,
				av: "rejected",

			};
			var itemData = [];

			for (var i = 0; i < oModel.oData.notificationback.length; i++) {
				itemData.push(oModel.oData.notificationback[i]);
			}
			itemData.push(items);
			oModel.setProperty("/notificationback", itemData);
			MessageToast.show(ob + " is Rejected");
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Showroom.CarShowroom.view.Notification
		 */
		onInit: function () {

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Showroom.CarShowroom.view.Notification
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Showroom.CarShowroom.view.Notification
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Showroom.CarShowroom.view.Notification
		 */
		//	onExit: function() {
		//
		//	}

	});

});