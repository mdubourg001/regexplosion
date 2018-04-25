const ALERT_TYPES = {
    INFO: "INFO",
    ERROR: "ERROR",
    DEFAULT: "DEFAULT"
};


class Alert {

    constructor(title, message, type, duration) {
        this.title = title;
        this.message = message;
        this.type = type;
        this.duration = duration;

        switch (this.type) {
            case ALERT_TYPES.INFO:
                this.css_class = "alert-info";
                break;
            case ALERT_TYPES.ERROR:
                this.css_class = "alert-error";
                break;
            default:
                this.css_class = "";
                break;
        }

        this.creation_timestamp = new Date();
    }

    should_be_displayed() {
        return ((new Date().getTime() - this.creation_timestamp.getTime())
            / 1000 < this.duration) || this.duration === -1;
    }
}