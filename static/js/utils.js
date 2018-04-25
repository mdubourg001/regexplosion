"use strict";

const ASCII_CHARS = [
    /*    {
            "code": 0,
            "char": "NULL"
        },
        {
            "code": 1,
            "char": "SOH"
        },
        {
            "code": 2,
            "char": "STX"
        },
        {
            "code": 3,
            "char": "ETX"
        },
        {
            "code": 4,
            "char": "EOT"
        },
        {
            "code": 5,
            "char": "ENQ"
        },
        {
            "code": 6,
            "char": "ACK"
        },
        {
            "code": 7,
            "char": "BEL"
        },
        {
            "code": 8,
            "char": "BS"
        },
        {
            "code": 9,
            "char": "HT"
        },
        {
            "code": 10,
            "char": "LF"
        },
        {
            "code": 11,
            "char": "VT"
        },
        {
            "code": 12,
            "char": "FF"
        },
        {
            "code": 13,
            "char": "CR"
        },
        {
            "code": 14,
            "char": "SO"
        },
        {
            "code": 15,
            "char": "SI"
        },
        {
            "code": 16,
            "char": "DLE"
        },
        {
            "code": 17,
            "char": "DC1"
        },
        {
            "code": 18,
            "char": "DC2"
        },
        {
            "code": 19,
            "char": "DC3"
        },
        {
            "code": 20,
            "char": "DC4"
        },
        {
            "code": 21,
            "char": "NAK"
        },
        {
            "code": 22,
            "char": "SYN"
        },
        {
            "code": 23,
            "char": "ETB"
        },
        {
            "code": 24,
            "char": "CAN"
        },
        {
            "code": 25,
            "char": "EM"
        },
        {
            "code": 26,
            "char": "SUB"
        },
        {
            "code": 27,
            "char": "ESC"
        },
        {
            "code": 28,
            "char": "FS"
        },
        {
            "code": 29,
            "char": "GS"
        },
        {
            "code": 30,
            "char": "RS"
        },
        {
            "code": 31,
            "char": "US"
        },*/
    {
        "code": 32,
        "char": " ",
        "types": ["NW", "ND", "S"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 33,
        "char": "!",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 34,
        "char": "\"",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 35,
        "char": "#",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 36,
        "char": "$",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 37,
        "char": "%",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 38,
        "char": "&",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 39,
        "char": "'",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 40,
        "char": "(",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 41,
        "char": ")",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 42,
        "char": "*",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 43,
        "char": "+",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 44,
        "char": ",",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 45,
        "char": "-",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 46,
        "char": ".",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 47,
        "char": "/",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 48,
        "char": "0",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 49,
        "char": "1",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 50,
        "char": "2",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 51,
        "char": "3",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 52,
        "char": "4",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 53,
        "char": "5",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 54,
        "char": "6",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 55,
        "char": "7",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 56,
        "char": "8",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 57,
        "char": "9",
        "types": ["NW", "D", "NS"],
        "specifics": [],
        "level": 1
    },
    {
        "code": 58,
        "char": ":",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 59,
        "char": ";",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 60,
        "char": "<",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 61,
        "char": "=",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 62,
        "char": ">",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 63,
        "char": "?",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 64,
        "char": "@",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 65,
        "char": "A",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 66,
        "char": "B",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 67,
        "char": "C",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 68,
        "char": "D",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 69,
        "char": "E",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 70,
        "char": "F",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 71,
        "char": "G",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 72,
        "char": "H",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 73,
        "char": "I",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 74,
        "char": "J",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 75,
        "char": "K",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 76,
        "char": "L",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 77,
        "char": "M",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 78,
        "char": "N",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 79,
        "char": "O",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 80,
        "char": "P",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 81,
        "char": "Q",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 82,
        "char": "R",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 83,
        "char": "S",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 84,
        "char": "T",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 85,
        "char": "U",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 86,
        "char": "V",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 87,
        "char": "W",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 88,
        "char": "X",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 89,
        "char": "Y",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 90,
        "char": "Z",
        "types": ["W", "ND", "NS"],
        "specifics": ["UPPERCASE"],
        "level": 1
    },
    {
        "code": 91,
        "char": "[",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 92,
        "char": "\\",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 93,
        "char": "]",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 94,
        "char": "^",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 95,
        "char": "_",
        "types": ["W", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 96,
        "char": "`",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 97,
        "char": "a",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 98,
        "char": "b",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 99,
        "char": "c",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 100,
        "char": "d",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 101,
        "char": "e",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 102,
        "char": "f",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 103,
        "char": "g",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 104,
        "char": "h",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 105,
        "char": "i",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 106,
        "char": "j",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 107,
        "char": "k",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 108,
        "char": "l",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 109,
        "char": "m",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 110,
        "char": "n",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 111,
        "char": "o",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 112,
        "char": "p",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 113,
        "char": "q",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 114,
        "char": "r",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 115,
        "char": "s",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 116,
        "char": "t",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 117,
        "char": "u",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 118,
        "char": "v",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 119,
        "char": "w",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 120,
        "char": "x",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 121,
        "char": "y",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 122,
        "char": "z",
        "types": ["W", "ND", "NS"],
        "specifics": ["LOWERCASE"],
        "level": 1
    },
    {
        "code": 123,
        "char": "{",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 124,
        "char": "|",
        "types": ["NW", "ND", "NS"],
        "specifics": ["ESCAPED"],
        "level": 2
    },
    {
        "code": 125,
        "char": "}",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 126,
        "char": "~",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    /*    {
            "code": 127,
            "char": "DEL",
            "types": ["NW", "ND", "NS"],
            "specifics": [],
            "level": 4
        },*/
    {
        "code": 128,
        "char": "Ç",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 129,
        "char": "ü",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 130,
        "char": "é",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 131,
        "char": "â",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 132,
        "char": "ä",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 133,
        "char": "à",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 134,
        "char": "å",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 135,
        "char": "ç",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 136,
        "char": "ê",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 137,
        "char": "ë",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 138,
        "char": "è",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 139,
        "char": "ï",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 140,
        "char": "î",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 141,
        "char": "ì",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 142,
        "char": "Ä",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 143,
        "char": "Å",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 144,
        "char": "É",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 145,
        "char": "æ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 146,
        "char": "Æ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 147,
        "char": "ô",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 148,
        "char": "ö",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 149,
        "char": "ò",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 150,
        "char": "û",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 151,
        "char": "ù",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 152,
        "char": "ÿ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 153,
        "char": "Ö",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 154,
        "char": "Ü",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 155,
        "char": "ø",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 156,
        "char": "£",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 157,
        "char": "Ø",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 158,
        "char": "×",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 159,
        "char": "ƒ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 160,
        "char": "á",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 161,
        "char": "í",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 162,
        "char": "ó",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 163,
        "char": "ú",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 164,
        "char": "ñ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 165,
        "char": "Ñ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 166,
        "char": "ª",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 167,
        "char": "º",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 168,
        "char": "¿",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 169,
        "char": "®",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 170,
        "char": "¬",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 171,
        "char": "½",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 172,
        "char": "¼",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 173,
        "char": "¡",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 174,
        "char": "«",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
    {
        "code": 175,
        "char": "»",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
/*    {
        "code": 176,
        "char": "░",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 177,
        "char": "▒",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 178,
        "char": "▓",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 179,
        "char": "│",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 180,
        "char": "┤",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 181,
        "char": "Á",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 182,
        "char": "Â",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 183,
        "char": "À",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 184,
        "char": "©",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 185,
        "char": "╣",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 186,
        "char": "║",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 187,
        "char": "╗",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 188,
        "char": "╝",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 189,
        "char": "¢",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 190,
        "char": "¥",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 191,
        "char": "┐",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 192,
        "char": "└",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 193,
        "char": "┴",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 194,
        "char": "┬",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 195,
        "char": "├",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 196,
        "char": "─",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
/*    {
        "code": 197,
        "char": "┼",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 198,
        "char": "ã",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 199,
        "char": "Ã",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 200,
        "char": "╚",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 201,
        "char": "╔",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 202,
        "char": "╩",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 203,
        "char": "╦",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 204,
        "char": "╠",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 205,
        "char": "═",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
/*    {
        "code": 206,
        "char": "╬",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 207,
        "char": "¤",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 208,
        "char": "ð",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
/*    {
        "code": 209,
        "char": "Ð",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 210,
        "char": "Ê",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 211,
        "char": "Ë",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 212,
        "char": "È",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 213,
        "char": "ı",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 214,
        "char": "Í",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 215,
        "char": "Î",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 216,
        "char": "Ï",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 217,
        "char": "┘",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 218,
        "char": "┌",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 219,
        "char": "█",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 220,
        "char": "▄",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 221,
        "char": "¦",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 222,
        "char": "Ì",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 223,
        "char": "▀",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 224,
        "char": "Ó",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 225,
        "char": "ß",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 226,
        "char": "Ô",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 227,
        "char": "Ò",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 228,
        "char": "õ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 229,
        "char": "Õ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 230,
        "char": "µ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 231,
        "char": "þ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 232,
        "char": "Þ",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 233,
        "char": "Ú",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 234,
        "char": "Û",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 235,
        "char": "Ù",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 236,
        "char": "ý",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
    {
        "code": 237,
        "char": "Ý",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 3
    },
/*    {
        "code": 238,
        "char": "¯",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },*/
    {
        "code": 239,
        "char": "´",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
/*    {
        "code": 240,
        "char": "¬",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 241,
        "char": "±",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 242,
        "char": "‗",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 243,
        "char": "¾",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 244,
        "char": "¶",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 245,
        "char": "§",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 246,
        "char": "÷",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
/*    {
        "code": 247,
        "char": "¸",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },*/
    {
        "code": 248,
        "char": "°",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 2
    },
/*    {
        "code": 249,
        "char": "¨",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 250,
        "char": "•",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 251,
        "char": "¹",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 252,
        "char": "³",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 253,
        "char": "²",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 254,
        "char": "■",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    },
    {
        "code": 255,
        "char": "nbsp",
        "types": ["NW", "ND", "NS"],
        "specifics": [],
        "level": 4
    }*/
];

// ===== UTILS METHODS ===== //

const find_code_by_char = function (char) {
    for (let ac of ASCII_CHARS) {
        if (ac.char == char)
            return ac.code;
    }
    return -1;
}