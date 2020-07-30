$(".ui.tertiary.inverted.teal.segment").on("click", function() {
    event.preventDefault();

    if($(this).data('boolean') === true) {
        // alert("hi!");
        $(this).data('boolean', false);
        $("#todo-content").css({
            'text-decoration': 'line-through'
        })
    }
    else {
        // alert("boo");
        $(this).data('boolean', true);
        $("#todo-content").css({
            'text-decoration': 'none'
        })
    }
})