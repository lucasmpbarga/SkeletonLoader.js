export type Task = {
  id: number;
  description: string;
};

type TodoListProps = {
  tasks: Task[];
};

const TodoListItem = ({ id, description }: Task) => {
  console.log("TodoListItem rendered");

  return (
    <tr>
      <th>{id}</th>
      <td>{description}</td>
    </tr>
  );
};

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <section className="card mt-4 bg-violet-100 shadow-xl">
      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item) => (
                <TodoListItem
                  key={item.id}
                  id={item.id}
                  description={item.description}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
