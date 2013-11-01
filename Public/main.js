define([
    './apps/widget/views/widget'
],
function (Widget) {
    var widget_private = {};
    var container = $(document.createElement('div'));
    container.addClass('wd_widget_container');
    $("body").append(container);
    widget_private.container = container;
    widget_private.widgets = [];
    var main = {
        init: function () {

        },
        addWidget: function (icon, content) {
            var widget = new Widget();
            widget_private.widgets.push(widget);
            widget_private.container.append(widget.$el);
            widget.init(icon, content);
            var i = 0;
            for (var k in widget_private.widgets) {
                var w = widget_private.widgets[k];
                w.$el.css("bottom", i++ * w.$el.outerHeight() + 20);
            }

        }
    };

    return main;
});