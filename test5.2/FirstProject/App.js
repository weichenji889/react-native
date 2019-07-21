import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
//引入外部js文件
//var loginView = require('./loginView.js')
import LoginView from './loginView'
//导入 json 数据
//var BadgeData = require('./BadgeData')
class App1 extends  Component{
  render() {
    return(
        <View style={styles1.container}>
        {/*返回6个包*/}
             {this.renderAllBadge()}
      </View>
  );
  }
  //返回所有的包
  renderAllBadge(){
    //定义数组装所有子组件
    var allBadge = [];
    // 遍历json数据
    for(var i=0;i<BadgeData.data.length;i++){
      //取出单独的数据对象
      var badge = BadgeData.data[i];
      //直接装入数组
      allBadge.push(
      <View key={i} style = {styles1.outViewStyle}>
          <Image source={'./images/bao03.png'} style={styles1.imageStyle}/>
      <Text style={styles1.mainTitleStyle}>
          {badge.title}
          </Text>
          </View>
    );
    }
    // 返回数组
    return allBadge;
  }
}
const  styles1= StyleSheet.create({
  container: {
    flex: 1,  //占满整个屏幕
    backgroundColor: 'purple',
  },
  outViewStyle:{
  },
  imageStyle:{
    width:80,
    height:80
  },
  mainTitleStyle:{
  }
})
class App2 extends  Component{
  render() {
    return(
        <View style={styles2.container}>
            <TextInput style={styles2.inputStyle}
			 // value={'我是默认文字'}
			//  keyboardType={'number-pad'}
			  //多行显示
			 // multiline={true}
			// password={true}
			placeholder={'我是占位文字'}
			/>
        </View>
     );
  }
 }
  const styles2= StyleSheet.create({
    container: {
      flex: 1,  //占满整个屏幕
      backgroundColor: 'purple',
    },
  	inputStyle:{
		marginTop:30,
  		width:300,
  		height:50,
  		// 背景
  		//backgroundColor:'black'
  		borderWidth:1,
  		borderColor:'#e8e8e8'
  	}
  })
 class App extends  Component{
  render() {
    return(
        <View style={styles3.container}>
		       <LoginView/>
        </View>
     );
  }
 }
  const styles3= StyleSheet.create({
    container: {
      flex: 1,  //占满整个屏幕
      backgroundColor: 'purple',
    }
  })
export default App;
