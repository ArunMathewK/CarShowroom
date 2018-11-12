sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Showroom.CarShowroom.controller.Index", {

		logIn: function () {

			var ob1 = this.getView().byId("uid").getValue();
			var ob2 = this.getView().byId("psw").getValue();
			if (ob1 === "" && ob2 === "") {

				MessageToast.show("Enter the User Name and Password");
				this.getView().byId("uid").setValueState("Error");
				this.getView().byId("psw").setValueState("Error");

			} else if (ob1 === "Arun" && ob2 === "Arun123") {

				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Service");
				this.getView().byId("psw").setValueState("None");
				this.getView().byId("uid").setValueState("None");
				this.getView().byId("psw").setValue("");
				this.getView().byId("uid").setValue("");

				MessageToast.show("Logedin Successfully");

			} else if (ob1 === "Shruthi" && ob2 === "Shruthi123") {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Sales");
				this.getView().byId("psw").setValueState("None");
				this.getView().byId("uid").setValueState("None");
				this.getView().byId("psw").setValue("");
				this.getView().byId("uid").setValue("");

				MessageToast.show("Logedin Successfully");

			}
			 else if (ob1 === "Production" && ob2 === "Production123") {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Pro");
				this.getView().byId("psw").setValueState("None");
				this.getView().byId("uid").setValueState("None");
				this.getView().byId("psw").setValue("");
				this.getView().byId("uid").setValue("");

				MessageToast.show("Logedin Successfully");

			}else if (ob1 === "") {

				MessageToast.show("Enter the Usewr Name");
				this.getView().byId("uid").setValueState("Error");
			} else if (ob2 === "") {

				MessageToast.show("Enter Password");
				this.getView().byId("psw").setValueState("Error");
			} else if (ob1 !== "Arun" && ob2 !== "Arun123") {

				MessageToast.show("Enter the Currect user name and Password");
				this.getView().byId("psw").setValueState("Error");
				this.getView().byId("uid").setValueState("Error");
			} else if (ob2 !== "Arun123") {

				MessageToast.show("Password is Wrong");
				this.getView().byId("psw").setValueState("Error");
				this.getView().byId("uid").setValueState("None");
			}else if (ob2 !== "Shruthi123") {

				MessageToast.show("Password is Wrong");
				this.getView().byId("psw").setValueState("Error");
				this.getView().byId("uid").setValueState("None");
			}  else if (ob1 !== "Arun") {

				MessageToast.show("Enter the Currect user name");
				this.getView().byId("uid").setValueState("Error");
				this.getView().byId("psw").setValueState("None");
			} else if (ob1 !== "Shruthi") {

				MessageToast.show("Enter the Currect user name");
				this.getView().byId("uid").setValueState("Error");
				this.getView().byId("psw").setValueState("None");
			}

		}

	});
});