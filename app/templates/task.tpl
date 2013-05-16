<li class="task" id="task-<%= index %>">
    <div class="span3">
        <input type="checkbox" id="task-status-<%= index %>" class="task-status"
            data-index="<%= index %>"
            <% if ( status ) { %> checked="<%= status %>" <% } %>>
        <label for="task-status-<%= index %>" class="checkbox inline">
            Done/Undone task
        </label>
    </div>
    <div class="span6 relative">
        <input type="text" id="task-text-<%= index %>"
            placeholder="Input new task here!" class="span12"
            value="<%= value %>" data-index="<%= index %>" disabled>
        <div class="dblclick"></div>
    </div>
    <div class="span3">
        <a href="#" class="task-delete" data-index="<%= index %>">
            <i class="icon-remove"></i>
            Delete task
        </a>
    </div>
</li>
