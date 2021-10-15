export default function FoodDisplay() {
    const foodList = [
        {
            id: 123,
            name: "Paprika",
            quantity: 3,
            unit: "pcs"
        },
        {
            id: 12,
            name: "Tomatoes",
            quantity: 5,
            unit: "pcs"
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs"
        },
    ];
    return (
        <>
            <p> Test test test </p>
            <>
              {
                foodList.map((item, index) =>
                  <p className="food_display_item" key={index}>{item.name} {item.quantity} {item.unit}</p>
                )
              }
            </>
        </>
    );
}
