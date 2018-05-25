public class PrimeNumber1 {
	public static void getPrime(int num, ArrayList<Integer> prime) {
		prime.add(2);

		for (int i = 2; i <= num; i++) {
			for (int j = 0; prime.size() > j; j++) {
				if (i % prime.get(j) == 0) break; // not prime pass

				if (j + 1 == prime.size()) // prime
					prime.add(i);
			}
		}

		for (Integer result : prime) {
			System.out.println(result);
		}
	}

	public static void main(String[] args) {
		ArrayList<Integer> prime = new ArrayList<Integer>();

		long start = System.currentTimeMillis();
		getPrime(30000, prime);
		long end = System.currentTimeMillis();
		System.out.println("Elapsed Time : " + (end - start));
	}
}
