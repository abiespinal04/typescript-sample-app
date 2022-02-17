interface Props {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList = (props: Props) => {
  const { items, onDeleteTodo } = props;
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
