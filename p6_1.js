// <!-- //You are a data scientist. While analyzing the data in an array, you found a lot of bad entries in it.
//Now you want to clean the data by removing &#39;null&#39;, &#39;0&#39;, &#39;&quot;&quot;&#39;, &#39;false&#39;, &#39;undefined&#39; and &#39;NaN&#39; values
//from the array. Your task is to:
//1. Clean the data and keep only numeric values for further analysis.
//2. Print the number of elements finally available.
//3. Shuffle the array and display
//Write the code snippet in JavaScript. -->


var arr = [NaN, 0, 15, false, -22, "&#39;&#39;" , undefined, 47, null];
var arr1=[];
var count=0;
for(var i=0;i<arr.length;i++)
{
  if(isNaN(arr[i]) || arr[i]===0 || arr[i]=== "&#39;&#39;" || arr[i]===false || arr[i]===undefined || arr[i]===null)
  {
    continue;
  }
  else
  {
    arr1.push(arr[i]);
    count++;
  }
}
console.log(arr1);
console.log(count);
console.log(arr1.sort(function(a, b){return 0.5 - Math.random()}));

