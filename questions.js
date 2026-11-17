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

const QUESTIONS_EASY = [
  {"id": 101, "type": "addition", "text": "3 + 1 = ?", "answer": 4, "options": [14, 8, 4, 3], "a": 3, "b": 1},
  {"id": 102, "type": "addition", "text": "4 + 9 = ?", "answer": 13, "options": [9, 26, 13, 17], "a": 4, "b": 9},
  {"id": 103, "type": "addition", "text": "6 + 6 = ?", "answer": 12, "options": [10, 1, 12, 9], "a": 6, "b": 6},
  {"id": 104, "type": "addition", "text": "7 + 8 = ?", "answer": 15, "options": [19, 12, 15, 13], "a": 7, "b": 8},
  {"id": 105, "type": "addition", "text": "6 + 5 = ?", "answer": 11, "options": [16, 12, 7, 11], "a": 6, "b": 5},
  {"id": 106, "type": "addition", "text": "8 + 8 = ?", "answer": 16, "options": [16, 19, 6, 116], "a": 8, "b": 8},
  {"id": 107, "type": "addition", "text": "4 + 7 = ?", "answer": 11, "options": [8, 14, 11, 6], "a": 4, "b": 7},
  {"id": 108, "type": "addition", "text": "6 + 1 = ?", "answer": 7, "options": [7, 12, 5, 3], "a": 6, "b": 1},
  {"id": 109, "type": "addition", "text": "2 + 3 = ?", "answer": 5, "options": [5, 4, 2, 7], "a": 2, "b": 3},
  {"id": 110, "type": "addition", "text": "7 + 4 = ?", "answer": 11, "options": [11, 1, 12, 10], "a": 7, "b": 4},
  {"id": 111, "type": "addition", "text": "8 + 5 = ?", "answer": 13, "options": [9, 11, 26, 13], "a": 8, "b": 5},
  {"id": 112, "type": "addition", "text": "2 + 2 = ?", "answer": 4, "options": [0, 24, 4, 2], "a": 2, "b": 2},
  {"id": 113, "type": "addition", "text": "1 + 5 = ?", "answer": 6, "options": [1, 5, 3, 6], "a": 1, "b": 5},
  {"id": 114, "type": "addition", "text": "5 + 3 = ?", "answer": 8, "options": [11, 6, 8, 4], "a": 5, "b": 3},
  {"id": 115, "type": "addition", "text": "4 + 4 = ?", "answer": 8, "options": [13, 5, 12, 8], "a": 4, "b": 4},
  {"id": 116, "type": "addition", "text": "1 + 8 = ?", "answer": 9, "options": [18, 5, 9, 29], "a": 1, "b": 8},
  {"id": 117, "type": "addition", "text": "7 + 5 = ?", "answer": 12, "options": [10, 12, 8, 16], "a": 7, "b": 5},
  {"id": 118, "type": "addition", "text": "9 + 5 = ?", "answer": 14, "options": [114, 18, 14, 17], "a": 9, "b": 5},
  {"id": 119, "type": "addition", "text": "7 + 9 = ?", "answer": 16, "options": [16, 19, 15, 21], "a": 7, "b": 9},
  {"id": 120, "type": "addition", "text": "3 + 6 = ?", "answer": 9, "options": [9, 109, 19, 7], "a": 3, "b": 6},
  {"id": 121, "type": "addition", "text": "4 + 6 = ?", "answer": 10, "options": [11, 10, 12, 20], "a": 4, "b": 6},
  {"id": 122, "type": "addition", "text": "1 + 6 = ?", "answer": 7, "options": [9, 8, 12, 7], "a": 1, "b": 6},
  {"id": 123, "type": "addition", "text": "4 + 1 = ?", "answer": 5, "options": [9, 15, 1, 5], "a": 4, "b": 1},
  {"id": 124, "type": "addition", "text": "5 + 4 = ?", "answer": 9, "options": [29, 4, 109, 9], "a": 5, "b": 4},
  {"id": 125, "type": "addition", "text": "9 + 7 = ?", "answer": 16, "options": [16, 20, 13, 6], "a": 9, "b": 7},
  {"id": 126, "type": "addition", "text": "3 + 3 = ?", "answer": 6, "options": [9, 106, 5, 6], "a": 3, "b": 3},
  {"id": 127, "type": "subtraction", "text": "4 − 3 = ?", "answer": 1, "options": [2, 5, 101, 1], "a": 4, "b": 3},
  {"id": 128, "type": "subtraction", "text": "5 − 1 = ?", "answer": 4, "options": [4, 104, 6, 3], "a": 5, "b": 1},
  {"id": 129, "type": "subtraction", "text": "5 − 4 = ?", "answer": 1, "options": [21, 1, 101, 2], "a": 5, "b": 4},
  {"id": 130, "type": "subtraction", "text": "6 − 2 = ?", "answer": 4, "options": [4, 9, 104, 2], "a": 6, "b": 2},
  {"id": 131, "type": "subtraction", "text": "5 − 2 = ?", "answer": 3, "options": [6, 3, 23, 103], "a": 5, "b": 2},
  {"id": 132, "type": "subtraction", "text": "7 − 6 = ?", "answer": 1, "options": [101, 1, 2, 21], "a": 7, "b": 6},
  {"id": 133, "type": "subtraction", "text": "7 − 5 = ?", "answer": 2, "options": [13, 22, 102, 2], "a": 7, "b": 5},
  {"id": 134, "type": "subtraction", "text": "8 − 1 = ?", "answer": 7, "options": [8, 17, 7, 11], "a": 8, "b": 1},
  {"id": 135, "type": "subtraction", "text": "7 − 4 = ?", "answer": 3, "options": [1, 23, 3, 103], "a": 7, "b": 4},
  {"id": 136, "type": "subtraction", "text": "3 − 2 = ?", "answer": 1, "options": [2, 1, 11, 6], "a": 3, "b": 2},
  {"id": 137, "type": "subtraction", "text": "7 − 3 = ?", "answer": 4, "options": [9, 3, 8, 4], "a": 7, "b": 3},
  {"id": 138, "type": "subtraction", "text": "7 − 1 = ?", "answer": 6, "options": [6, 2, 10, 11], "a": 7, "b": 1},
  {"id": 139, "type": "subtraction", "text": "6 − 4 = ?", "answer": 2, "options": [1, 5, 6, 2], "a": 6, "b": 4},
  {"id": 140, "type": "subtraction", "text": "5 − 3 = ?", "answer": 2, "options": [6, 1, 2, 3], "a": 5, "b": 3},
  {"id": 141, "type": "subtraction", "text": "2 − 1 = ?", "answer": 1, "options": [1, 4, 21, 3], "a": 2, "b": 1},
  {"id": 142, "type": "subtraction", "text": "4 − 2 = ?", "answer": 2, "options": [2, 0, 6, 3], "a": 4, "b": 2},
  {"id": 143, "type": "subtraction", "text": "3 − 1 = ?", "answer": 2, "options": [13, 7, 12, 2], "a": 3, "b": 1},
  {"id": 144, "type": "subtraction", "text": "9 − 5 = ?", "answer": 4, "options": [15, 4, 3, 8], "a": 9, "b": 5},
  {"id": 145, "type": "subtraction", "text": "6 − 5 = ?", "answer": 1, "options": [5, 1, 4, 21], "a": 6, "b": 5},
  {"id": 146, "type": "subtraction", "text": "8 − 5 = ?", "answer": 3, "options": [23, 8, 3, 5], "a": 8, "b": 5},
  {"id": 147, "type": "subtraction", "text": "8 − 7 = ?", "answer": 1, "options": [0, 1, 101, 12], "a": 8, "b": 7},
  {"id": 148, "type": "subtraction", "text": "8 − 2 = ?", "answer": 6, "options": [6, 3, 9, 16], "a": 8, "b": 2},
  {"id": 149, "type": "subtraction", "text": "9 − 2 = ?", "answer": 7, "options": [12, 7, 18, 27], "a": 9, "b": 2},
  {"id": 150, "type": "subtraction", "text": "8 − 6 = ?", "answer": 2, "options": [12, 13, 2, 22], "a": 8, "b": 6},
  {"id": 151, "type": "subtraction", "text": "9 − 8 = ?", "answer": 1, "options": [0, 6, 11, 1], "a": 9, "b": 8},
  {"id": 152, "type": "multiplication", "text": "9 × 4 = ?", "answer": 36, "options": [36, 39, 26, 32], "a": 9, "b": 4},
  {"id": 153, "type": "multiplication", "text": "8 × 3 = ?", "answer": 24, "options": [124, 34, 27, 24], "a": 8, "b": 3},
  {"id": 154, "type": "multiplication", "text": "4 × 6 = ?", "answer": 24, "options": [20, 124, 24, 4], "a": 4, "b": 6},
  {"id": 155, "type": "multiplication", "text": "8 × 8 = ?", "answer": 64, "options": [64, 61, 53, 44], "a": 8, "b": 8},
  {"id": 156, "type": "multiplication", "text": "6 × 4 = ?", "answer": 24, "options": [24, 28, 29, 13], "a": 6, "b": 4},
  {"id": 157, "type": "multiplication", "text": "7 × 5 = ?", "answer": 35, "options": [35, 24, 30, 46], "a": 7, "b": 5},
  {"id": 158, "type": "multiplication", "text": "4 × 3 = ?", "answer": 12, "options": [12, 8, 23, 7], "a": 4, "b": 3},
  {"id": 159, "type": "multiplication", "text": "9 × 6 = ?", "answer": 54, "options": [59, 54, 56, 44], "a": 9, "b": 6},
  {"id": 160, "type": "multiplication", "text": "1 × 5 = ?", "answer": 5, "options": [3, 10, 5, 15], "a": 1, "b": 5},
  {"id": 161, "type": "multiplication", "text": "2 × 2 = ?", "answer": 4, "options": [4, 5, 15, 8], "a": 2, "b": 2},
  {"id": 162, "type": "multiplication", "text": "4 × 7 = ?", "answer": 28, "options": [48, 29, 28, 33], "a": 4, "b": 7},
  {"id": 163, "type": "multiplication", "text": "5 × 2 = ?", "answer": 10, "options": [10, 30, 12, 5], "a": 5, "b": 2},
  {"id": 164, "type": "multiplication", "text": "2 × 9 = ?", "answer": 18, "options": [14, 23, 7, 18], "a": 2, "b": 9},
  {"id": 165, "type": "multiplication", "text": "8 × 7 = ?", "answer": 56, "options": [66, 156, 46, 56], "a": 8, "b": 7},
  {"id": 166, "type": "multiplication", "text": "3 × 7 = ?", "answer": 21, "options": [21, 17, 20, 121], "a": 3, "b": 7},
  {"id": 167, "type": "multiplication", "text": "6 × 5 = ?", "answer": 30, "options": [28, 30, 50, 19], "a": 6, "b": 5},
  {"id": 168, "type": "multiplication", "text": "5 × 8 = ?", "answer": 40, "options": [51, 20, 40, 39], "a": 5, "b": 8},
  {"id": 169, "type": "multiplication", "text": "6 × 7 = ?", "answer": 42, "options": [62, 84, 42, 37], "a": 6, "b": 7},
  {"id": 170, "type": "multiplication", "text": "2 × 8 = ?", "answer": 16, "options": [19, 16, 20, 21], "a": 2, "b": 8},
  {"id": 171, "type": "multiplication", "text": "9 × 7 = ?", "answer": 63, "options": [63, 58, 66, 163], "a": 9, "b": 7},
  {"id": 172, "type": "multiplication", "text": "5 × 3 = ?", "answer": 15, "options": [20, 15, 26, 13], "a": 5, "b": 3},
  {"id": 173, "type": "multiplication", "text": "3 × 9 = ?", "answer": 27, "options": [47, 27, 24, 17], "a": 3, "b": 9},
  {"id": 174, "type": "multiplication", "text": "1 × 2 = ?", "answer": 2, "options": [13, 2, 4, 3], "a": 1, "b": 2},
  {"id": 175, "type": "multiplication", "text": "6 × 9 = ?", "answer": 54, "options": [55, 54, 50, 154], "a": 6, "b": 9},
  {"id": 176, "type": "multiplication", "text": "3 × 1 = ?", "answer": 3, "options": [2, 103, 5, 3], "a": 3, "b": 1},
  {"id": 177, "type": "multiplication", "text": "4 × 5 = ?", "answer": 20, "options": [9, 17, 18, 20], "a": 4, "b": 5},
  {"id": 178, "type": "division", "text": "6 ÷ 3 = ?", "answer": 2, "options": [7, 2, 12, 3], "a": 6, "b": 3},
  {"id": 179, "type": "division", "text": "6 ÷ 1 = ?", "answer": 6, "options": [6, 10, 9, 26], "a": 6, "b": 1},
  {"id": 180, "type": "division", "text": "8 ÷ 4 = ?", "answer": 2, "options": [12, 2, 13, 1], "a": 8, "b": 4},
  {"id": 181, "type": "division", "text": "9 ÷ 1 = ?", "answer": 9, "options": [11, 9, 5, 18], "a": 9, "b": 1},
  {"id": 182, "type": "division", "text": "7 ÷ 7 = ?", "answer": 1, "options": [1, 21, 5, 101], "a": 7, "b": 7},
  {"id": 183, "type": "division", "text": "3 ÷ 3 = ?", "answer": 1, "options": [101, 4, 2, 1], "a": 3, "b": 3},
  {"id": 184, "type": "division", "text": "5 ÷ 5 = ?", "answer": 1, "options": [4, 1, 101, 0], "a": 5, "b": 5},
  {"id": 185, "type": "division", "text": "1 ÷ 1 = ?", "answer": 1, "options": [0, 1, 101, 2], "a": 1, "b": 1},
  {"id": 186, "type": "division", "text": "2 ÷ 1 = ?", "answer": 2, "options": [102, 2, 4, 0], "a": 2, "b": 1},
  {"id": 187, "type": "division", "text": "4 ÷ 2 = ?", "answer": 2, "options": [102, 4, 6, 2], "a": 4, "b": 2},
  {"id": 188, "type": "division", "text": "8 ÷ 2 = ?", "answer": 4, "options": [4, 15, 0, 3], "a": 8, "b": 2},
  {"id": 189, "type": "division", "text": "8 ÷ 8 = ?", "answer": 1, "options": [2, 1, 4, 101], "a": 8, "b": 8},
  {"id": 190, "type": "division", "text": "5 ÷ 1 = ?", "answer": 5, "options": [16, 5, 9, 25], "a": 5, "b": 1},
  {"id": 191, "type": "division", "text": "8 ÷ 1 = ?", "answer": 8, "options": [16, 10, 108, 8], "a": 8, "b": 1},
  {"id": 192, "type": "division", "text": "2 ÷ 2 = ?", "answer": 1, "options": [4, 101, 2, 1], "a": 2, "b": 2},
  {"id": 193, "type": "division", "text": "3 ÷ 1 = ?", "answer": 3, "options": [3, 5, 7, 1], "a": 3, "b": 1},
  {"id": 194, "type": "division", "text": "7 ÷ 1 = ?", "answer": 7, "options": [2, 27, 8, 7], "a": 7, "b": 1},
  {"id": 195, "type": "division", "text": "4 ÷ 1 = ?", "answer": 4, "options": [14, 8, 2, 4], "a": 4, "b": 1},
  {"id": 196, "type": "division", "text": "9 ÷ 9 = ?", "answer": 1, "options": [5, 1, 6, 0], "a": 9, "b": 9},
  {"id": 197, "type": "division", "text": "6 ÷ 6 = ?", "answer": 1, "options": [6, 12, 1, 5], "a": 6, "b": 6},
  {"id": 198, "type": "division", "text": "6 ÷ 2 = ?", "answer": 3, "options": [8, 6, 5, 3], "a": 6, "b": 2},
  {"id": 199, "type": "division", "text": "9 ÷ 3 = ?", "answer": 3, "options": [7, 3, 6, 0], "a": 9, "b": 3},
  {"id": 200, "type": "division", "text": "4 ÷ 4 = ?", "answer": 1, "options": [4, 0, 101, 1], "a": 4, "b": 4}
];

