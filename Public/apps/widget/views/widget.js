define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/widget.html'
], function ($, _, Backbone, widget_tpl) {
    var View = Backbone.View.extend({
        tagName: "div",
        className: "wd_widget",
        initialize: function () {
            var base = this;
        },
        init: function (icon, content) {
            var base = this;
            base.icon = icon;
            base.content = content;
            base.render();
            base.registerEvents();

        },
        render: function () {
            var base = this;

            var template = _.template(widget_tpl, {});
            base.$el.html(template);

            base.$el.find(".icon_container").html(base.icon);
            base.$el.find(".content_container").html(base.content);


            base.$el.find(".icon_container").css('line-height', base.$el.find(".icon_container").height() + "px");
        },
        registerEvents: function () {
            var base = this;

            base.$el.delegate(".icon_container", 'click', function () {
                base.$el.toggleClass("pinned");

            });
        }
    });

    return View;
});