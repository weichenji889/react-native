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
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
export default class LoginView extends  Component{
  render() {
    return(
        <View style={styles.container}>
			  {/*头像*/}
               <Image source={require('./images/bao03.png')} style={styles.iconStyle}/>
			   {/*账号，密码*/}
			   <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>
			   <TextInput placeholder={'请输入用户密码'} password={true} style={styles.textInputStyle}/>
			     {/*登陆*/}
				 <View style={styles.loginBtnStyle}>
				    <Text style={{color:'white'}}>登陆</Text>
				 </View>
				  {/*设置*/}
				  <View style={styles.settingStyle}>
				    <Text>无法登陆</Text>
					 <Text>新用户</Text>
				 </View>
				  {/*其他登陆*/}
				<View style={styles.otherLoadingStyle}>
				    <Text>其他登陆方式:</Text>
					 <Image style={styles.otherImageStyle} source={require('./images/bao03.png')} />
					 <Image style={styles.otherImageStyle} source={require('./images/bao05.png')}/>
					 <Image style={styles.otherImageStyle} source={require('./images/bao08.png')} />
				 </View>
				  
        </View>
     );
  }
 }
 const styles = StyleSheet.create({
	  container:{
		  flex:1,
		  backgroundColor:'#dddddd',
		  alignItems:'center',
	  },
	  iconStyle:{
		  marginTop:200,
		  marginBottom:30,
		  width:80,
		  height:80,
		  borderRadius:40,
		  borderWidth:3,
		  borderColor:'white'
	  },
	  textInputStyle:{
		  width:980,
		  height:38,
		  backgroundColor:'white',
		  marginBottom:2,
		  textAlign:'center'
	  },
	  loginBtnStyle:{
		  height:35,
		  width:width*0.8,
		  backgroundColor:'blue',
		  marginTop:30,
		  marginBottom:30,
		  justifyContent:'center',
		  alignItems:'center',
		  borderRadius:8
	  },
	  settingStyle:{
		  flexDirection:'row',
		//  backgroundColor:'red',
		  //设置侧轴对齐方式
		  width:width*0.8,
		  justifyContent:'space-between'
	  },
	  otherLoadingStyle:{
		   flexDirection:'row',
		   alignItems:'center',
		   position:'absolute',
		   bottom:10,
		   marginLeft:0
	  },
	  otherImageStyle:{
		  width:50,
		  height:50,
		  borderRadius:25,
	  }
 });
//export default loginView;
