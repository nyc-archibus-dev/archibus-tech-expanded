var techXEmailViewCtrl = View.createController('techXEmailView', {
	
	sendEmail: function(emId) {
		
		// TODO: Breakout parameters into variable for example readability.
		var result = Workflow.callMethod('AbCommonResources-EmailService-notifyUsingArchibusIdentity', emId, 'em', 'Example - Send Email from View', getMessage('bodyEmail'), 'AbCommonResources');
		
		if (result.code == "executed") {
			View.showMessage(getMessage("msgConfirmEmail"));
		}
	}
});

function techxEmailFunc() {
	var row = this;
	var primaryKey = this.grid.getPrimaryKeysForRow(row);
    if (primaryKey["em.em_id"])
		techXEmailViewCtrl.sendEmail(primaryKey["em.em_id"]);
	
}