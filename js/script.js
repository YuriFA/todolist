$(document).ready(function() {
    var popup_container = $('.popup_container');
    $('#add_todolist').on('click', function(){
        popup_container.show();
    });

    $('#close_popup').on('click', function(){
        popup_container.hide();
    });



    // POPUP EVENTS / FUNCTIONS
    $('#check_all_tasks').on('click', function(e) {
        var checks = $(this).parents('.todo').find('ul.todo_list .custom_checkbox'),
            is_check = $(this).is(':checked');
        checks.each(function(){
            if(( is_check && !$(this).is(':checked') ) || ( !is_check && $(this).is(':checked') ) ) {
                $(this).trigger('click');
            }
        });
    });

    $('ul.todo_list .custom_checkbox').on('click', function(){
        var is_check = $(this).is(':checked'),
            text_input = $(this).parent().siblings('.task');

        if(is_check) {
            text_input.css('text-decoration', 'line-through');
        } else {
            text_input.css('text-decoration', 'none');
        }

    });

    $('#add_task').on('click', function(){
        var list = $(this).parent().siblings('.todo_list');
        list.append(list.children('li.todo_line').last().clone());
    });
});