const QUESTIONS_HARD = [
  {"id": 201, "type": "addition", "text": "54 + 95 = ?", "answer": 149, "options": [153, 149, 138, 160], "a": 54, "b": 95},
  {"id": 202, "type": "addition", "text": "47 + 70 = ?", "answer": 117, "options": [128, 117, 97, 112], "a": 47, "b": 70},
  {"id": 203, "type": "addition", "text": "34 + 93 = ?", "answer": 127, "options": [147, 123, 127, 122], "a": 34, "b": 93},
  {"id": 204, "type": "addition", "text": "28 + 79 = ?", "answer": 107, "options": [102, 107, 214, 103], "a": 28, "b": 79},
  {"id": 205, "type": "addition", "text": "39 + 81 = ?", "answer": 120, "options": [123, 220, 120, 131], "a": 39, "b": 81},
  {"id": 206, "type": "addition", "text": "93 + 86 = ?", "answer": 179, "options": [184, 179, 199, 175], "a": 93, "b": 86},
  {"id": 207, "type": "addition", "text": "62 + 36 = ?", "answer": 98, "options": [108, 78, 118, 98], "a": 62, "b": 36},
  {"id": 208, "type": "addition", "text": "53 + 69 = ?", "answer": 122, "options": [122, 132, 126, 222], "a": 53, "b": 69},
  {"id": 209, "type": "addition", "text": "63 + 32 = ?", "answer": 95, "options": [95, 106, 97, 75], "a": 63, "b": 32},
  {"id": 210, "type": "addition", "text": "89 + 18 = ?", "answer": 107, "options": [87, 109, 96, 107], "a": 89, "b": 18},
  {"id": 211, "type": "addition", "text": "14 + 10 = ?", "answer": 24, "options": [48, 25, 24, 124], "a": 14, "b": 10},
  {"id": 212, "type": "addition", "text": "46 + 91 = ?", "answer": 137, "options": [135, 142, 141, 137], "a": 46, "b": 91},
  {"id": 213, "type": "addition", "text": "34 + 84 = ?", "answer": 118, "options": [123, 113, 118, 138], "a": 34, "b": 84},
  {"id": 214, "type": "addition", "text": "88 + 22 = ?", "answer": 110, "options": [115, 112, 110, 106], "a": 88, "b": 22},
  {"id": 215, "type": "addition", "text": "13 + 65 = ?", "answer": 78, "options": [58, 78, 76, 98], "a": 13, "b": 65},
  {"id": 216, "type": "addition", "text": "92 + 36 = ?", "answer": 128, "options": [123, 256, 128, 118], "a": 92, "b": 36},
  {"id": 217, "type": "addition", "text": "56 + 56 = ?", "answer": 112, "options": [132, 122, 109, 112], "a": 56, "b": 56},
  {"id": 218, "type": "addition", "text": "73 + 16 = ?", "answer": 89, "options": [90, 88, 79, 89], "a": 73, "b": 16},
  {"id": 219, "type": "addition", "text": "19 + 67 = ?", "answer": 86, "options": [172, 86, 84, 87], "a": 19, "b": 67},
  {"id": 220, "type": "addition", "text": "52 + 26 = ?", "answer": 78, "options": [98, 83, 78, 74], "a": 52, "b": 26},
  {"id": 221, "type": "addition", "text": "64 + 28 = ?", "answer": 92, "options": [97, 92, 96, 184], "a": 64, "b": 28},
  {"id": 222, "type": "addition", "text": "36 + 89 = ?", "answer": 125, "options": [114, 115, 125, 135], "a": 36, "b": 89},
  {"id": 223, "type": "addition", "text": "60 + 38 = ?", "answer": 98, "options": [196, 108, 78, 98], "a": 60, "b": 38},
  {"id": 224, "type": "addition", "text": "15 + 68 = ?", "answer": 83, "options": [84, 73, 83, 87], "a": 15, "b": 68},
  {"id": 225, "type": "addition", "text": "12 + 13 = ?", "answer": 25, "options": [25, 45, 36, 27], "a": 12, "b": 13},
  {"id": 226, "type": "subtraction", "text": "15 − 10 = ?", "answer": 5, "options": [1, 5, 0, 25], "a": 15, "b": 10},
  {"id": 227, "type": "subtraction", "text": "51 − 42 = ?", "answer": 9, "options": [18, 11, 10, 9], "a": 51, "b": 42},
  {"id": 228, "type": "subtraction", "text": "92 − 36 = ?", "answer": 56, "options": [59, 61, 56, 36], "a": 92, "b": 36},
  {"id": 229, "type": "subtraction", "text": "59 − 38 = ?", "answer": 21, "options": [21, 10, 32, 121], "a": 59, "b": 38},
  {"id": 230, "type": "subtraction", "text": "29 − 19 = ?", "answer": 10, "options": [12, 6, 10, 30], "a": 29, "b": 19},
  {"id": 231, "type": "subtraction", "text": "91 − 65 = ?", "answer": 26, "options": [15, 29, 6, 26], "a": 91, "b": 65},
  {"id": 232, "type": "subtraction", "text": "52 − 28 = ?", "answer": 24, "options": [124, 24, 20, 4], "a": 52, "b": 28},
  {"id": 233, "type": "subtraction", "text": "93 − 67 = ?", "answer": 26, "options": [46, 28, 26, 21], "a": 93, "b": 67},
  {"id": 234, "type": "subtraction", "text": "57 − 20 = ?", "answer": 37, "options": [34, 38, 26, 37], "a": 57, "b": 20},
  {"id": 235, "type": "subtraction", "text": "47 − 21 = ?", "answer": 26, "options": [37, 22, 26, 52], "a": 47, "b": 21},
  {"id": 236, "type": "subtraction", "text": "25 − 22 = ?", "answer": 3, "options": [2, 5, 3, 14], "a": 25, "b": 22},
  {"id": 237, "type": "subtraction", "text": "67 − 21 = ?", "answer": 46, "options": [66, 46, 51, 57], "a": 67, "b": 21},
  {"id": 238, "type": "subtraction", "text": "29 − 25 = ?", "answer": 4, "options": [0, 14, 15, 4], "a": 29, "b": 25},
  {"id": 239, "type": "subtraction", "text": "31 − 25 = ?", "answer": 6, "options": [106, 6, 9, 7], "a": 31, "b": 25},
  {"id": 240, "type": "subtraction", "text": "44 − 31 = ?", "answer": 13, "options": [11, 113, 12, 13], "a": 44, "b": 31},
  {"id": 241, "type": "subtraction", "text": "34 − 31 = ?", "answer": 3, "options": [1, 23, 14, 3], "a": 34, "b": 31},
  {"id": 242, "type": "subtraction", "text": "78 − 19 = ?", "answer": 59, "options": [59, 48, 69, 56], "a": 78, "b": 19},
  {"id": 243, "type": "subtraction", "text": "55 − 16 = ?", "answer": 39, "options": [49, 44, 36, 39], "a": 55, "b": 16},
  {"id": 244, "type": "subtraction", "text": "63 − 57 = ?", "answer": 6, "options": [11, 16, 17, 6], "a": 63, "b": 57},
  {"id": 245, "type": "subtraction", "text": "36 − 31 = ?", "answer": 5, "options": [2, 5, 0, 8], "a": 36, "b": 31},
  {"id": 246, "type": "subtraction", "text": "20 − 14 = ?", "answer": 6, "options": [10, 16, 6, 26], "a": 20, "b": 14},
  {"id": 247, "type": "subtraction", "text": "70 − 30 = ?", "answer": 40, "options": [36, 39, 20, 40], "a": 70, "b": 30},
  {"id": 248, "type": "subtraction", "text": "44 − 33 = ?", "answer": 11, "options": [13, 11, 10, 15], "a": 44, "b": 33},
  {"id": 249, "type": "subtraction", "text": "55 − 34 = ?", "answer": 21, "options": [20, 21, 32, 41], "a": 55, "b": 34},
  {"id": 250, "type": "subtraction", "text": "25 − 12 = ?", "answer": 13, "options": [15, 33, 26, 13], "a": 25, "b": 12},
  {"id": 251, "type": "multiplication", "text": "65 × 78 = ?", "answer": 5070, "options": [5170, 5070, 5065, 5074], "a": 65, "b": 78},
  {"id": 252, "type": "multiplication", "text": "75 × 53 = ?", "answer": 3975, "options": [3955, 3970, 3975, 3965], "a": 75, "b": 53},
  {"id": 253, "type": "multiplication", "text": "31 × 60 = ?", "answer": 1860, "options": [1870, 1860, 1862, 3720], "a": 31, "b": 60},
  {"id": 254, "type": "multiplication", "text": "76 × 85 = ?", "answer": 6460, "options": [6459, 6560, 6455, 6460], "a": 76, "b": 85},
  {"id": 255, "type": "multiplication", "text": "83 × 38 = ?", "answer": 3154, "options": [3159, 3152, 3154, 3151], "a": 83, "b": 38},
  {"id": 256, "type": "multiplication", "text": "33 × 78 = ?", "answer": 2574, "options": [2576, 2574, 2575, 2674], "a": 33, "b": 78},
  {"id": 257, "type": "multiplication", "text": "51 × 97 = ?", "answer": 4947, "options": [4936, 4947, 4847, 4937], "a": 51, "b": 97},
  {"id": 258, "type": "multiplication", "text": "40 × 76 = ?", "answer": 3040, "options": [3040, 3050, 3043, 3039], "a": 40, "b": 76},
  {"id": 259, "type": "multiplication", "text": "20 × 37 = ?", "answer": 740, "options": [742, 740, 640, 745], "a": 20, "b": 37},
  {"id": 260, "type": "multiplication", "text": "24 × 53 = ?", "answer": 1272, "options": [1275, 1272, 1269, 1262], "a": 24, "b": 53},
  {"id": 261, "type": "multiplication", "text": "86 × 10 = ?", "answer": 860, "options": [857, 865, 880, 860], "a": 86, "b": 10},
  {"id": 262, "type": "multiplication", "text": "42 × 11 = ?", "answer": 462, "options": [463, 462, 451, 458], "a": 42, "b": 11},
  {"id": 263, "type": "multiplication", "text": "82 × 82 = ?", "answer": 6724, "options": [6721, 6704, 6724, 6723], "a": 82, "b": 82},
  {"id": 264, "type": "multiplication", "text": "46 × 35 = ?", "answer": 1610, "options": [1614, 1610, 1621, 1611], "a": 46, "b": 35},
  {"id": 265, "type": "multiplication", "text": "42 × 81 = ?", "answer": 3402, "options": [3398, 3405, 3412, 3402], "a": 42, "b": 81},
  {"id": 266, "type": "multiplication", "text": "80 × 61 = ?", "answer": 4880, "options": [4891, 9760, 4880, 4869], "a": 80, "b": 61},
  {"id": 267, "type": "multiplication", "text": "48 × 88 = ?", "answer": 4224, "options": [4225, 4204, 4224, 4222], "a": 48, "b": 88},
  {"id": 268, "type": "multiplication", "text": "59 × 49 = ?", "answer": 2891, "options": [2889, 2891, 2881, 2896], "a": 59, "b": 49},
  {"id": 269, "type": "multiplication", "text": "97 × 82 = ?", "answer": 7954, "options": [7957, 7949, 7943, 7954], "a": 97, "b": 82},
  {"id": 270, "type": "multiplication", "text": "39 × 84 = ?", "answer": 3276, "options": [3274, 3376, 3276, 3280], "a": 39, "b": 84},
  {"id": 271, "type": "multiplication", "text": "87 × 62 = ?", "answer": 5394, "options": [5394, 5393, 5398, 5390], "a": 87, "b": 62},
  {"id": 272, "type": "multiplication", "text": "77 × 60 = ?", "answer": 4620, "options": [4621, 4640, 4620, 4625], "a": 77, "b": 60},
  {"id": 273, "type": "multiplication", "text": "75 × 51 = ?", "answer": 3825, "options": [3830, 3821, 3825, 3823], "a": 75, "b": 51},
  {"id": 274, "type": "multiplication", "text": "80 × 91 = ?", "answer": 7280, "options": [7282, 7275, 7283, 7280], "a": 80, "b": 91},
  {"id": 275, "type": "multiplication", "text": "72 × 88 = ?", "answer": 6336, "options": [6336, 6347, 6334, 6325], "a": 72, "b": 88},
  {"id": 276, "type": "division", "text": "20 ÷ 10 = ?", "answer": 2, "options": [22, 13, 2, 6], "a": 20, "b": 10},
  {"id": 277, "type": "division", "text": "96 ÷ 48 = ?", "answer": 2, "options": [2, 4, 1, 5], "a": 96, "b": 48},
  {"id": 278, "type": "division", "text": "99 ÷ 11 = ?", "answer": 9, "options": [4, 9, 29, 8], "a": 99, "b": 11},
  {"id": 279, "type": "division", "text": "82 ÷ 41 = ?", "answer": 2, "options": [13, 2, 1, 6], "a": 82, "b": 41},
  {"id": 280, "type": "division", "text": "40 ÷ 20 = ?", "answer": 2, "options": [2, 7, 22, 0], "a": 40, "b": 20},
  {"id": 281, "type": "division", "text": "72 ÷ 18 = ?", "answer": 4, "options": [2, 24, 4, 5], "a": 72, "b": 18},
  {"id": 282, "type": "division", "text": "90 ÷ 45 = ?", "answer": 2, "options": [2, 12, 3, 4], "a": 90, "b": 45},
  {"id": 283, "type": "division", "text": "55 ÷ 11 = ?", "answer": 5, "options": [8, 5, 25, 6], "a": 55, "b": 11},
  {"id": 284, "type": "division", "text": "64 ÷ 32 = ?", "answer": 2, "options": [3, 2, 5, 13], "a": 64, "b": 32},
  {"id": 285, "type": "division", "text": "70 ÷ 10 = ?", "answer": 7, "options": [18, 9, 11, 7], "a": 70, "b": 10},
  {"id": 286, "type": "division", "text": "56 ÷ 14 = ?", "answer": 4, "options": [7, 24, 14, 4], "a": 56, "b": 14},
  {"id": 287, "type": "division", "text": "78 ÷ 13 = ?", "answer": 6, "options": [11, 10, 6, 17], "a": 78, "b": 13},
  {"id": 288, "type": "division", "text": "90 ÷ 30 = ?", "answer": 3, "options": [13, 1, 3, 2], "a": 90, "b": 30},
  {"id": 289, "type": "division", "text": "92 ÷ 46 = ?", "answer": 2, "options": [1, 2, 0, 12], "a": 92, "b": 46},
  {"id": 290, "type": "division", "text": "80 ÷ 10 = ?", "answer": 8, "options": [5, 8, 28, 16], "a": 80, "b": 10},
  {"id": 291, "type": "division", "text": "57 ÷ 19 = ?", "answer": 3, "options": [8, 2, 23, 3], "a": 57, "b": 19},
  {"id": 292, "type": "division", "text": "58 ÷ 29 = ?", "answer": 2, "options": [2, 0, 12, 13], "a": 58, "b": 29},
  {"id": 293, "type": "division", "text": "63 ÷ 21 = ?", "answer": 3, "options": [3, 0, 7, 8], "a": 63, "b": 21},
  {"id": 294, "type": "division", "text": "76 ÷ 19 = ?", "answer": 4, "options": [104, 5, 8, 4], "a": 76, "b": 19},
  {"id": 295, "type": "division", "text": "66 ÷ 33 = ?", "answer": 2, "options": [1, 2, 22, 5], "a": 66, "b": 33},
  {"id": 296, "type": "division", "text": "48 ÷ 16 = ?", "answer": 3, "options": [4, 5, 3, 13], "a": 48, "b": 16},
  {"id": 297, "type": "division", "text": "90 ÷ 15 = ?", "answer": 6, "options": [26, 17, 6, 5], "a": 90, "b": 15},
  {"id": 298, "type": "division", "text": "64 ÷ 16 = ?", "answer": 4, "options": [4, 15, 2, 9], "a": 64, "b": 16},
  {"id": 299, "type": "division", "text": "80 ÷ 20 = ?", "answer": 4, "options": [4, 0, 24, 1], "a": 80, "b": 20},
  {"id": 300, "type": "division", "text": "50 ÷ 25 = ?", "answer": 2, "options": [5, 7, 2, 22], "a": 50, "b": 25}
];

const QUESTION_POOLS = { easy: QUESTIONS_EASY, medium: QUESTIONS, hard: QUESTIONS_HARD };

if (typeof window !== "undefined") { window.QUESTIONS = QUESTIONS; window.QUESTION_POOLS = QUESTION_POOLS; }
if (typeof module !== "undefined") module.exports = QUESTION_POOLS;
