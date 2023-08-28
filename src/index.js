import ToDo from './ToDo';
import Project from './Project';
import './style.css';

const todo1 = ToDo('Task 1', 'This is my first task', Date.now(), 'low');
const todo2 = ToDo('Task 2', 'This is my second task', Date.now(), 'medium');
const todo3 = ToDo('Task 3', 'This is my third task', Date.now(), 'high');

const testProject = Project('Things');
testProject.addToProject(todo1);
testProject.addToProject(todo2);
testProject.addToProject(todo3);

console.log(testProject);