/* structs.c: study the struct in C */
#include <stdio.h>
#include <stdlib.h> /* for malloc */
#include <string.h> /* for strcpy */
struct a_tag
{
  char c;
  int i;
  char *w;
};

void update_a(int test_num, struct a_tag a);
void update_p(int test_num, struct a_tag *p);
struct a_tag return_struct(void);
struct a_tag *return_ptr(void);
struct a_tag *return_bad(void);

int main()
{
  struct a_tag a1, a2, a3; /* structs */
  struct a_tag *p1 = &a1;  /* p1 points to a1 */
  struct a_tag *p3, *p4;   /* more pointers */
  /* initialize a1 */
  a1.c = 'X';
  a1.i = 99;
  a1.w = (char *)malloc(20);
  strcpy(a1.w, "Now is the time");
  /* printing related to a1, using p1 also */
  /* shows that update_a copies struct, while */
  /* update_p copies a pointer to the struct */
  update_a(1, a1);
  update_a(1, a1);
  update_a(1, a1);
  update_p(2, &a1);
  update_a(3, a1);
  update_p(4, &a1);
  /* = copies struct on right into struct on left */
  // a2 = a1;
  // update_a(5, a2);
  // /* change a1, and a2 gets changed also! */
  // strcpy(a1.w, "Quick brown foxes");
  // update_a(6, a2);
  // /* try out returns, first returning a struct */
  // a3 = return_struct();
  // update_a(7, a3);
  // /* then try returning a pointer to a struct */
  // p3 = return_ptr();
  // update_p(8, p3);
  // /* finally return a pointer to local auto storage */
  // p4 = return_bad();
  // update_p(9, p4);
  return 0;
}

/* update_a: print a struct passed by value (copied) */
void update_a(int test_num, struct a_tag a)
{
  printf("Test %i, ", test_num);
  printf("Passing struct,  fields: c:%c, i:%3i, w:\"%s\"\n",
         a.c, a.i, a.w);
  /* increment below has no effect back in main */
  a.i++; /* same as (a.i)++ */
}

/* update_a: print a struct where pointer is passed */
void update_p(int test_num, struct a_tag *p)
{
  printf("Test %i, ", test_num);
  printf("Passing pointer, fields: c:%c, i:%3i, w:\"%s\"\n",
         p->c, p->i, p->w); /* p -> c same as (*p).c */
  /* increment below changes struct back in main */
  p->i++; /* same as (p->i)++ */
}

/* return_struct: return a struct by value (copied) */
struct a_tag return_struct(void)
{
  struct a_tag a;
  a.c = 'Y';
  a.i = 88;
  a.w = "My dog has fleas";
  /* can return local auto storage, because it is copied */
  return a;
}

/* return_ptr: return a pointer to a struct */
struct a_tag *return_ptr(void)
{
  struct a_tag *p;
  p = (struct a_tag *)malloc(sizeof(struct a_tag));
  p->c = 'Z'; /* same as (*p).c = 'Z' */
  p->i = 77;  /* same as (*p).i = 77 */
  p->w = "Yours does too";
  return p;
}

/* return_bad: return local auto storage through */
/*   a pointer to a struct--a serious error! */
struct a_tag *return_bad(void)
{
  struct a_tag *p;
  struct a_tag a;
  p = &a;
  p->c = 'U'; /* same as (*p).c = 'U' */
  p->i = 666; /* same as (*p).i = 666 */
  p->w = "Should screw up";
  return p;
}