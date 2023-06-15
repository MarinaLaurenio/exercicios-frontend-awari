import Item from "./../Item/Item";

export default function List({ content = [] }) {
  const map = content.map((item) => {
    return <Item key={item.id} item={item}></Item>;
  });

  return (
    <div>
      <h2>Lista de usuários</h2>
      <ul>{map}</ul>
    </div>
  );
}

/**
ao inves de colocar (props) como parametro, pode colocar a propriedade diretamente. 
 */
