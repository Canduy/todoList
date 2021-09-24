import html from '../core.js';
import { connect } from '../store.js';
import Header  from './Header.js';
import TodoList  from './TodoList.js';
import footer  from './footer.js';
const connector = connect();
function app({ todos }) {
  return html`
    <section class="todoapp">
        ${Header()}
       ${todos.length > 0 && TodoList()}
       ${todos.length > 0 && footer()}
    </section>
  `;
}
export default connector(app);