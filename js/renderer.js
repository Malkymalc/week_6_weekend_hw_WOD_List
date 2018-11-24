

function refreshPage(){
  // 1. Get all WODS
  const allWods =
  // 2. Filter list
  const allWodsFiltered = allWods.filter(wod => filterer(wod));
  // 3. Render wod tiles to page
  allWodsFiltered.forEach(wod => {
    const wodTile = createNewWODTile(new WOD(wod_data));
    renderTo(wodTile);
  });
}
