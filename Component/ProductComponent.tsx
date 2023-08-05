import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export interface IProduct{
    name: string
    details: string
    weight: string
}

const ProductComponent = (props: IProduct) =>{
    return (<View style={styles.mainContainer}>
        <Text>{props.name}</Text>
        <Text>{props.details}</Text>
        <Text>{props.weight}</Text>
        <Button title="Add to bag"></Button>
    </View>)
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#cef5d8",
        height: 20,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ProductComponent;