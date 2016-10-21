$(document).ready(function(){
    $('.add_tl_task').on('click', function(){
        var task_list = $(this).siblings('.tl_tasks').children('ul'),
            new_task = task_list.children('.tl_task').last().clone();

        new_task.find('.custom_checkbox').prop('checked', false);
        new_task.find('.task_title').text('');
        new_task.find('.task_title').val('').attr('placeholder', 'Type here...');
        task_list.append(new_task);
    });
});