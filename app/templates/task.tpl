<li class="task clearfix<% if ( archived ) { %> hide <% } %>"
    id="task-<%= index %>">

    <div class="span3 text-right">
        <input type="checkbox" id="task-status-<%= index %>" class="task-status"
            title="Done or undone this task" data-index="<%= index %>"
            <% if ( status ) { %> checked <% } %>>
        <label for="task-status-<%= index %>" class="checkbox inline hide-text">
            Done or undone this task
        </label>
    </div>
    <div class="span6 relative">
        <input type="text" id="task-text-<%= index %>"
            placeholder="Edit task here!" class="span12"
            value="<%= value %>" data-index="<%= index %>" disabled>
        <div class="dblclick"></div>
    </div>
    <div class="span3">
        <a href="#" class="task-delete btn" data-index="<%= index %>">
            <i class="icon-remove"></i>
            Delete task
        </a>
    </div>

</li>
