import React from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import ProductComponent, { IProduct } from "../Component/ProductComponent.tsx";

const ecommerce = () =>{
    const products:IProduct[] = [
        {
            name: "Tide",
            details: "Washing Powder",
            weight: "800 gm"
        },
        {
            name: "Onion",
            details: "daily needs",
            weight: "1kg"
        },
        {
            name: "Milk Vita",
            details: "Dairy Product",
            weight: "1 liter"
        },
        {
            name: "Amul Butter",
            details: "Dairy Product",
            weight: "500 gm"
        }
    ]
    // const handleRenderItem : ListRenderItem<IProduct> = ({item}) =>
    //     <Product name={item.name} id={item.id}/>;
    
    return(
        <View>
            <Text>WELCOME TO LIST SCREEN</Text>
            {products.map((product)=> (
                <ProductComponent name={product.name} details={product.details} weight={product.weight} key={product.id}/>
            ))}
        </View>
    )
}

export default ecommerce;