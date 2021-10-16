import { useContext } from 'react'
import GlobalContext from '../utils/global-context'
import Link from 'next/link'

export default function FoodDisplay() {
    const global = useContext(GlobalContext);
    
    function computeColor(food_item) {
        let currentDate = new Date();
        let food_expir_date = new Date(food_item.expir_date)
        if(food_expir_date - currentDate < 0) {
            return "#dd234b50"; //Red
        }else if((food_expir_date - currentDate) < (7 * 24 * 60 * 60 * 1000)){
            return "#ddb52350"; //Yellow
        }else {
            return "#6add2350"; //Green
        }
    }

    function generateImageUrl(item) {
        return "https://emojiapi.dev/api/v1/" + item.name + "/32.png";
    }

    function handleEmojiError(e) {
        e.target.src = "https://emojiapi.dev/api/v1/red_question_mark/32.png";
    }

    const foodList = global.foodList.slice();
    
    if(foodList.length === 0) {
        return (
            <>
                <h2 className="food_display_empty_fridge_text">Your Fridge is Empty</h2>
                <div className="food_display_image_container">
                  <img src="/emptyfridge.jpg" />
                </div>
            </>
        )
    } 

    foodList.sort(function (f1, f2) {
        return (new Date(f1.expir_date)) - (new Date(f2.expir_date));
    })
    foodList.push({empty: true})
    foodList.push({empty: true})
    foodList.push({empty: true})
    return (
        <>
            <div className="food_display_image_container">
              <img src="/emptyfridge.jpg" />
            </div>
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
                                <img 
                                    src={generateImageUrl(item)}
                                    style={{float: "left"}} 
                                    onError={handleEmojiError}
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
