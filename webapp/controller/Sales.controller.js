sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
		"sap/m/MessageToast",
		"sap/ui/model/json/JSONModel"
], function (Controller, Filter, FilterOperator, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("Showroom.CarShowroom.controller.Sales", {
		onInit: function () {

			this.getView().setModel(new JSONModel(), "jmodel");
			// this.getView().getModel("jmodel").setProperty("/oModel", Enames);
			this.getView().getModel("jmodel").setProperty("/editable", false);
		},

		onBeforeRendering: function () {
			var oModel = this.getView().getModel("myModel");
			var Transaction = oModel.oData.eighteen;
			oModel.setProperty("/Eighteen", Transaction);
		},
		onSortTeam: function (oEvent) {
			var olist1 = oEvent.getParameters().value;

			var oModel = this.getView().getModel("myModel");
			if (olist1 === "2018") {
				oModel.setProperty("/Eighteen", oModel.oData.eighteen);
			} else if (olist1 === "2017") {
				oModel.setProperty("/Eighteen", oModel.oData.seventeen);
			} else if (olist1 === "2016") {
				oModel.setProperty("/Eighteen", oModel.oData.sixteen);
			} else if (olist1 === "2015") {
				oModel.setProperty("/Eighteen", oModel.oData.fifteen);
			}
		},
			Cancel: function () {
			this.getView().getModel("jmodel").setProperty("/editable", false);
			this.getView().byId("savebtn").setVisible(false);
			this.getView().byId("editBtn").setVisible(true);
			this.getView().byId("cancelbtn").setVisible(false);
			MessageToast.show("Cancelled");
		},
			Save: function () {
			this.getView().getModel("jmodel").setProperty("/editable", false);
			this.getView().byId("cancelbtn").setVisible(false);
			this.getView().byId("savebtn").setVisible(false);
			this.getView().byId("editBtn").setVisible(true);
			MessageToast.show("Data Saved");
		},
	onCustomerSearch: function (event) {
			var olist = this.getView().byId("idCustomerdetails"),
				arr = [],
				binding,
				filters;
			// filtersa;
			filters = new Filter({
				filters: [
					new Filter("Name", FilterOperator.Contains, event.getSource().getValue()),
					new Filter("CarNumber", FilterOperator.Contains, event.getSource().getValue()),
					// new Filter("currency", FilterOperator.Contains, event.getSource().getValue())
				],
				and: false
			});
			// filtersa = new Filter("number", FilterOperator.Contains,event.getSource().getValue()); 
			binding = olist.getBinding("items");
			arr.push(filters);

			binding.filter(arr);

		},
			item: function (oevent) {
			var obj = oevent.getParameters().listItem.getBindingContext("myModel").getObject(),
				jmodel = this.getView().getModel("myModel");
			jmodel.setProperty("/Panel", obj);

		},
			Edit: function () {
			this.getView().getModel("jmodel").setProperty("/editable", true);
			this.getView().byId("cancelbtn").setVisible(true);
			this.getView().byId("savebtn").setVisible(true);
			this.getView().byId("editBtn").setVisible(false);
		},
		graph: function (oevent) {
			var oView = this.getView();
			var oDialog = oView.byId("idCloseDialog10");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "Showroom.CarShowroom.Fragment.Graph", this);
				oView.addDependent(oDialog);
			}
			var combovalue = this.getView().byId("combo")._lastValue;
			if (combovalue === "2018") {
				this.getView().byId("idGraph").bindData("myModel>/eighteen");
			} else if (combovalue === "2017") {
				this.getView().byId("idGraph").bindData("myModel>/seventeen");
			} else if (combovalue === "2016") {
				this.getView().byId("idGraph").bindData("myModel>/sixteen");
			} else if (combovalue === "2015") {
				this.getView().byId("idGraph").bindData("myModel>/fifteen");
			}

			oDialog.open();
		},
		ocClosefrg: function () {
			this.getView().byId("idCloseDialog10").close();
		},
			ocClosefrg1: function () {
			this.getView().byId("helloDialog9").close();
		},
			ocClosefrg2: function () {
			this.getView().byId("idCloseDialog101").close();
		},

		handleNav: function (evt) {
			var navCon = this.byId("navCon");
			var target = evt.getSource().data("target");
			if (target) {
				var animation = this.byId("animationSelect").getSelectedKey();
				navCon.to(this.byId(target), animation);
			} else {
				navCon.back();
			}
		},
		onItemPress: function (oevent) {
			var ob = oevent.getParameters().listItem.getBindingContext("myModel").getObject();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if(ob.av=="Available"){
			oRouter.navTo("Bill", {
				carname: ob.CarName,
				amount: ob.Cost,
				crore: ob.CostCrore,
				stock:ob.av  
			});
}else{
		MessageToast.show(ob.CarName+" Not Available in Showroom, Check in Production");
}
		},
		onSearch: function (event) {
			var olist = this.getView().byId("table"),
				arr = [],
				bind, filters;
			filters = new Filter({
				filters: [
					new Filter("CarName", FilterOperator.Contains, event.getSource().getValue())
				],
				and: false
			});
			arr.push(filters);
			bind = olist.getBinding("items");
			bind.filter(arr);
		},
		_productionfragment: function () {
			if (!this._oDialog) {
				// create dialog via fragment factory
				var sId = this.createId("helloDialog1"),
					oView = this.getView();
				this._oDialog = sap.ui.xmlfragment(sId, "Showroom.CarShowroom.Fragment.Production", this);
				oView.addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		// oProduction: function (event) {
		// 	this._productionfragment().open();
		// },
		// onItemPress1:function(){
		// 	 var oView = this.getView();
  //       var oDialog = oView.byId("helloDialog9");
  //       // create dialog lazily
  //       if (!oDialog) {
  //          // create dialog via fragment factory
  //          oDialog = sap.ui.xmlfragment(oView.getId(), "Showroom.CarShowroom.Fragment.table",this);
  //          oView.addDependent(oDialog);
  //       }


  //       oDialog.open();
  //    }
		
	oProduction:function(){
		var oView = this.getView();
			var oDialog = oView.byId("idCloseDialog101");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "Showroom.CarShowroom.Fragment.Production", this);
				oView.addDependent(oDialog);
			}
		

			oDialog.open();
	},
		logOut: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Index");
		},

	

	});

});