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
            return "#dd234b"; //Red
        }else if((food_expir_date - currentDate) < (7 * 24 * 60 * 60 * 1000)){
            return "#ddb523"; //Yellow
        }else {
            return "#6add23"; //Green
        }
    }

    function generateImageUrl(item) {
        return "https://emojiapi.dev/api/v1/" + item.name + "/40.png";
    }

    const foodList = [
        {
            id: 123,
            name: "chicken",
            quantity: 3,
            unit: "pcs",
            expir_date: new Date(2022, 11, 21).toString()
        },
        {
            id: 12,
            name: "tomato",
            quantity: 5,
            unit: "pcs",
            expir_date: new Date(2021, 9, 12).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2018, 11, 24).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2021, 9, 24).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2021, 9, 18).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2021, 11, 24).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "banana",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
        {
            id: 111,
            name: "tomato",
            quantity: 2,
            unit: "pcs",
            expir_date: new Date(2022, 11, 24).toString()
        },
    ];
    //const foodList = global.foodList;
    foodList.sort(function (f1, f2) {
        return (new Date(f1.expir_date)) - (new Date(f2.expir_date));
    })
    foodList.push({empty: true})
    foodList.push({empty: true})
    foodList.push({empty: true})
    return (
        <>
            <div className="food_display_frame">
              {
                  foodList.map((item, index) => {
                      if(item.empty !== undefined) {
                          return (
                            <div 
                              className="food_display_item"
                              key={index}
                              style={{visibility:"hidden"}}>dummy
                            </div>
                          );
                      } else {
                          return (
                              <>
                                <img src={generateImageUrl(item)}
                                    style={{float: "left"}} 
                                ></img>
                                <div 
                                  className="food_display_item"
                                  key={index}
                                  style={{background:computeColor(item)}}>
                                  <b>{item.name}</b> {item.quantity} {item.unit}
                                </div>
                              </>
                          );
                          //return (
                          //    <>
                          //    <div style={{
                          //          width:"50px",
                          //          float:"left",
                          //          background:"#CEE5D0"
                          //    }}>
                          //    emoji
                          //    </div>
                          //    <div style={{background:"#FF7878"}}>
                          //          test
                          //      </div>
                          //    </>
                          //);
                      }
                  }
                )
              }
            </div>
        </>
    );
}
