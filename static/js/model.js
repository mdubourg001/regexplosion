class Model {

    constructor() {
        this.characters_list = [];
        this.sorted_begin_pos = undefined;
        this.alerts = [];

        this.init_current_character();
    }

    clear_all() {
        this.characters_list = [];
        this.init_current_character();

        this.alerts.push(new Alert(`Everything cleared:`,
            "Everthing was cleared. You can create a new brand regular expression!",
            ALERT_TYPES.ERROR,
            3));
    }

    init_current_character() {
        this.current_character = {
            checked_chars: [],
            how_many: "OO",
            inferior_boundary: 1,
            superior_boundary: 1,
            pattern: null,
        };
    }

    check_any() {
        if (!this.is_any_checked()) {
            this.push_to_checked_chars([], []);
        } else {
            this.current_character.checked_chars = [];
        }

        this.compute_pattern();
    }

    check_alphabetic() {
        if (!(this.is_lowercase_checked() && this.is_uppercase_checked())) {
            if (!this.is_lowercase_checked())
                this.check_lowercase();
            if (!this.is_uppercase_checked())
                this.check_uppercase();
        }
        else {
            this.check_lowercase();
            this.check_uppercase();
        }
    }

    check_lowercase() {
        if (!this.is_lowercase_checked()) {
            this.push_to_checked_chars(["W"], ["LOWERCASE"]);
        } else {
            this.remove_from_checked_chars(["W"], ["LOWERCASE"]);
        }

        this.compute_pattern();
    }

    check_uppercase() {
        if (!this.is_uppercase_checked()) {
            this.push_to_checked_chars(["W"], ["UPPERCASE"]);
        } else {
            this.remove_from_checked_chars(["W"], ["UPPERCASE"]);
        }

        this.compute_pattern();
    }

    check_numerics() {
        if (!this.is_numeric_checked()) {
            this.push_to_checked_chars(["D"], []);
        } else {
            this.remove_from_checked_chars(["D"], []);
        }

        this.compute_pattern();
    }

    check_char(char) {
        if (!this.current_character.checked_chars.includes(char)) {
            this.current_character.checked_chars.push(char);
        } else {
            this.current_character.checked_chars.splice(
                this.current_character.checked_chars.indexOf(char), 1
            );
        }

        this.compute_pattern();
    }

    push_to_checked_chars(types, specifics) {
        for (let char of ASCII_CHARS) {
            if (this.validates_types(char, types) && this.validates_specifics(char, specifics)) {
                if (!this.current_character.checked_chars.includes(char))
                    this.current_character.checked_chars.push(char);
            }
        }
    }

    remove_from_checked_chars(types, specifics) {
        for (let char of ASCII_CHARS) {
            if (this.validates_types(char, types) && this.validates_specifics(char, specifics))
                if (this.current_character.checked_chars.includes(char))
                    this.current_character.checked_chars.splice(
                        this.current_character.checked_chars.indexOf(char), 1
                    );
        }
    }

    change_how_many(how_many, infer_b, super_b) {
        this.current_character.how_many = how_many;

        switch (how_many) {
            case "NL":
                this.current_character.inferior_boundary = 0;
                this.current_character.superior_boundary = null;
                break;
            case "OM":
                this.current_character.inferior_boundary = 1;
                this.current_character.superior_boundary = null;
                break;
            case "OO":
                this.current_character.inferior_boundary = 1;
                this.current_character.superior_boundary = 1;
                break;
            case "B":
                this.current_character.inferior_boundary = infer_b ? infer_b : 0;
                this.current_character.superior_boundary = super_b;
                break;

        }

        this.compute_pattern();
    }

    compute_pattern() {
        let new_char;
        if (this.is_any_checked()) {
            new_char = new Dot();
        } else {
            this.current_character.checked_chars.sort(function (a, b) {
                return a.code - b.code;
            });
            new_char = new CharacterSet(this.current_character.checked_chars);
        }

        let quantifier;
        switch (this.current_character.how_many) {
            case "NL":
                quantifier = new NoLimitQuantifier();
                break;
            case "OM":
                quantifier = new OneOrMoreQuantifier();
                break;
            case "OO":
                quantifier = new JustOnceQuantifier();
                break;
            case "B":
                quantifier = new BetweenQuantifier(
                    this.current_character.inferior_boundary,
                    this.current_character.superior_boundary
                );
                break;
        }

        new_char.set_quantifier(quantifier);
        this.current_character.pattern = new_char;
    }

    add_char_to_characters_list() {
        if (this.current_character.pattern) {
            this.characters_list.push(this.current_character.pattern);

            this.alerts.push(new Alert(`New matching added: '${ this.current_character.pattern.to_readable() }'`,
                "A new matching was added to the pattern.",
                ALERT_TYPES.INFO,
                3));

            this.init_current_character();
        }
    }

    remove_from_characters_list(char) {
        this.characters_list.splice(this.characters_list.indexOf(char), 1);

        this.alerts.push(new Alert(`Matching removed: '${ char.to_readable() }'`,
            "A matching was removed from the pattern.",
            ALERT_TYPES.ERROR,
            3));
    }

    duplicate_in_characters_list(char) {
        this.characters_list.push(
            Object.assign(eval('new ' + char.constructor.name + '()'), char));

        this.alerts.push(new Alert(`Matching duplicated: '${ char.to_readable() }'`,
            "A matching was duplicated at the end of the pattern.",
            ALERT_TYPES.INFO,
            3));
    }

    get_readable_pattern() {
        let result = "";
        for (let char of this.characters_list) {
            result += char.to_readable();
        }

        let _this = this;
        $('tbody').sortable({
            handle: '.handle',
            start: function (event, ui) {
                _this.sorted_begin_pos = ui.item.index();
            },
            stop: function (event, ui) {
                _this.characters_list[ui.item.index()] =
                    _this.characters_list.splice(_this.sorted_begin_pos, 1,
                        _this.characters_list[ui.item.index()])[0];

                event.preventDefault();
            }
        });

        return result;
    }

    display_help() {
        this.remove_all_alerts();

        this.alerts.push(new Alert(`Help (1):`,
            "First things first, click on the characters to match using the matchings shortcuts (on the left) or " +
            "by clicking on specifics characters (on the center).",
            ALERT_TYPES.INFO,
            60));

        this.alerts.push(new Alert(`Help (2):`,
            "Then, select how many times you want to match selected characters (on the right).",
            ALERT_TYPES.INFO,
            60));

        this.alerts.push(new Alert(`Help (3):`,
            "You can now visualize precendent selections and manage them (duplicate, remove) using the table, at the bottom.",
            ALERT_TYPES.INFO,
            60));


    }

    // ============================================================= //
    // ======================== UTIL METHODS ======================= //
    // ============================================================= //

    copy_to_clipboard() {
        document.querySelector('#result-input').select();
        document.execCommand('Copy');
        window.getSelection().removeAllRanges();

        this.alerts.push(new Alert(`Well copied`,
            "The result was well copied to clipboard.",
            ALERT_TYPES.DEFAULT,
            5));
    }

    remove_alert(al) {
        this.alerts.splice(this.alerts.indexOf(al), 1);
    }

    remove_all_alerts() {
        this.alerts = [];
    }

    remove_dead_alerts() {
        for (let al of this.alerts) {
            if (!al.should_be_displayed())
                this.alerts.splice(this.alerts.indexOf(al), 1);
        }
    }

    is_any_checked() {
        for (let char of ASCII_CHARS) {
            if (!this.current_character.checked_chars.includes(char))
                return false;
        }
        return true;
    }

    is_lowercase_checked() {
        for (let char of ASCII_CHARS) {
            if (char.specifics.includes("LOWERCASE")
                && !this.current_character.checked_chars.includes(char))
                return false;
        }
        return true;
    }

    is_uppercase_checked() {
        for (let char of ASCII_CHARS) {
            if (char.specifics.includes("UPPERCASE")
                && !this.current_character.checked_chars.includes(char))
                return false;
        }
        return true;
    }

    is_numeric_checked() {
        for (let char of ASCII_CHARS) {
            if (char.types.includes("D")
                && !this.current_character.checked_chars.includes(char))
                return false;
        }
        return true;
    }

    validates_types(char, types) {
        return types.every((t) => {
            return char.types.includes(t);
        });
    }

    validates_specifics(char, specifics) {
        return specifics.every((s) => {
            return char.specifics.includes(s);
        });
    }
}