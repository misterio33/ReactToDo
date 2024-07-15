const TodoItem: React.FC<{
  title: string;
  description: string;
  level: string;
}> = ({ title, description, level }) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <p>{level}</p>
    </>
  );
};

export default TodoItem;
