const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(num_1, num_2){
    return num_1+num_2;
})

console.log (totalBatteries);