import { TransitionSpecs } from '@react-navigation/stack';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Second extends Component{
    render(){
        // 전달받은 파라미터 데이터의 값들을 간결하게 작성하기 위해
        // 구조분해 할당 이용
        const {name, age} = this.props.route.params; 
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Second Screen</Text>
                <Button title="Go Back" onPress={()=>{this.props.navigation.goBack()}}></Button>
                <Button title="Go to Top Screen" color="indigo" onPress={()=>{this.props.navigation.popToTop()}}></Button>
            
                {/* navigate()할때 전달된 데이터 객체는 자동으로 이 컴포넌트의 this.props 변수 안에 route라는 이름의 멤버변수 안에 저장되어 있음. */}
                 <Text style={styles.text}>{this.props.route.params.name} , {this.props.route.params.age}</Text>
                 <Text style={styles.text}>{name} : {age}</Text>
            </View>
        );
    }

    // render()메소드 전에 자동 호출되는 라이프사이클 메소드
    componentDidMount(){
        this.props.navigation.setOptions({title:'Good!'});
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