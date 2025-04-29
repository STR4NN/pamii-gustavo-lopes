import React from 'react';
import {Text, Button,View, StyleSheet} from 'react-native';

export default class Contador extends React.Component{
    constructor() {
        super();
        this.state = {
            contador : 0,
        };
    }
    Decrementar(){
        this.setState({
            contador: this.state.contador - 1
        });
    }
}