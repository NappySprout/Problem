var sum_to_n_a = function(n) {
    // arithmetic summation
    return n < 0 ? 0 : (1+n)*n/2
};

var sum_to_n_b = function(n) {
    // for loop
    let sum = 0;
    for(let i = 0; i < n ; i++){
        sum += (i+1);
    }
    return sum;
};

var sum_to_n_c = function(n) {
    // recursion
    if (n < 0) return 0; //faulty input
    if (n==0 || n==1) return n; // base case
    return n + sum_to_n_c(n - 1);

};