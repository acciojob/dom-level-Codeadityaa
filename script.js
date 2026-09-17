//your JS code here. If required.
// 1. Element ko uski ID 'level' se select karein
let currentElement = document.getElementById("level");
let levelCount = 0;

// 2. Loop tab tak chalega jab tak hum tree me sabse upar (null) nahi pahunch jaate
while (currentElement) {
    levelCount++; // Har step par level ki ginti 1 badhayein
    currentElement = currentElement.parentElement; // Ek kadam upar waale parent par jayein
}

// 3. Required format me final result ko alert ke zariye dikhaein
alert(`The level of the element is: ${levelCount}`);
