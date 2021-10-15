export default function FoodInputField() {
  return (
    <form className="input_form">
      <input className="name_input" type="text" />
      <input className="quantity_input" type="text" />
      <select className="unit_input">
        <option value="0">Select</option>
        <option value="1">psc</option>
        <option value="2">liter</option>
        <option value="2">kg</option>
      </select>
    </form>
  );
}
