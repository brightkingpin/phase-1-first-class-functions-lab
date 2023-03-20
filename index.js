// returnFirstTwoDrivers()
  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

// returnLastTwoDrivers()
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

// selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };

// fareDoubler()
  const fareDoubler = createFareMultiplier(2);

// fareTripler()  is defined
  const fareTripler = createFareMultiplier(3);

// selectDifferntDrivesr()   ...is defined
  const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
  };
  
  
