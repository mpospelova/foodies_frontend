export default function FoodInputField({
  name,
  setName,
  quantity,
  setQuantity,
  unit,
  setUnit,
}) {
  return (
    <form className="input_form">
      <input
        className="name_input"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="quantity_input"
        type="number"
        value={quantity}
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />

      <select
        className="unit_input"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="Select">Select</option>
        <option value="pcs">pcs</option>
        <option value="kg">kg</option>
        <option value="liter">liter</option>
      </select>
    </form>
  );
}
