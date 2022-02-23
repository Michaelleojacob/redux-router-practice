const DisplayEachShopItem = (props) => {
  const arr = props.shop;
  return (
    <div>
      <div>
        {arr.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayEachShopItem;
