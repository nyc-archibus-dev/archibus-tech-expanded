var techXActionMenuCtrl = View.createController('techXActionMenu', {
	blList: '',
	
	ShowSelectedBl: function() {
		var blArray = this.techXActionMenu_grid.getPrimaryKeysForSelectedRows();
		var tmpList = "";
		for (i = 0; i < blArray.length; i++) {
			var blRec = blArray[i];
			tmpList += blRec["bl.bl_id"] + ", ";
		}
		tmpList = tmpList.substring(0, tmpList.length - 2);
		this.blList = tmpList;
		View.showMessage(this.blList);
	},
	DeselectBl: function() {
		this.techXActionMenu_grid.unselectAll(true);
	}
});