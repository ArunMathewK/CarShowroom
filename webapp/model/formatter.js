sap.ui.define([], function(){
return {
	statusAvilable: function(statusText){
		if(statusText !== "Available"){
			return sap.ui.core.IconColor.Negative;
		}else {
			return sap.ui.core.IconColor.Positive;
		}
	},
	status:function(statusText){
		if(statusText === "Available"){
			return sap.ui.core.ValueState.Success;
		}else if(statusText === "Pending"){
			return sap.ui.core.ValueState.Warning;
		}
		else {
			return sap.ui.core.ValueState.Error;
		}
	}
};
});