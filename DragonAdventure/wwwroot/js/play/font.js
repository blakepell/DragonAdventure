"use strict";

function Font() {
    var self = this;
    self.element = getImageElement('fonts', 'bitmap-font.png');
    self.def = [
        { code: 32,   x: 0,     y: 43,    width: 3,     height: 1,     offsetX: 0,     offsetY: 8,     advanceX: 4 },
        { code: 33,   x: 42,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 34,   x: 76,    y: 34,    width: 5,     height: 4,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 35,   x: 31,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 36,   x: 49,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 37,   x: 55,    y: 27,    width: 6,     height: 6,     offsetX: 0,     offsetY: 1,     advanceX: 7 },
        { code: 38,   x: 55,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 39,   x: 123,   y: 27,    width: 2,     height: 4,     offsetX: 0,     offsetY: 0,     advanceX: 3 },
        { code: 40,   x: 124,   y: 18,    width: 3,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 4 },
        { code: 41,   x: 124,   y: 9,     width: 3,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 4 },
        { code: 42,   x: 70,    y: 34,    width: 5,     height: 5,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 43,   x: 56,    y: 34,    width: 6,     height: 5,     offsetX: 0,     offsetY: 2,     advanceX: 7 },
        { code: 44,   x: 82,    y: 34,    width: 2,     height: 4,     offsetX: 0,     offsetY: 5,     advanceX: 3 },
        { code: 45,   x: 118,   y: 33,    width: 6,     height: 1,     offsetX: 0,     offsetY: 4,     advanceX: 7 },
        { code: 46,   x: 108,   y: 33,    width: 2,     height: 2,     offsetX: 0,     offsetY: 6,     advanceX: 3 },
        { code: 47,   x: 112,   y: 18,    width: 5,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 48,   x: 21,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 49,   x: 63,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 50,   x: 98,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 51,   x: 96,    y: 9,     width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 52,   x: 103,   y: 9,     width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 53,   x: 110,   y: 9,     width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 54,   x: 35,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 55,   x: 117,   y: 9,     width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 56,   x: 0,     y: 19,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 57,   x: 7,     y: 19,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 58,   x: 90,    y: 27,    width: 2,     height: 6,     offsetX: 0,     offsetY: 2,     advanceX: 3 },
        { code: 59,   x: 52,    y: 27,    width: 2,     height: 7,     offsetX: 0,     offsetY: 2,     advanceX: 3 },
        { code: 60,   x: 6,     y: 28,    width: 5,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 61,   x: 85,    y: 34,    width: 6,     height: 3,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 62,   x: 118,   y: 18,    width: 5,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 63,   x: 14,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 64,   x: 39,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 65,   x: 103,   y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 66,   x: 15,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 67,   x: 24,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 68,   x: 48,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 69,   x: 32,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 70,   x: 16,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 71,   x: 8,     y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 72,   x: 0,     y: 10,    width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 73,   x: 28,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 74,   x: 79,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 75,   x: 71,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 76,   x: 47,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 77,   x: 56,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 78,   x: 64,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 79,   x: 95,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 80,   x: 40,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 81,   x: 7,     y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 82,   x: 119,   y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 83,   x: 111,   y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 84,   x: 56,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 85,   x: 87,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 86,   x: 63,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 87,   x: 23,    y: 0,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 88,   x: 72,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 89,   x: 80,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 90,   x: 88,    y: 9,     width: 7,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 8 },
        { code: 91,   x: 12,    y: 28,    width: 4,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 5 },
        { code: 92,   x: 0,     y: 28,    width: 5,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 93,   x: 17,    y: 27,    width: 4,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 5 },
        { code: 94,   x: 92,    y: 34,    width: 5,     height: 3,     offsetX: 0,     offsetY: 0,     advanceX: 6 },
        { code: 95,   x: 111,   y: 33,    width: 6,     height: 1,     offsetX: 0,     offsetY: 7,     advanceX: 7 },
        { code: 96,   x: 98,    y: 33,    width: 3,     height: 3,     offsetX: 0,     offsetY: 0,     advanceX: 4 },
        { code: 97,   x: 0,     y: 37,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 98,   x: 70,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 99,   x: 63,    y: 34,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 100,  x: 77,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 101,  x: 21,    y: 36,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 102,  x: 84,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 103,  x: 62,    y: 27,    width: 6,     height: 6,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 104,  x: 91,    y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 105,  x: 22,    y: 27,    width: 4,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 5 },
        { code: 106,  x: 0,     y: 0,     width: 6,     height: 9,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 107,  x: 105,   y: 18,    width: 6,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 7 },
        { code: 108,  x: 27,    y: 27,    width: 4,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 5 },
        { code: 109,  x: 101,   y: 27,    width: 7,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 8 },
        { code: 110,  x: 35,    y: 36,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 111,  x: 49,    y: 35,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 112,  x: 69,    y: 27,    width: 6,     height: 6,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 113,  x: 76,    y: 27,    width: 6,     height: 6,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 114,  x: 109,   y: 27,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 115,  x: 116,   y: 27,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 116,  x: 45,    y: 27,    width: 6,     height: 7,     offsetX: 0,     offsetY: 1,     advanceX: 7 },
        { code: 117,  x: 7,     y: 37,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 118,  x: 14,    y: 37,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 119,  x: 93,    y: 27,    width: 7,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 8 },
        { code: 120,  x: 28,    y: 36,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 121,  x: 83,    y: 27,    width: 6,     height: 6,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 122,  x: 42,    y: 36,    width: 6,     height: 5,     offsetX: 0,     offsetY: 3,     advanceX: 7 },
        { code: 123,  x: 37,    y: 27,    width: 4,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 5 },
        { code: 124,  x: 42,    y: 27,    width: 2,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 3 },
        { code: 125,  x: 32,    y: 27,    width: 4,     height: 8,     offsetX: 0,     offsetY: 0,     advanceX: 5 },
        { code: 126,  x: 102,   y: 33,    width: 5,     height: 2,     offsetX: 0,     offsetY: 2,     advanceX: 6 },
    ];

    self.chars = [];
    for (var i = 0; i < self.def.length; i++)
        self.chars[self.def[i].code] = self.def[i];
}

function fontInit() {
    // Support for more than one font maybe?
    _font = new Font();
}