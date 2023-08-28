const Project = (title) => {
    const todos = [];

    const addToProject = (todo) => {
        todos.push(todos);
    }

    return { title, todos, addToProject };
};

export default Project;