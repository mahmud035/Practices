#include <stdio.h>
#include <string.h>

int main()
{
  char a[100];
  fgets(a, 22, stdin);
  a[22] = '\0';
  printf("%s", a);

  return 0;
}