const Settings = function( settingObj ){
  this.type = settingObj.type;
  this.scoring = settingObj.scoring;
  this.emphasis = settingObj.emphasis;
  this.equipment = settingObj.equipment;
  this.min_time = settingObj.min_time;
  this.max_time = settingObj.max_time;

  this.sortFunctions = {
    byMinTime: (a,b) => a.minTime - b.minTime;
    byMaxTime: (a,b) => a.maxTime - b.maxTime;
  }
};

Settings.prototype.filter = function ( wodArray ) {
  return wodArray.filter(wod => this.type == 'all' ? true : wod.type == this.type)
   .filter(wod => this.scoring == 'all' ? true : wod.scoring == this.scoring)
   .filter(wod => this.emphasis == 'all' ? true : wod.emphasis == this.emphasis)
   .filter(wod => this.equipment == 'all' ? true : wod.equipment == this.equipment)
   .filter(wod => this.min_time == 'all' ? true : wod.min_time == this.min_time)
   .filter(wod => this.max_time == 'all' ? true : wod.max_time == this.max_time);
};

Settings.prototype.search = function ( wodArray, searchString ) {
  const search = searchString.toLowerCase();
  return wodArray.filter(wod => {
    const allData = wod.reduce((all, prop) => {
      return all.concat(prop.toLowerCase().split(' '));
    }, []);
    return allData.includes(search);
  });
};

Settings.prototype.sort = function ( wodArray, sortType ) {
  return wodArray.sort(this.sortFunctions[sortType]);
};


const filterScoring = document.querySelector('#filter-scoring');
const filterEquipment = document.querySelector('#filter-equipment');
const filterType = document.querySelector('#filter-type');
const filterTime = document.querySelector('#filter-time');


const filterScoringHandler = (event) => {
  // change filter object
};
const filterEquipmentHandler = (event) => {
  // change filter object
};
const filterTypeHandler = (event) => {
  // change filter object
};
const filterTimeHandler = (event) => {
  // change filter object
};


filterScoring.addEventListener('change', filterScoringHandler);
filterEquipment.addEventListener('change', filterEquipmentHandler);
filterType.addEventListener('change', filterTypeHandler);
filterTime.addEventListener('change', filterTimeHandler);
