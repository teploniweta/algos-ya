let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [a, b, c] = fileContent.split(/\s+/).map(Number);
    function* productionCycle(N, K, M) {
        let ans = 0;
        function* recursiveProduction(N, K, M) {
            if (N && K && M) {
                if (N < K || K < M) return;
                let noUse = 0;
                const count_K = Math.floor(N / K);
                noUse += N % K;
                const countMFromOneK = Math.floor(K / M);
                const noUseFromOneK = K % M;
                ans += countMFromOneK * count_K;
                noUse += noUseFromOneK * count_K;
                yield* recursiveProduction(noUse, K, M);
            }
        }
        yield* recursiveProduction(N, K, M);
        return ans;
    }
    const generator = productionCycle(a, b, c);
    const result = generator.next().value;
    fs.writeFile('output.txt', String(result), function(error){
        if(error) throw error;
        console.log(String(result));
    });
});