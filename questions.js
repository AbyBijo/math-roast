// Math Roast — fixed question pool (100 questions, no algebra)
// 25 addition, 25 subtraction, 25 multiplication, 25 division.
// Every question: two numbers, max two digits (99). Options are shuffled at show-time.
// Generated deterministically; do not hand-edit answers — re-run the generator and re-verify.
const QUESTIONS = [
  {
    "id": 1,
    "type": "addition",
    "text": "89 + 19 = ?",
    "answer": 108,
    "options": [
      106,
      108,
      98,
      110
    ],
    "a": 89,
    "b": 19
  },
  {
    "id": 2,
    "type": "addition",
    "text": "16 + 23 = ?",
    "answer": 39,
    "options": [
      41,
      39,
      50,
      44
    ],
    "a": 16,
    "b": 23
  },
  {
    "id": 3,
    "type": "addition",
    "text": "32 + 52 = ?",
    "answer": 84,
    "options": [
      89,
      84,
      86,
      94
    ],
    "a": 32,
    "b": 52
  },
  {
    "id": 4,
    "type": "addition",
    "text": "92 + 42 = ?",
    "answer": 134,
    "options": [
      145,
      134,
      136,
      135
    ],
    "a": 92,
    "b": 42
  },
  {
    "id": 5,
    "type": "addition",
    "text": "75 + 80 = ?",
    "answer": 155,
    "options": [
      153,
      155,
      165,
      145
    ],
    "a": 75,
    "b": 80
  },
  {
    "id": 6,
    "type": "addition",
    "text": "99 + 56 = ?",
    "answer": 155,
    "options": [
      145,
      166,
      160,
      155
    ],
    "a": 99,
    "b": 56
  },
  {
    "id": 7,
    "type": "addition",
    "text": "74 + 80 = ?",
    "answer": 154,
    "options": [
      144,
      154,
      165,
      156
    ],
    "a": 74,
    "b": 80
  },
  {
    "id": 8,
    "type": "addition",
    "text": "15 + 92 = ?",
    "answer": 107,
    "options": [
      109,
      106,
      112,
      107
    ],
    "a": 15,
    "b": 92
  },
  {
    "id": 9,
    "type": "addition",
    "text": "12 + 27 = ?",
    "answer": 39,
    "options": [
      44,
      39,
      37,
      38
    ],
    "a": 12,
    "b": 27
  },
  {
    "id": 10,
    "type": "addition",
    "text": "60 + 60 = ?",
    "answer": 120,
    "options": [
      121,
      118,
      125,
      120
    ],
    "a": 60,
    "b": 60
  },
  {
    "id": 11,
    "type": "addition",
    "text": "34 + 41 = ?",
    "answer": 75,
    "options": [
      75,
      74,
      77,
      85
    ],
    "a": 34,
    "b": 41
  },
  {
    "id": 12,
    "type": "addition",
    "text": "29 + 61 = ?",
    "answer": 90,
    "options": [
      100,
      101,
      88,
      90
    ],
    "a": 29,
    "b": 61
  },
  {
    "id": 13,
    "type": "addition",
    "text": "50 + 87 = ?",
    "answer": 137,
    "options": [
      138,
      147,
      139,
      137
    ],
    "a": 50,
    "b": 87
  },
  {
    "id": 14,
    "type": "addition",
    "text": "45 + 14 = ?",
    "answer": 59,
    "options": [
      49,
      69,
      57,
      59
    ],
    "a": 45,
    "b": 14
  },
  {
    "id": 15,
    "type": "addition",
    "text": "62 + 54 = ?",
    "answer": 116,
    "options": [
      118,
      116,
      115,
      117
    ],
    "a": 62,
    "b": 54
  },
  {
    "id": 16,
    "type": "addition",
    "text": "47 + 56 = ?",
    "answer": 103,
    "options": [
      113,
      103,
      114,
      101
    ],
    "a": 47,
    "b": 56
  },
  {
    "id": 17,
    "type": "addition",
    "text": "12 + 20 = ?",
    "answer": 32,
    "options": [
      31,
      32,
      30,
      37
    ],
    "a": 12,
    "b": 20
  },
  {
    "id": 18,
    "type": "addition",
    "text": "49 + 95 = ?",
    "answer": 144,
    "options": [
      144,
      149,
      145,
      154
    ],
    "a": 49,
    "b": 95
  },
  {
    "id": 19,
    "type": "addition",
    "text": "88 + 92 = ?",
    "answer": 180,
    "options": [
      179,
      180,
      170,
      190
    ],
    "a": 88,
    "b": 92
  },
  {
    "id": 20,
    "type": "addition",
    "text": "72 + 18 = ?",
    "answer": 90,
    "options": [
      91,
      95,
      90,
      80
    ],
    "a": 72,
    "b": 18
  },
  {
    "id": 21,
    "type": "addition",
    "text": "26 + 87 = ?",
    "answer": 113,
    "options": [
      111,
      114,
      113,
      115
    ],
    "a": 26,
    "b": 87
  },
  {
    "id": 22,
    "type": "addition",
    "text": "79 + 46 = ?",
    "answer": 125,
    "options": [
      135,
      127,
      130,
      125
    ],
    "a": 79,
    "b": 46
  },
  {
    "id": 23,
    "type": "addition",
    "text": "34 + 79 = ?",
    "answer": 113,
    "options": [
      124,
      114,
      112,
      113
    ],
    "a": 34,
    "b": 79
  },
  {
    "id": 24,
    "type": "addition",
    "text": "97 + 44 = ?",
    "answer": 141,
    "options": [
      152,
      139,
      141,
      146
    ],
    "a": 97,
    "b": 44
  },
  {
    "id": 25,
    "type": "addition",
    "text": "14 + 35 = ?",
    "answer": 49,
    "options": [
      39,
      50,
      47,
      49
    ],
    "a": 14,
    "b": 35
  },
  {
    "id": 26,
    "type": "subtraction",
    "text": "49 - 19 = ?",
    "answer": 30,
    "options": [
      30,
      32,
      68,
      31
    ],
    "a": 49,
    "b": 19
  },
  {
    "id": 27,
    "type": "subtraction",
    "text": "64 - 52 = ?",
    "answer": 12,
    "options": [
      12,
      116,
      14,
      2
    ],
    "a": 64,
    "b": 52
  },
  {
    "id": 28,
    "type": "subtraction",
    "text": "64 - 63 = ?",
    "answer": 1,
    "options": [
      2,
      1,
      127,
      0
    ],
    "a": 64,
    "b": 63
  },
  {
    "id": 29,
    "type": "subtraction",
    "text": "20 - 10 = ?",
    "answer": 10,
    "options": [
      10,
      9,
      11,
      30
    ],
    "a": 20,
    "b": 10
  },
  {
    "id": 30,
    "type": "subtraction",
    "text": "51 - 12 = ?",
    "answer": 39,
    "options": [
      29,
      49,
      63,
      39
    ],
    "a": 51,
    "b": 12
  },
  {
    "id": 31,
    "type": "subtraction",
    "text": "53 - 39 = ?",
    "answer": 14,
    "options": [
      24,
      4,
      14,
      13
    ],
    "a": 53,
    "b": 39
  },
  {
    "id": 32,
    "type": "subtraction",
    "text": "88 - 57 = ?",
    "answer": 31,
    "options": [
      30,
      31,
      32,
      145
    ],
    "a": 88,
    "b": 57
  },
  {
    "id": 33,
    "type": "subtraction",
    "text": "57 - 36 = ?",
    "answer": 21,
    "options": [
      23,
      21,
      19,
      20
    ],
    "a": 57,
    "b": 36
  },
  {
    "id": 34,
    "type": "subtraction",
    "text": "51 - 41 = ?",
    "answer": 10,
    "options": [
      10,
      0,
      9,
      8
    ],
    "a": 51,
    "b": 41
  },
  {
    "id": 35,
    "type": "subtraction",
    "text": "52 - 25 = ?",
    "answer": 27,
    "options": [
      17,
      77,
      37,
      27
    ],
    "a": 52,
    "b": 25
  },
  {
    "id": 36,
    "type": "subtraction",
    "text": "89 - 31 = ?",
    "answer": 58,
    "options": [
      58,
      57,
      120,
      60
    ],
    "a": 89,
    "b": 31
  },
  {
    "id": 37,
    "type": "subtraction",
    "text": "74 - 72 = ?",
    "answer": 2,
    "options": [
      4,
      1,
      12,
      2
    ],
    "a": 74,
    "b": 72
  },
  {
    "id": 38,
    "type": "subtraction",
    "text": "87 - 52 = ?",
    "answer": 35,
    "options": [
      33,
      35,
      139,
      37
    ],
    "a": 87,
    "b": 52
  },
  {
    "id": 39,
    "type": "subtraction",
    "text": "47 - 29 = ?",
    "answer": 18,
    "options": [
      18,
      76,
      20,
      23
    ],
    "a": 47,
    "b": 29
  },
  {
    "id": 40,
    "type": "subtraction",
    "text": "20 - 16 = ?",
    "answer": 4,
    "options": [
      14,
      3,
      4,
      5
    ],
    "a": 20,
    "b": 16
  },
  {
    "id": 41,
    "type": "subtraction",
    "text": "47 - 21 = ?",
    "answer": 26,
    "options": [
      28,
      25,
      16,
      26
    ],
    "a": 47,
    "b": 21
  },
  {
    "id": 42,
    "type": "subtraction",
    "text": "38 - 37 = ?",
    "answer": 1,
    "options": [
      0,
      6,
      1,
      2
    ],
    "a": 38,
    "b": 37
  },
  {
    "id": 43,
    "type": "subtraction",
    "text": "96 - 53 = ?",
    "answer": 43,
    "options": [
      41,
      43,
      48,
      33
    ],
    "a": 96,
    "b": 53
  },
  {
    "id": 44,
    "type": "subtraction",
    "text": "26 - 5 = ?",
    "answer": 21,
    "options": [
      20,
      26,
      21,
      22
    ],
    "a": 26,
    "b": 5
  },
  {
    "id": 45,
    "type": "subtraction",
    "text": "40 - 21 = ?",
    "answer": 19,
    "options": [
      19,
      18,
      21,
      9
    ],
    "a": 40,
    "b": 21
  },
  {
    "id": 46,
    "type": "subtraction",
    "text": "22 - 19 = ?",
    "answer": 3,
    "options": [
      13,
      2,
      3,
      1
    ],
    "a": 22,
    "b": 19
  },
  {
    "id": 47,
    "type": "subtraction",
    "text": "46 - 36 = ?",
    "answer": 10,
    "options": [
      12,
      11,
      82,
      10
    ],
    "a": 46,
    "b": 36
  },
  {
    "id": 48,
    "type": "subtraction",
    "text": "57 - 10 = ?",
    "answer": 47,
    "options": [
      37,
      46,
      45,
      47
    ],
    "a": 57,
    "b": 10
  },
  {
    "id": 49,
    "type": "subtraction",
    "text": "61 - 23 = ?",
    "answer": 38,
    "options": [
      40,
      38,
      43,
      84
    ],
    "a": 61,
    "b": 23
  },
  {
    "id": 50,
    "type": "subtraction",
    "text": "70 - 8 = ?",
    "answer": 62,
    "options": [
      63,
      72,
      62,
      67
    ],
    "a": 70,
    "b": 8
  },
  {
    "id": 51,
    "type": "multiplication",
    "text": "4 × 8 = ?",
    "answer": 32,
    "options": [
      36,
      32,
      31,
      24
    ],
    "a": 4,
    "b": 8
  },
  {
    "id": 52,
    "type": "multiplication",
    "text": "16 × 3 = ?",
    "answer": 48,
    "options": [
      48,
      45,
      51,
      32
    ],
    "a": 16,
    "b": 3
  },
  {
    "id": 53,
    "type": "multiplication",
    "text": "16 × 4 = ?",
    "answer": 64,
    "options": [
      64,
      60,
      76,
      63
    ],
    "a": 16,
    "b": 4
  },
  {
    "id": 54,
    "type": "multiplication",
    "text": "5 × 3 = ?",
    "answer": 15,
    "options": [
      14,
      15,
      8,
      25
    ],
    "a": 5,
    "b": 3
  },
  {
    "id": 55,
    "type": "multiplication",
    "text": "8 × 3 = ?",
    "answer": 24,
    "options": [
      32,
      21,
      24,
      11
    ],
    "a": 8,
    "b": 3
  },
  {
    "id": 56,
    "type": "multiplication",
    "text": "11 × 6 = ?",
    "answer": 66,
    "options": [
      72,
      77,
      55,
      66
    ],
    "a": 11,
    "b": 6
  },
  {
    "id": 57,
    "type": "multiplication",
    "text": "19 × 4 = ?",
    "answer": 76,
    "options": [
      77,
      66,
      76,
      23
    ],
    "a": 19,
    "b": 4
  },
  {
    "id": 58,
    "type": "multiplication",
    "text": "11 × 9 = ?",
    "answer": 99,
    "options": [
      98,
      99,
      20,
      110
    ],
    "a": 11,
    "b": 9
  },
  {
    "id": 59,
    "type": "multiplication",
    "text": "8 × 4 = ?",
    "answer": 32,
    "options": [
      44,
      32,
      42,
      31
    ],
    "a": 8,
    "b": 4
  },
  {
    "id": 60,
    "type": "multiplication",
    "text": "9 × 8 = ?",
    "answer": 72,
    "options": [
      73,
      71,
      72,
      63
    ],
    "a": 9,
    "b": 8
  },
  {
    "id": 61,
    "type": "multiplication",
    "text": "5 × 5 = ?",
    "answer": 25,
    "options": [
      15,
      30,
      20,
      25
    ],
    "a": 5,
    "b": 5
  },
  {
    "id": 62,
    "type": "multiplication",
    "text": "2 × 4 = ?",
    "answer": 8,
    "options": [
      6,
      7,
      12,
      8
    ],
    "a": 2,
    "b": 4
  },
  {
    "id": 63,
    "type": "multiplication",
    "text": "15 × 7 = ?",
    "answer": 105,
    "options": [
      98,
      90,
      105,
      106
    ],
    "a": 15,
    "b": 7
  },
  {
    "id": 64,
    "type": "multiplication",
    "text": "14 × 7 = ?",
    "answer": 98,
    "options": [
      21,
      91,
      112,
      98
    ],
    "a": 14,
    "b": 7
  },
  {
    "id": 65,
    "type": "multiplication",
    "text": "3 × 2 = ?",
    "answer": 6,
    "options": [
      6,
      5,
      4,
      7
    ],
    "a": 3,
    "b": 2
  },
  {
    "id": 66,
    "type": "multiplication",
    "text": "14 × 9 = ?",
    "answer": 126,
    "options": [
      126,
      112,
      136,
      127
    ],
    "a": 14,
    "b": 9
  },
  {
    "id": 67,
    "type": "multiplication",
    "text": "11 × 8 = ?",
    "answer": 88,
    "options": [
      89,
      88,
      77,
      100
    ],
    "a": 11,
    "b": 8
  },
  {
    "id": 68,
    "type": "multiplication",
    "text": "12 × 11 = ?",
    "answer": 132,
    "options": [
      120,
      132,
      131,
      143
    ],
    "a": 12,
    "b": 11
  },
  {
    "id": 69,
    "type": "multiplication",
    "text": "2 × 8 = ?",
    "answer": 16,
    "options": [
      15,
      16,
      18,
      14
    ],
    "a": 2,
    "b": 8
  },
  {
    "id": 70,
    "type": "multiplication",
    "text": "5 × 12 = ?",
    "answer": 60,
    "options": [
      65,
      60,
      72,
      48
    ],
    "a": 5,
    "b": 12
  },
  {
    "id": 71,
    "type": "multiplication",
    "text": "15 × 8 = ?",
    "answer": 120,
    "options": [
      120,
      132,
      119,
      130
    ],
    "a": 15,
    "b": 8
  },
  {
    "id": 72,
    "type": "multiplication",
    "text": "9 × 10 = ?",
    "answer": 90,
    "options": [
      100,
      81,
      99,
      90
    ],
    "a": 9,
    "b": 10
  },
  {
    "id": 73,
    "type": "multiplication",
    "text": "13 × 8 = ?",
    "answer": 104,
    "options": [
      96,
      103,
      104,
      116
    ],
    "a": 13,
    "b": 8
  },
  {
    "id": 74,
    "type": "multiplication",
    "text": "17 × 3 = ?",
    "answer": 51,
    "options": [
      34,
      68,
      51,
      52
    ],
    "a": 17,
    "b": 3
  },
  {
    "id": 75,
    "type": "multiplication",
    "text": "7 × 6 = ?",
    "answer": 42,
    "options": [
      43,
      54,
      42,
      49
    ],
    "a": 7,
    "b": 6
  },
  {
    "id": 76,
    "type": "division",
    "text": "18 ÷ 3 = ?",
    "answer": 6,
    "options": [
      16,
      5,
      6,
      12
    ],
    "a": 18,
    "b": 3
  },
  {
    "id": 77,
    "type": "division",
    "text": "22 ÷ 11 = ?",
    "answer": 2,
    "options": [
      11,
      2,
      3,
      12
    ],
    "a": 22,
    "b": 11
  },
  {
    "id": 78,
    "type": "division",
    "text": "45 ÷ 9 = ?",
    "answer": 5,
    "options": [
      5,
      45,
      6,
      15
    ],
    "a": 45,
    "b": 9
  },
  {
    "id": 79,
    "type": "division",
    "text": "55 ÷ 11 = ?",
    "answer": 5,
    "options": [
      5,
      55,
      4,
      3
    ],
    "a": 55,
    "b": 11
  },
  {
    "id": 80,
    "type": "division",
    "text": "77 ÷ 7 = ?",
    "answer": 11,
    "options": [
      13,
      11,
      21,
      12
    ],
    "a": 77,
    "b": 7
  },
  {
    "id": 81,
    "type": "division",
    "text": "12 ÷ 2 = ?",
    "answer": 6,
    "options": [
      16,
      12,
      7,
      6
    ],
    "a": 12,
    "b": 2
  },
  {
    "id": 82,
    "type": "division",
    "text": "81 ÷ 9 = ?",
    "answer": 9,
    "options": [
      9,
      7,
      81,
      19
    ],
    "a": 81,
    "b": 9
  },
  {
    "id": 83,
    "type": "division",
    "text": "66 ÷ 11 = ?",
    "answer": 6,
    "options": [
      8,
      6,
      12,
      4
    ],
    "a": 66,
    "b": 11
  },
  {
    "id": 84,
    "type": "division",
    "text": "16 ÷ 2 = ?",
    "answer": 8,
    "options": [
      2,
      10,
      16,
      8
    ],
    "a": 16,
    "b": 2
  },
  {
    "id": 85,
    "type": "division",
    "text": "33 ÷ 11 = ?",
    "answer": 3,
    "options": [
      3,
      6,
      4,
      2
    ],
    "a": 33,
    "b": 11
  },
  {
    "id": 86,
    "type": "division",
    "text": "40 ÷ 4 = ?",
    "answer": 10,
    "options": [
      12,
      10,
      9,
      20
    ],
    "a": 40,
    "b": 4
  },
  {
    "id": 87,
    "type": "division",
    "text": "25 ÷ 5 = ?",
    "answer": 5,
    "options": [
      4,
      25,
      3,
      5
    ],
    "a": 25,
    "b": 5
  },
  {
    "id": 88,
    "type": "division",
    "text": "44 ÷ 4 = ?",
    "answer": 11,
    "options": [
      12,
      22,
      11,
      13
    ],
    "a": 44,
    "b": 4
  },
  {
    "id": 89,
    "type": "division",
    "text": "24 ÷ 4 = ?",
    "answer": 6,
    "options": [
      6,
      4,
      12,
      5
    ],
    "a": 24,
    "b": 4
  },
  {
    "id": 90,
    "type": "division",
    "text": "56 ÷ 8 = ?",
    "answer": 7,
    "options": [
      17,
      8,
      14,
      7
    ],
    "a": 56,
    "b": 8
  },
  {
    "id": 91,
    "type": "division",
    "text": "72 ÷ 8 = ?",
    "answer": 9,
    "options": [
      7,
      10,
      72,
      9
    ],
    "a": 72,
    "b": 8
  },
  {
    "id": 92,
    "type": "division",
    "text": "80 ÷ 10 = ?",
    "answer": 8,
    "options": [
      18,
      9,
      8,
      6
    ],
    "a": 80,
    "b": 10
  },
  {
    "id": 93,
    "type": "division",
    "text": "30 ÷ 10 = ?",
    "answer": 3,
    "options": [
      6,
      3,
      13,
      2
    ],
    "a": 30,
    "b": 10
  },
  {
    "id": 94,
    "type": "division",
    "text": "30 ÷ 5 = ?",
    "answer": 6,
    "options": [
      6,
      5,
      8,
      7
    ],
    "a": 30,
    "b": 5
  },
  {
    "id": 95,
    "type": "division",
    "text": "33 ÷ 3 = ?",
    "answer": 11,
    "options": [
      11,
      12,
      22,
      33
    ],
    "a": 33,
    "b": 3
  },
  {
    "id": 96,
    "type": "division",
    "text": "88 ÷ 11 = ?",
    "answer": 8,
    "options": [
      16,
      18,
      8,
      9
    ],
    "a": 88,
    "b": 11
  },
  {
    "id": 97,
    "type": "division",
    "text": "36 ÷ 12 = ?",
    "answer": 3,
    "options": [
      5,
      36,
      3,
      1
    ],
    "a": 36,
    "b": 12
  },
  {
    "id": 98,
    "type": "division",
    "text": "30 ÷ 3 = ?",
    "answer": 10,
    "options": [
      20,
      10,
      12,
      9
    ],
    "a": 30,
    "b": 3
  },
  {
    "id": 99,
    "type": "division",
    "text": "6 ÷ 3 = ?",
    "answer": 2,
    "options": [
      4,
      3,
      12,
      2
    ],
    "a": 6,
    "b": 3
  },
  {
    "id": 100,
    "type": "division",
    "text": "54 ÷ 9 = ?",
    "answer": 6,
    "options": [
      9,
      6,
      54,
      4
    ],
    "a": 54,
    "b": 9
  }
];

if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
if (typeof module !== "undefined") module.exports = QUESTIONS;
