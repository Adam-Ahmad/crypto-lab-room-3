// Part 3: Vigenère Cipher
// Vigenère uses a keyword for multiple shifts. Example: HELLO with keyword KEY →
// RIJVS

// Exercise 3.1: Manual Encryption

// Encrypt: ATTACK Keyword: LEMON ===> LXFOPV

// A  T  T  A  C  K
// 0  19 19 0  2  10
// L  E  M  O   N  L
// 11 4  12 14  13 11
//
// 11 23  31 14 15 21
// L  X   F  O  P  V

// Decrypt: LXFOPV Keyword: LEMON ===> ATTACK

// L  X  F  O   P  V
// 11 23  31 14 15 21
// L  E  M  O   N  L
// 11 4  12  14 13 11
//
// 0  19 19 0  2  10
// A  T  T  A  C  K
