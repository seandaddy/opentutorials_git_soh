function primeSieve(n){
  var a = Array(n = n/2),
      t = (Math.sqrt(4+8*n)-2)/4,
      u = 0,
      r = [];
  for(var i = 1; i <= t; i++){
    u = (n-i)/(1+2*i);
    for(var j = i; j <= u; j++) a[i + j + 2*i*j] = true;
  }
  for(var i = 0; i<= n; i++) !a[i] && r.push(i*2+1);
  return r;
}

var primes = [];
console.time("primes");
primes = primeSieve(1000000);
console.timeEnd("primes");
console.log(primes.length);

function getPrime(num) {
	int i = 2;
	boolean isPrime = true;

	while (i <= num) {
		isPrime = true;

		for (int n = 2; n < i; n++) {
			if (i % n == 0) {
				isPrime = false;
			}
			continue;
		}

		if (isPrime == true)
			System.out.println(i);
		i++;
	}
}
