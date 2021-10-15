import FoodInputField from "../components/food_input";

export default function InputPage() {
  return (
    <div className="input_page">
      <h2 className="input_page_title"> Enter your food!!!</h2>

      <div className="input_field_names">
        <div className="input_name">Name</div>
        <div className="input_quantity">Quantity</div>
        <div className="input_unit">Unit</div>
      </div>

      <div className="input_container">
        <FoodInputField />
      </div>
    </div>
  );
}
