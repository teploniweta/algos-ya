let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [a, b, c] = fileContent.split(/\s+/).map(Number);
    let ans = 0;
    (function craftDetail (N, K, M) {
        if (N && K && M) {
            if (N < K || K < M) return;
            let noUse = 0;
            const count_K = Math.floor(N / K);
            noUse += N % K;
            const countMFromOneK = Math.floor(K / M);
            const noUseFromOneK = K % M;
            ans += countMFromOneK * count_K
            noUse += noUseFromOneK * count_K
            craftDetail(noUse, K, M)
        }
        else return;
    })(a, b, c);

    fs.writeFile('output.txt', String(ans), function(error){
        if(error) throw error;
        console.log(String(ans));
    });
});