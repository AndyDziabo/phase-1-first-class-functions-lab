const returnFirstTwoDrivers = myArray => myArray.slice(0,2);
const returnLastTwoDrivers = myArray => myArray.slice(myArray.length-2,myArray.length);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return (function(fare){return fare * multiplier});
} 
const fareDoubler = createFareMultiplier(2);
fareDoubler();
const fareTripler = createFareMultiplier(3);
fareTripler();
const selectDifferentDrivers = (myArray, funct) => funct(myArray);