import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class TestMenu extends React.Component {
  state={
    pefstatus:'',
    fev1status:'',
    currentUser:'',
    severity:'',
    pefUser:'',
    currentTime:'',
    currentDate:'',
  }
  UNSAFE_componentWillMount=async() =>{ 
      firebase.database().ref('users/currentUser').once('value',(snapshot) =>{
    let data = snapshot.val();
    let currentUser = data;//Object.values(data);
    this.setState({currentUser});
  })
  }
  static navigationOptions = {
    
    headerMode:"float",
    headerStyle: {
        backgroundColor: '#37414a',
        elevation: null
    },

    headerTitleStyle: {
        fontWeight: '300',
        color: '#ffffff',
        fontSize: 20,
        flex:1,
        textAlign:"center"
    },
    // headerLeft: null
    backTitle: "Back",
    headerTintColor: '#fff',      
}
  pressStart = async() => {
    firebase.database().ref('/users/'+this.state.currentUser+'/trial/pefcurrent').once('value',(snapshot) =>{
      let data = snapshot.val();
    let pefstatus = data;//Object.values(data);
    this.setState({pefstatus});   
  });
  firebase.database().ref('/users/'+this.state.currentUser+'/trial/fev1current').once('value',(snapshot) =>{
      let data = snapshot.val();
    let fev1status = data;//Object.values(data);
    this.setState({fev1status});
  });
  firebase.database().ref('/users/'+this.state.currentUser+'/trial/currentTime').once('value',(snapshot) =>{
      let data = snapshot.val();
    let currentTime = data;//Object.values(data);
    this.setState({currentTime});
  });
  firebase.database().ref('/users/'+this.state.currentUser+'/trial/currentDate').once('value',(snapshot) =>{
      let data = snapshot.val();
    let currentDate = data;//Object.values(data);
    this.setState({currentDate});
  });
  firebase.database().ref('users/'+this.state.currentUser+'/pef').once('value',(snapshot) =>{
    let data = snapshot.val();
    let pefUser = data;//Object.values(data);
    this.setState({pefUser});
  })
  let resultSeverity = this.state.pefstatus/this.state.pefUser;
if (resultSeverity > 0.8){
  this.setState({severity:"NORMAL"})
}
else if (resultSeverity <= 0.79 && resultSeverity > 0.50){
  this.setState({severity:"MODERATE"})
}
else if (resultSeverity <= 0.5 ){
  this.setState({severity:"SEVERE"})
}
else {
  this.setState({severity:""})
}
  }
  pressTryAgain = async() => {
  let userRef = firebase.database().ref('users/' + this.state.currentUser+'/date/'+this.state.currentDate+'/'+this.state.currentTime);
    userRef.remove();
  }
  render() {
    
  return (
    <View style={styles.container}>
      
      <View style={styles.headerB}></View>
      <View style={styles.sTest}>
      
      
      <View style={styles.scrollView}>
      <Text style={styles.sTestText}></Text><Text style={styles.sTestText}></Text>
      <Text style={styles.sTestText}>START TEST</Text>
      <Text style={styles.sTestText2}>
      EXHALE AS HARD AND AS LONG AS YOU CAN AFTER PRESSING START</Text>
      <TouchableOpacity  onPress={()=>{this.pressStart()}}>
          <Image source={{uri:'https://i.ibb.co/rx4mYKW/pef-2-2x-2.png',}}style={styles.imageIconStyle2}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{this.pressTryAgain()}}>
          <Image source={{uri:'https://i.ibb.co/sHG087Q/Button-with-Background-7-2x.png',}}style={styles.imageIconStyle3}/>
        </TouchableOpacity>
        <Text style={styles.sTestText}>RESULT:</Text>
        <Text style={styles.boldtext}>FEV1 : {this.state.fev1status}</Text>
  <Text style={styles.boldtext}>PEF : {this.state.pefstatus}</Text>
  <Text style={styles.boldtext}>CONDITION : {this.state.severity}</Text>
      
      </View>
      </View>
      
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('TestScreen')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/Qpw5zdM/Button-with-Background-3-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Results')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/zb6Qy4Z/Button-with-Background-4-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Etutorial')
          }}>
          <Image
            source={{
              uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6efc3c78405a2511dfcb9fa6e20a1cbf',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SettingScreen')
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/dG3Rh90/Button-with-Background-6-2x.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#d1d1d1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    
    
    width:420,
    height:50,
    backgroundColor:'#37414a'

  },headerA: {
    
    position: 'absolute',
    top: 0,
    left: 0,
    width:420,
    height:77,
    backgroundColor:'#37414a'

  },
  headerB: {
    
    position: 'absolute',
    bottom: 0,
    left: 0,
    width:420,
    height:77,
    backgroundColor:'#333c42'

  },
  testB: {
    
    position: 'absolute',
    bottom: 0,
    left: 0,
    width:104,
    height:64,

  },
  resultsB: {
    
    position: 'absolute',
    bottom: 0,
    left: 90,
    width:104,
    height:64,

  },tutorialB: {
    
    position: 'absolute',
    bottom: 0,
    right: 90,
    width:104,
    height:64,

  },settingsB: {
    
    position: 'absolute',
    bottom: 0,
    right: 0,
    width:104,
    height:64,

  },
  imageIconStyle: {
    height: 60,
    width: 95,
    
  },
  imageIconStyle2: {
    height: 130,
    width: 141,
    
  },
  bottom: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end'
  
  
},
midButton: {
  
  flexDirection: 'row',
  justifyContent: 'space-between',
  
  
  
},
sTest: {
  flex: 1,
  flexDirection:'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap:'nowrap',
  
  
},
sTestText: {
  fontSize:36,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  
  
},
boldtext: {
  fontSize:30,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:'#5c5a5a',
  margin: 10,
   
},
imageIconStyle2: {
    height: 142,
    width: 142,
    
  },
  imageIconStyle3: {
    height: 35,
    width: 120,
    
  },
  sTestText2: {
  fontSize:13,
  fontFamily:'sans-serif',
  textAlign :'center',
  color:'#687089'
  
  
},
scrollView: {
    //backgroundColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
