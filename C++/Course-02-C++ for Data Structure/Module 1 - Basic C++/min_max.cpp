#include<bits/stdc++.h>
using namespace std;

// int my_min(int a, int b)
// {
//   if(a < b) return a;
//   else return b;
// }

// int my_max(int a, int b)
// {
//   if(a > b) return a;
//   else return b;
// }

int main()
{
  int a, b;
  cin >> a >> b;

  int mn = min(a, b);
  int mx = max(a, b);

  cout << "min: " << mn << endl;
  cout << "max: " << mx << endl;

  return 0;
}