void getChe(int num) {
    int *arr;
    arr = (int *)malloc(sizeof(int) * num);
    int i = 2;

    for (i = 2; i <= num; i++) {
        arr[i] = i;
    }

    for (i = 2; i <= sqrt(num); i++) {
        if (arr[i] == 0)
            continue;
        for (int j = i + i; j <= num; j += i) {
            arr[j] = 0;
        }
    }

    for (i = 2; i <= num; i++) {
        if (arr[i] != 0)
            cout << arr[i] << " ";
    }
}
