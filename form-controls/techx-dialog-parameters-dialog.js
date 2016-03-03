var techXDialogParamsDialogCtrl = View.createController('techXDialogParamsDialog', {
	cityId: '',
	siteId: '',
	infoValue: '',
	
	// Auto-wired event from grid row click.
	afterInitialDataFetch: function() {
		this.cityId = View.getOpenerView().dialogConfig.blCity;
		this.siteId = View.getOpenerView().dialogConfig.blSite;
		this.infoValue = View.getOpenerView().dialogConfig.infoType;
		
		var cityRestrict = {'city.city_id': this.cityId};
		var siteRestrict = {'site.site_id': this.siteId};
		
		this.techXDialogParams_cityForm.refresh(cityRestrict);
		this.techXDialogParams_siteForm.refresh(siteRestrict);
		
		switch (this.infoValue) {
			case "site":
				this.techXDialogParams_cityForm.show(false);
				this.techXDialogParams_siteForm.show(true);
				break;
			case "city":
				this.techXDialogParams_cityForm.show(true);
				this.techXDialogParams_siteForm.show(false);
				break;
		}
	}
});