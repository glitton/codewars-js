/*
P: Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists. If any of the input lists is empty, return an empty string, or an empty array/list

E:
# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"

Explanation:
category A: 20 books (ABART)
category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
category C: 50 books (CDXEF)
category W: 0 books
*/

console.log(
  ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
  ["A", "B", "C", "D"]
); //(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

console.log(
  ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
  ["A", "B"]
); // "(A : 200) - (B : 1140)"
