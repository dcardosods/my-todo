<li class="task">
    <div class="span3" data-bind="status">
        <input type="checkbox" id="task-status[<%= index %>]">
        <label for="task-status[<%= index %>]" class="checkbox inline">
            Done/Undone task
        </label>
    </div>
    <div class="span6" data-bind="text">
        <input type="text" id="task-text[<%= index %>]" placeholder="Input new task here!" class="span12" value="<%= value %>">
    </div>
    <div class="span3">
        <a href="#">
            <i class="icon-remove"></i>
            Delete task
        </a>
    </div>
</li>
