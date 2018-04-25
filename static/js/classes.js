class CharacterInterface {
    set_quantifier(quantifier) {
        this.quantifier = quantifier;
    }

    to_readable() {
    }

    get_description() {
    }
}

class CharacterSet extends CharacterInterface {
    constructor(set) {
        super();
        this.char_set = set;
    }

    to_readable() {
        let result = '[';

        if (this.char_set.length > 1) {
            let charset_cp = this.char_set.slice();

            while (charset_cp.length > 0) {
                let char = charset_cp[0];

                let range_closer = this._find_furthest_range_closer(char);
                if (range_closer.code === char.code) {
                    result += (char.specifics.includes('ESCAPED') ? '\\' : '') + `${char.char}`;
                    charset_cp.splice(charset_cp.indexOf(char), 1);
                } else if (range_closer.code === char.code + 1) {
                    result += (char.specifics.includes('ESCAPED') ? '\\' : '') + `${char.char}`
                        + (range_closer.specifics.includes('ESCAPED') ? '\\' : '') + `${range_closer.char}`;
                    charset_cp.splice(charset_cp.indexOf(char), 2);
                } else {
                    result += (char.specifics.includes('ESCAPED') ? '\\' : '') + `${char.char}` + '-'
                        + (range_closer.specifics.includes('ESCAPED') ? '\\' : '') + `${range_closer.char}`;
                    charset_cp.splice(charset_cp.indexOf(char),
                        charset_cp.indexOf(range_closer) - charset_cp.indexOf(char) + 1);
                }
            }

            result += ']';
        } else if (this.char_set.length === 1) {
            result = (this.char_set[0].specifics.includes('ESCAPED') ? '\\' : '') + `${this.char_set[0].char}`;
        } else {
            result = '';
        }

        result += this.quantifier.to_readable();

        return result;
    }

    get_description() {
        let result = "";

        //TODO

        return result;
    }

    _find_furthest_range_closer(char) {
        let index = this.char_set.indexOf(char);
        if (index >= 0 && index < this.char_set.length - 1) {
            let next_char = this.char_set[index + 1];
            if (next_char.code === char.code + 1)
                return this._find_furthest_range_closer(next_char);
        }
        return char;
    }

/*    _represents_word_char(char_set) {
        for (let char of ASCII_CHARS) {
            if (char.types.includes('W') && !char_set.includes(char))
                return false;
        }
        return true;
    }

    _represents_digit_char(char_set) {
        for (let char of ASCII_CHARS) {
            if (char.types.includes('D') && !char_set.includes(char))
                return false;
        }
        return true;
    }*/
}

class NegatedCharSet extends CharacterSet {
    constructor(set) {
        super(set);
        this.negated_char_set = [];
    }
}

class CharacterRange extends CharacterSet {
    constructor(start, end) {
        let startcode = find_code_by_char(start);
        let endcode = find_code_by_char(end);
        let char_set = [];

        for (let char of ASCII_CHARS) {
            if (char.code >= startcode && char.code <= endcode)
                char_set.push(char);
        }
        super(char_set);

        this.start = start;
        this.end = end;
    }
}

class Dot extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '.';
    }

    to_readable() {
        return `.${this.quantifier.to_readable()}`;
    }
}

class Word extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '\w';
    }
}

class NonWord extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '\W';
    }
}

class Digit extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '\d';
    }
}

class NonDigit extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '\D';
    }
}

class Whitespace extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '\s';
    }
}

class NonWhitespace extends CharacterInterface {
    constructor() {
        super();
        this.regex_value = '\S';
    }
}

// ======================================================== //

class QuantifierInterface {
    constructor() {
    }

    to_readable() {
    }
}

class NoLimitQuantifier extends QuantifierInterface {
    to_readable() {
        return '*';
    }
}

class OneOrMoreQuantifier extends QuantifierInterface {
    to_readable() {
        return '+';
    }
}

class JustOnceQuantifier extends QuantifierInterface {
    to_readable() {
        return '';
    }
}

class BetweenQuantifier extends QuantifierInterface {
    constructor(inferior, superior) {
        super();
        this.inferior = inferior;
        this.superior = superior ? superior : '';
    }

    to_readable() {
        return `{${this.inferior},${this.superior}}`;
    }
}