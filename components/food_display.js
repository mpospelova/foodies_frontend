import { useContext } from 'react'
import GlobalContext from '../utils/global-context'
import Link from 'next/link'

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
        let food_expir_date = new Date(food_item.expir_date)
        if(food_expir_date - currentDate < 0) {
            return "#dd5823"; //Red
        }else if((food_expir_date - currentDate) < (7 * 24 * 60 * 60 * 1000)){
            return "#d1bc23"; //Yellow
        }else {
            return "#6fc41f"; //Green
        }
    }
    const foodList = [
        {
            id: 123,
            name: "Paprika",
            quantity: 3,
            unit: "pcs",
            expir_date: new Date(2022, 11, 21).toString()
        },
        {
            id: 12,
            name: "Tomatoes",
            quantity: 5,
            unit: "pcs",
            expir_date: new Date(2021, 9, 12).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2018, 11, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2021, 9, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "Bananas",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
    ];
    //const foodList = global.foodList;
    foodList.sort(function (f1, f2) {
        return (new Date(f1.expir_date)) - (new Date(f2.expir_date));
    })
    return (
        <>
            <div className="food_display_frame">
              {
                foodList.map((item, index) =>
                  <p 
                    className="food_display_item"
                    key={index}
                    style={{background:computeColor(item)}}>
                    {item.name} {item.quantity} {item.unit} {item.expir_date}
                  </p>
                )
              }
            </div>
        </>
    );
}
