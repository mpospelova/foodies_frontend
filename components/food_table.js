export default function FoodTable({ foodList }) {
  return (
    <table className="input_food_table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unity</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {foodList.map(({ id, name, quantity, unit, time }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{unit}</td>
            <td>{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
