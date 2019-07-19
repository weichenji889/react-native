import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
//导入 json 数据
var BadgeData = require('./BadgeData')
class App extends  Component{
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
          <Image source={{uri:badge.icon}} style={styles1.imageStyle}/>
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
export default App;
