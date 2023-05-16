function difference(arr1, arr2) {
    // Concatenate the arrays and remove duplicate values
    const combinedArray = [...new Set([...arr1, ...arr2])];
  
    // Filter out elements that are present in both arrays
    const diffArray = combinedArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
  
    return diffArray;
  }
  
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  