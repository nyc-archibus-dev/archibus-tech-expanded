var techXDialogParamsCtrl = View.createController('techXDialogParams', {
	//View.getOpenerView().dialogConfig.customParam;
	
	// Auto-wired event from grid row click.
	techXDialogParams_grid_onClickItem: function(row) {
		var blRec = row.getRecord();
		var blCity = blRec.getValue('bl.city_id');
		var blSite = blRec.getValue('bl.site_id');
		var infoType = $('selectDialogType').value;
		
		if (infoType) {
			View.openDialog('techx-dialog-parameters-dialog.axvw', null, false, {
				width: 700,	
				height: 500, 
				closeButton: false,
				maximize: false,
				// List as many parameters as you like.
				infoType: infoType,
				blCity: blCity,
				blSite: blSite
			});
		} else {
			showMessage("Error: console values not set correctly");
		}
	}
});