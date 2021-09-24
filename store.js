import { createStore } from './core.js';
import logger from './logger.js';
import reducer from './reducer.js';
import withLogger from './logger.js'
const { attack, connect, dispath } = createStore(withLogger(reducer));
window.dispath = dispath;
export { attack, connect };