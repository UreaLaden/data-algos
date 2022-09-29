function binarySearch(arr,val){
    let left = 0
    let right = arr.length - 1;
    if (arr[right] < val) return -1;
    if(arr[right] === val) return right;
    if(arr[left] === val) return left;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(val === arr[mid]){
            return mid;
        }
        if(val > arr[mid]){
            left = mid - 1
        }
        if(val < arr[mid]){
            right = mid + 1;
        }
    }
    return -1;
}
function binarySearchV2(arr,val){
    let left = 0
    let right = arr.length - 1;
    if (arr[right] < val) return -1;
    if(arr[right] === val) return right;
    if(arr[left] === val) return left;
    while(left < right && arr[mid] !== val){
        let mid = ~~((left + right) / 2);
        left = val > arr[mid] ? mid - 1 : left;
        right = val < arr[mid] ? mid + 1 : right;        
    }
    return arr[mid] === val ? mid : -1;
}

t1 = performance.now()
console.log(binarySearch([2,4,6,8,10,18,32,51,65],65)); //Runtime 3.9850000143051147 seconds 
t2 = performance.now()
console.log(`Runtime ${t2-t1} seconds`);

t3 = performance.now()
console.log(binarySearchV2([2,4,6,8,10,18,32,51,65],65)); //Runtime V2 -0.11609995365142822 seconds
t4 = performance.now()
console.log(`Runtime V2 ${t3-t4} seconds`);