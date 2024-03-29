import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Home Screen</Text>
                <Button title="Go to Second" onPress={this.clickBtn}></Button>
            </View>
        );
    }

    clickBtn = () => {
        // react-navigation에서 네비케이팅하는 코드
        // [Navigator에 의해 보여지는 컴포넌트들은 자동으로 props변수안에 navigation이라는 객체가 전달되어 있음]
        //this.props.navigation.navigate('second');

        // 현재 컴포넌트를 화면전환 하면서 finish()하고 싶다면
        //this.props.navigation.replace('second');

        // 화면전환시에 데이터 넘겨주기(android Extra Data와 같은)
        this.props.navigation.navigate('second', {name:"sam", age:20});
    }

}


const styles= StyleSheet.create({
    root : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        padding:8,
        fontWeight:'bold'
    }
});