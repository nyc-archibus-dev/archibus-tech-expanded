var techxLargeExportCtrl = View.createController('techxLargeExport', {
	
	techxLargeExport_grid_onBigExport: function() {
			var parameters = {};
			
			var myTestGrid = View.panels.get("techxLargeExport_grid");
			
			var jobId = '';
			var jobParams = {};
			var cmdParams = {};
			
			jobParams.recordLimit = 5000;
			
			cmdParams.file = "howdy.xlsx";
			cmdParams.openDialog = true;
			
			jobId = myTestGrid.callXLSReportJob('Large Export from System','',jobParams);

			if (jobId != null) {
				var command = new Ab.command.exportPanel(cmdParams);
				command.displayReport(jobId, 'xls');
			}
	}
});