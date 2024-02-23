import Dropdown from "react-bootstrap/Dropdown";

function ButtonDark() {
  const categories = [
    {
      category: "Hat",
      key: "Hats",
    },
    {
      category: "Hoodie",
      key: "Hoodies",
    },
    {
      category: "T-shirt",
      key: "T-shirts",
    },
    {
      category: "Tote",
      key: "Totes",
    },
  ];

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle>Items</Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map((category) => {
            return (
              <Dropdown.Item key={category.key}></Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDark;
