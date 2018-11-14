sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/FilterOperator"
], function (Controller,Filter, JSONModel, FilterOperator) {
	"use strict";

	return Controller.extend("Showroom.CarShowroom.controller.Production", {
			blocklayout: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Notification");
		},
	
		inventory: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("inventory");
			},
			onUserNamePress: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Index");
			},
				onNavBack: function () {
			var oHistory, sPreviousHash, oRouter;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			 oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				oRouter.navTo("RouteView1", {}, true /*no history*/ );
			}
		}
	// handleNav: function (evt) {
	// 		var navCon = this.byId("navCon");
	// 		var target = evt.getSource().data("target");
	// 		if (target) {
	// 			var animation = this.byId("animationSelect").getSelectedKey();
	// 			navCon.to(this.byId(target), animation);
	// 		} else {
	// 			navCon.back();
	// 		}
	// 	},
	// 		logOut: function () {
	// 		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	// 		oRouter.navTo("Index");
	// 	},
	// 			onSearch: function (event) {
	// 		var olist = this.getView().byId("idInvenlist"),
	// 			arr = [],
	// 			binding,
	// 			filters;
	// 		// filtersa;
	// 		filters = new Filter({
	// 			filters: [
	// 				new Filter("PartsName", FilterOperator.Contains, event.getSource().getValue())
	// 			],
	// 			and: false
	// 		});
	// 		// filtersa = new Filter("number", FilterOperator.Contains,event.getSource().getValue()); 
	// 		binding = olist.getBinding("items");
	// 		arr.push(filters);

	// 		binding.filter(arr);

	// 	},
	// 		ocClosefrg8: function () {
	// 		this.getView().byId("idCloseDialog8").close();
	// 	},
	// 	notification:function(){
	// 			var oView = this.getView();
	// 		var oDialog = oView.byId("idCloseDialog8");
	// 		// create dialog lazily
	// 		if (!oDialog) {
	// 			// create dialog via fragment factory
	// 			oDialog = sap.ui.xmlfragment(oView.getId(), "Showroom.CarShowroom.Fragment.notification", this);
	// 			oView.addDependent(oDialog);
	// 		}
		

	// 		oDialog.open();
	// 	}
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Showroom.CarShowroom.view.Production
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Showroom.CarShowroom.view.Production
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Showroom.CarShowroom.view.Production
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Showroom.CarShowroom.view.Production
		 */
		//	onExit: function() {
		//
		//	}

	});

});