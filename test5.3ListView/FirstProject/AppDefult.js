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
 class App3 extends  Component{
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
  //ES6写法
  //ES5写法
 /* var  App7 = React.createClass({
	 getInitialState:function(){
		  return{
			  title:'不透明触摸'
		  }
	  },
  render:function(){
    return(
        <View  style={styles4.container}>
		   <TouchableOpacity>
		      <View style={styles4.innerViewStyle}>
		          <Text>点击事件</Text>
			  </View>
		  </TouchableOpacity>
		  <View>
		     <Text>{this.state.title}</Text>
		  </View>
        </View>
        );
    },
  });
  const styles4= StyleSheet.create({
    container: {
      flex: 1,  //占满整个屏幕
      backgroundColor: 'purple',
    },
	innerViewStyle:{
		backgroundColor:'red',
	}
  })*/
  class App5 extends React.Component{
	  constructor(props){
		  super(props);
		  this.state = {
			  opacity:1,
			  person:{
				  name:'kobe',
				  age:39
			  }
		  }
		  console.log('constructor()');
	  }
	 //组件将要被挂载
   	   componentWillMount(){
		   //发送 ajax请求,开启定时器
		   
	   }
	   componentDidMount(){ 
	      let {opacity} = this.state;
		  setInterval(()=>{
			  opacity -= 0.05
			  //判断opacity
			  if(opacity<0.1){
				  opacity = 1;
			  }
			  this.setState({opacity});
		  },500)
	   }
	  //组件将要更新
	  componentwillUpadate(){
	  }
	  componentDidUpdate(){
	  }
	  //组件将要被卸载
	  componentWillUnmount(){
	  }
	   render(){
			console.log('render()');
			let {person}=this.state;
			return(
			   <Text>{person.name}----{person.age}</Text>
			)
		}  
  }
 class App4 extends  Component{
  render() {
    return(
        <View ref="topView" style={styles4.container} onPress={this.renderPress()}>
		   <TouchableOpacity  activeOpacity={0.5}>
		      <View style={styles4.innerViewStyle}>
		          <Text ref="event">我是文本，但可以点击</Text>
			  </View>
		  </TouchableOpacity>
        </View>
     );
  }
  //当按下鼠标
    renderPress(){
		console.log('按下鼠标');
		this.refs.topView
		this.refs.event
    }
 }
 const styles4= StyleSheet.create({
    container: {
      flex: 1,  //占满整个屏幕
      backgroundColor: 'purple',
    },
	innerViewStyle:{
		backgroundColor:'red',
	}
  })
 class App6 extends  Component{
  render() {
    return(
        <View ref="topView" style={styles4.container} onPress={this.renderPress()}>
		   <TouchableOpacity  activeOpacity={0.5}>
		      <View style={styles4.innerViewStyle}>
		          <Text ref="event">我是文本，但可以点击</Text>
			  </View>
		  </TouchableOpacity>
        </View>
     );
  }
  
  class App2 extends  Component{
	//注册计时器
	 constructor(props){
		  super(props);
		  this.state = {
			 currentPage:0
		  }
		  //getInitialState
	 };
  render() {
    return(
	    <View  style={styles.container}>
		    <ScrollView
			 horizontal={true}
			 onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
			>
			      {this.renderAllImage()}
			</ScrollView>
			<View style={styles.pageViewStyle}>
			    {/*返回5个圆点*/}
				{this.renderPageCircle()}
		    </View>
		</View>
     );
  };
     renderPageCircle(){
		 var indicatorArr = [];
		 var style;
		 var  imgsArr = ImageData.data;
		  for(var i=0;i<imgsArr.length;i++){
			  //判断
			  style=(i==this.state.currentPage)? {color:'orange'}:{color:'#000000'}
			  indicatorArr.push(
			     <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
			  );
		  } 
		   return indicatorArr;
	  };
	  //当一帧滚动结束时候调用
	  onAnimationEnd(e){
		  //1.求水平方向偏移量
		  var offSetX = e.nativeEvent.contentOffset.x
	      //求出当前页数
		  var  currentPage =Math.floor(offSetX / width);
	      //console.log(currentPage);
		  this.setState({
			   currentPage:currentPage
		  });
	};
     renderAllImage(){
		 //数组
		 var allImage = [];
		 //拿到图像数组
		 var  imgsArr = ImageData.data;
		 //遍历
		 for(var i=0;i<imgsArr.length;i++){
			 //取出单独的每一个对象
			 var imgItem = imgsArr[i];
			 allImage.push(
				 <Image key={i}  source={require('./img/qianbao.png')} style={{width:width,height:120,backgroundColor:'black'}}/>
			 );
		 }
		  //返回数组
		  return allImage;
	 }
}
class App extends  Component{
	  constructor(props){
		  super(props);
		  this.state = {
			 data:{
				  msg:null,
	              money:20,
	              author_name:null
			 },
		  };
	 };
	  componentDidMount(){
		  this.requestData();
	  }
	   requestData = ()=>{
		   console.log("newlist:"+Wine.result.news_data[0].author_name);
		    this.setState({
				data:{
				  msg:Wine.msg,
	              money:Wine[1],
	              author_name:Wine.result.news_data[0].author_name
			    },
			});
	   }
	  render() {
          return(
	          <Text>
			       {this.state.data.msg}
				   {this.state.data.author_name}
				  {this.state.data.money}
			  </Text>
          );
       };
}
export default App;
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  