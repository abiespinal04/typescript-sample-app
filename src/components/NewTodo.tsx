import React, { useRef } from 'react';

type Props = {
  onAddTodo: (todoText:string) => void;
};

const NewTodo = (props: Props) => {
  // HTMLInputElement is a global Type
  const textInputRef = useRef<HTMLInputElement>(null);

  // React.FormEvent is a react type
  const handleSubmit = (event: React.FormEvent) => {
    const { onAddTodo } = props;
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Todo Text</label>
      <input type='text' id='todo-text' ref={textInputRef} />
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
