import html from '../core.js';
import {connect} from '../store.js'
function TodoItem( { todo, index, editIndex}) {
  return html`
    <li class="${todo.completed && 'completed'} 
            ${editIndex === index && 'editing'}"
    >
        <div class="view">
          <input class="toggle" type="checkbox" ${todo.completed && 'checked'}
          onchange="dispath('toggle',${index})">
          <label ondblclick="dispath('startEdit', ${index})">${todo.title}</label>
          <button class="destroy" onclick="dispath('destroy', ${index})"></button>
        </div>
        <input class="edit" value="${todo.title}"
          onkeyup = "event.keyCode === 13 && dispath('endEdit',this.value.trim()) || event.keyCode === 27 && dispath('cancelEdit')"
          onblur = "dispath('endEdit',this.value.trim())"
        >
    </li>
  `;
}
export default connect()(TodoItem)