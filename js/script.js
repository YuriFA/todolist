$(document).ready(function() {
    $('#check_all_tasks').on('click', function(e) {
        var checks = $(this).parents('.todo').find('ul.todo_list .custom_checkbox'),
            is_check = $(this).is(':checked');
        checks.each(function(){
            if(( is_check && !$(this).is(':checked') ) || ( !is_check && $(this).is(':checked') ) ) {
                $(this).trigger('click');
            }
        });
    });
});