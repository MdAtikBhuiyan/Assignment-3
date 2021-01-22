
// problem-01 ( Kilometer to Meter)

function kilometerToMeter(inputValue) {
    
    var convertInMeter;

    if (inputValue > 0) {
        convertInMeter = inputValue * 1000;
    }
    else {
        convertInMeter = "wrong Input !! Please enter the positive number.";
    }
    return convertInMeter;
}

// problem-02 ( Budget Calculator )

function budgetCalculator(watch,phone,laptop){
    var totalBudget = 0;
    if(watch > 0 && phone > 0 && laptop > 0){
        totalBudget = (watch*50) + (phone*100) + (laptop*500);
    }
    else{
        totalBudget =  "wrong Input !! Please enter the all Values in positive number.";
    }
    return totalBudget;
}

// problem-03 ( Hotel Cost )

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10 && days > 0) {
        totalCost = days * 100;
    }
    else if (days <= 20 && days > 0) {
        var first_10_days = 10 * 100;
        var remain = days - 10;
        var second_10_days = remain * 80;
        totalCost = first_10_days + second_10_days;
    }
    else if (days > 20 && days > 0) {
        var first_10_days = 10 * 100;
        var second_10_days = 10 * 80;
        var remain = days - 20;
        var after_20_days = remain * 50;
        totalCost = first_10_days + second_10_days + after_20_days;
    }
    else {
        totalCost = "wrong Input !! Please enter the positive number.";
    }
    
    return totalCost;
}


// problem-04 ( Mega Friend )

function megaFriend(name){
    var largestName = name[0];
    if(name.length <=0 || Array.isArray(name) == false){
        largestName = "wrong input !! please enter the name at array."
    }
    else{
        for(var i=0; i<name.length; i++){
            if(typeof name[i] != "string"){
                largestName = "wrong input !! please enter the string type value in array."
            }
            else{
                if(name[i].length > largestName.length){
                    largestName = name[i];
                }
            }
        }
    }
    return largestName;
}


console.log(kilometerToMeter(8));  // problem-01 ( Kilometer to Meter)

console.log(budgetCalculator(2,6,4));  // problem-02 ( Budget Calculator )

console.log(hotelCost(12));  // problem-03 ( Hotel Cost )

console.log(megaFriend(["atik","nobin","rafi","nahid sharif","rad","abid"]))  // problem-04 ( Mega Friend )