public static void getPrime(int num) {
	int i = 2;
	boolean isPrime = true;

	while (i <= num) {
		isPrime = true;

		for (int n = 2; n < i; n++) {
			if (i % n == 0) {
				isPrime = false;
        break;
			}
			continue;
		}

		if (isPrime == true)
			System.out.println(i);
		i++;
	}
}
