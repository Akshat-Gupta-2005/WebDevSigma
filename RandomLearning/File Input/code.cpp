#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ifstream in("input.txt");
    int n, t, m, k;
    in >> n;
    // cin >> t >> m >> k;
    for (int i = 0; i < n; ++i) {
        int x;
        in >> x;
        cout << x << " ";
    }
}