sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("Showroom.CarShowroom.controller.NewCustomer", {

		onSave: function (oEvent) {

			var ob1 = this.getView().byId("i1").getValue();
			var ob2 = this.getView().byId("i2").getValue();
			var ob3 = this.getView().byId("i3").getValue();
			var ob4 = this.getView().byId("i4").getValue();
			var ob5 = this.getView().byId("i5").getValue();
			var ob6 = this.getView().byId("i6").getValue();
			var ob7 = this.getView().byId("i7").getValue();
			var ob8 = this.getView().byId("i8").getValue();

			if (ob1 !== "" && ob2 !== "" && ob3 !== "" && ob4 !== "" && ob5 !== "" && ob6 !== "" && ob7 !== "" && ob8 !== "") {

				var items = {
					Name: ob1,
					Email: ob2,
					MobileNo: ob3,
					CarModel: ob4,
					CarNumber: ob5,
					Date: ob6,
					Issue:ob7,
					PartsReplaced:ob7
				};
				var itemData = [];
				var oModel = this.getView().getModel("myModel");
				for (var i = 0; i < oModel.oData.CustomerServiceDetails.length; i++) {
					itemData.push(oModel.oData.CustomerServiceDetails[i]);
				}
				itemData.push(items);
				oModel.setProperty("/CustomerServiceDetails", itemData);
				itemData = oModel.getProperty("/CustomerServiceDetails", itemData);

				// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				// oRouter.navTo("Service");

				var id = this.createId("abc");
				// create dialog lazily
				if (!this.oDialog) {
					// create dialog via fragment factory
					this.oDialog = sap.ui.xmlfragment(id, "Showroom.CarShowroom.Fragment.msg", this);
					this.getView().addDependent(this.oDialog);
				}

				this.oDialog.open();

			} else if (ob1 === "") {

				MessageToast.show("fields Can't be Empty");
				this.getView().byId("i1").setValueState("Error");

			} else if (ob2 === "") {

				MessageToast.show("fields Can't be Empty");
				this.getView().byId("i2").setValueState("Error");
			} else if (ob3 === "") {

				MessageToast.show("fields Can't be Empty");
				this.getView().byId("i3").setValueState("Error");

			} else if (ob4 === "") {

				MessageToast.show("fields Can't be Empty");
				this.getView().byId("i4").setValueState("Error");
			} else if (ob5 === "") {

				MessageToast.show("fields Can't be Empty");
				this.getView().byId("i5").setValueState("Error");
			} else if (ob6 === "") {

				MessageToast.show("fields Can't be Empty");
				this.getView().byId("i6").setValueState("Error");
			}

		},
		onCancel: function () {

			this.getView().byId("i1").setValue("");
			this.getView().byId("i2").setValue("");
			this.getView().byId("i3").setValue("");
			this.getView().byId("i4").setValue("");
			this.getView().byId("i5").setValue("");
			this.getView().byId("i6").setValue("");
			this.getView().byId("i7").setValue("");
			this.getView().byId("i8").setValue("");

			this.getView().byId("i1").setValueState("None");
			this.getView().byId("i2").setValueState("None");
			this.getView().byId("i3").setValueState("None");
			this.getView().byId("i4").setValueState("None");
			this.getView().byId("i5").setValueState("None");
			this.getView().byId("i6").setValueState("None");
			this.getView().byId("i7").setValueState("None");
			this.getView().byId("i8").setValueState("None");

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Employee", {}, true);
			}
		},
		onClosemsg: function () {
			this.oDialog.close();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Service");

			this.getView().byId("i1").setValue("");
			this.getView().byId("i2").setValue("");
			this.getView().byId("i3").setValue("");
			this.getView().byId("i4").setValue("");
			this.getView().byId("i5").setValue("");
			this.getView().byId("i6").setValue("");
			this.getView().byId("i7").setValue("");
			this.getView().byId("i8").setValue("");
			
			this.getView().byId("i1").setValueState("None");
			this.getView().byId("i2").setValueState("None");
			this.getView().byId("i3").setValueState("None");
			this.getView().byId("i4").setValueState("None");
			this.getView().byId("i5").setValueState("None");
			this.getView().byId("i6").setValueState("None");
			this.getView().byId("i7").setValueState("None");
			this.getView().byId("i8").setValueState("None");
			}

	});

});