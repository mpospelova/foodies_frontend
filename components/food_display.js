import { useContext } from 'react'
import GlobalContext from '../utils/global-context'

export default function FoodDisplay() {
    const global = useContext(GlobalContext);

    //function handleClick() {
    //    foodList.push(
    //        {
    //            id: 123,
    //            name: "Paprika",
    //            quantity: 3,
    //            unit: "pcs",
    //            expir_date: new Date(2022, 11, 21)
    //        }
    //    )
    //    global.update({
    //      count: global.count + 1
    //    })
    //}

    function computeColor(food_item) {
        let currentDate = new Date();
        if(currentDate - food_item.time < 0) {
            return "#dd5823"; //Red
        }else if((currentDate - food_item.time) < (7 * 24 * 60 * 60 * 1000)){
            return "#d1bc23"; //Yellow
        }else {
            return "#6fc41f"; //Green
        }
    }
    //const foodList = [
    //    {
    //        id: 123,
    //        name: "Paprika",
    //        quantity: 3,
    //        unit: "pcs",
    //        expir_date: new Date(2022, 11, 21)
    //    },
    //    {
    //        id: 12,
    //        name: "Tomatoes",
    //        quantity: 5,
    //        unit: "pcs",
    //        expir_date: new Date(2021, 9, 12)
    //    },
    //    {
    //        id: 111,
    //        name: "Bananas",
    //        quantity: 2,
    //        unit: "pcs",
    //        expir_date: new Date(2018, 11, 24)
    //    },
    //];
    const foodList = global.foodList;
    foodList.sort(function (f1, f2) {
        return f2.time - f1.time;
    })
    let cnter = 0;
    cnter += 1;
    return (
        <>
            <p> Test test test </p>
            <>
              {
                foodList.map((item, index) =>
                  <p 
                    className="food_display_item"
                    key={index}
                    style={{background:computeColor(item)}}>
                    {item.name} {item.quantity} {item.unit} {item.time.toString()}
                  </p>
                )
              }
            </>
        </>
    );
}
