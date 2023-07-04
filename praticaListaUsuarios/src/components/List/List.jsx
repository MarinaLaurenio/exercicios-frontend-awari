import Item from "./../Item/Item";

export default function List({ items = [], onItemClick }) {
  const handleItemClick = (item) => {
    onItemClick && onItemClick(item);
  };

  const map = items.map((item) => {
    return <Item key={item.id} item={item} onItemClick={handleItemClick} />;
  });
  return (
    <div>
      <h2>Lista de usuários</h2>
      <ul>{map}</ul>
    </div>
  );
}
