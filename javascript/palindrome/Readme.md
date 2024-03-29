# CODE CHALLENGE 9

## Palindrome

## PROBLEM DOMAIN:

- Ask the candidate to write a function to validate whether or not a Linked list is palindrome
- Help the candidate understand the definition of a Palindrome if he/she is unsure of it.
    - A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward.
- Avoid utilizing any of the built-in methods available in your language.
- This problem can be solved using different approaches:
- Using a helper data structure (Array or Linked List) to keep track of the nodes.
    - This method takes O(n) and uses O(n) extra space.
    - Reversing the Linked List, and checking for equality of the reversed part.


EXAMPLE:

- INPUT																						  OUTPUT

- head->{t}->{a}->{c}->{o}->{c}->{a}->{t}						  TRUE

- head->{m}->{o}->{o}->->{m}												  TRUE

- head->{h}->{o}->{u}->{s}->{e}											  FALSE

## UML

![Palindrome](https://user-images.githubusercontent.com/120413183/233535463-afe1c88e-0088-479a-8302-8a694b29aeb2.png)

