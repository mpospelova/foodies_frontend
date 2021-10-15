import React from 'react';

const GlobalContext = React.createContext({
    foodList: [],  
    count: 0,
    update: (data) => {}
})

export default GlobalContext
