let model = new Model();

// remove dead alerts every 15 seconds
setInterval(function () {
    if (model.alerts.length > 0)
        model.remove_dead_alerts();
}, 5000);


new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        ascii_table: ASCII_CHARS,
        model: model
    }
});
