function findMinMax() {
    array=Array.isArray=[25,30,80,16,40];
    minValue = Infinity;
    maxValue = -Infinity;


  document.querySelector('.array').textContent = array;
    for (item of array) {
        if (item < minValue)
            minValue = item;
  
        if (item > maxValue)
            maxValue = item;
    }
  
    document.querySelector('.min').textContent = minValue;
    document.querySelector('.max').textContent = maxValue;
}