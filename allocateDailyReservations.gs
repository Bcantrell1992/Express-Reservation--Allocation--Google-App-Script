function allocateDailyReservations() {
  //Express Storage Conversion Tracking Sheet.
  const app = SpreadsheetApp;
  
  //List of Facility Sheets
  const dataDump = app.getActiveSpreadsheet().getSheets()[0];
  const auburnSheet = app.getActiveSpreadsheet().getSheets()[1];
  const laceySheet = app.getActiveSpreadsheet().getSheets()[2];
  const everettSheet = app.getActiveSpreadsheet().getSheets()[3];
  const grahamSheet = app.getActiveSpreadsheet().getSheets()[4];
  const steptoeSheet = app.getActiveSpreadsheet().getSheets()[5];
  const southHillSheet = app.getActiveSpreadsheet().getSheets()[6];
  const puyallupSheet = app.getActiveSpreadsheet().getSheets()[7];
  const tacomaSheet = app.getActiveSpreadsheet().getSheets()[8];
  const testSheet = app.getActiveSpreadsheet().getSheets()[9];
  
  //Clear sheets before allocation of reservations
  laceySheet.clearContents();
  auburnSheet.clearContents();
  everettSheet.clearContents();
  grahamSheet.clearContents();
  steptoeSheet.clearContents();
  southHillSheet.clearContents();
  puyallupSheet.clearContents();
  tacomaSheet.clearContents();

  //Get number of rows in dataDumb sheet
  const dataDumpLength = dataDump.getLastRow() + 1;

  //Allocate Reservations to appropriate sheets
  for(let i = 1; i < dataDumpLength; i++) 
  { 
    switch(dataDump.getRange(i, 1).getValue()){
      case "Lacey Express Storage":
        const lastRowLacey = laceySheet.getLastRow() + 1;
        const copyValueLacey = dataDump.getRange('A' + i + ':H' + i);
        copyValueLacey.copyTo(laceySheet.getRange(lastRowLacey, 1))
        break;
      case "Auburn Express Storage":
        const lastRowAuburn = auburnSheet.getLastRow() + 1;
        const copyValueAuburn = dataDump.getRange('A' + i + ':H' + i);
        copyValueAuburn.copyTo(auburnSheet.getRange(lastRowAuburn, 1))
        break;
      case "Everett Express Storage": 
        const lastRowEverett = everettSheet.getLastRow() + 1;
        const copyValueEverett = dataDump.getRange('A' + i + ':H' + i);
        copyValueEverett.copyTo(everettSheet.getRange(lastRowEverett, 1))
        break;
      case "Graham Express Storage": 
        const lastRowGraham = grahamSheet.getLastRow() + 1;
        const copyValueGraham = dataDump.getRange('A' + i + ':H' + i);
        copyValueGraham.copyTo(grahamSheet.getRange(lastRowGraham, 1))
        break;
      case "Steptoe Mini Storage": 
        const lastRowSteptoe = steptoeSheet.getLastRow() + 1;
        const copyValueSteptoe = dataDump.getRange('A' + i + ':H' + i);
        copyValueSteptoe.copyTo(steptoeSheet.getRange(lastRowSteptoe, 1))
        break;
      case "South Hill Express Storage": 
        const lastRowSouthHill = southHillSheet.getLastRow() + 1;
        const copyValueSouthHill = dataDump.getRange('A' + i + ':H' + i);
        copyValueSouthHill.copyTo(southHillSheet.getRange(lastRowSouthHill, 1))
        break;
      case "Meridian Express Storage": 
        const lastRowMeridian = puyallupSheet.getLastRow() + 1;
        const copyValueMeridian = dataDump.getRange('A' + i + ':H' + i);
        copyValueMeridian.copyTo(puyallupSheet.getRange(lastRowMeridian, 1))
        break;
      case "Orchard Express Storage": 
        const lastRowOrchard = tacomaSheet.getLastRow() + 1;
        const copyValueOrchard = dataDump.getRange('A' + i + ':H' + i);
        copyValueOrchard.copyTo(tacomaSheet.getRange(lastRowOrchard, 1))
        break;
    }
  }
}