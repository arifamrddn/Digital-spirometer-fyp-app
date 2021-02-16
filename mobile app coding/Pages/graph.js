import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  LoaderComponent,
  ScrollView,
  Button,
  
} from 'react-native';
import * as firebase from 'firebase';
import Constants from 'expo-constants';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class graph extends React.Component {
  state={
    currentUser:"",
    currentDate:"",
    severity:"",
    volume1:0.00,
    volume2:0.00,
    volume3:0.00,
    volume4:0.00,
    volume5:0.00,
    volume6:0.00,
    volume7:0.00,
    volume8:0.00,
    volumeData: [],
    labelData:[],
    displayDate: [],
    pef : 0,
    fev1: 0,
    pefUser: 1,
    fev1User: 1,
  
  }

  UNSAFE_componentWillMount=async() =>{ 
      firebase.database().ref('users/currentUser').once('value',(snapshot) =>{
    let data = snapshot.val();
    let currentUser = data;//Object.values(data);
    this.setState({currentUser});
  })
  }
  printGraph = async() => {
    let dateValue = this.props.navigation.state.params.something; //get value from last page
    let timeValue = this.props.navigation.state.params.something2; 
    let currentUser = this.props.navigation.state.params.currentUser;
    var volumeData =[];
    var labelData = [];
    
       firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '1'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume1: data2});
    }
    
   
  })
     if (this.state.volume1 !=0){volumeData.push(this.state.volume1);}
    firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+'2'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume2: data2});
    }
    
  })
     if (this.state.volume2 !=0){volumeData.push(this.state.volume2);}
     firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '3'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume3: data2});
    }
    
  })
     if (this.state.volume3 !=0){volumeData.push(this.state.volume3);}
     firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '4'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume4: data2});
    }
    
  })
     if (this.state.volume4 !=0){volumeData.push(this.state.volume4);}
     firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '5'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume5: data2});
    }
    
  })
     if (this.state.volume5 !=0){volumeData.push(this.state.volume5);}
     firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '6'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume6: data2});
    }
    
  })
     if (this.state.volume6 !=0){volumeData.push(this.state.volume6);}
     firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '7'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume7: data2});
    }
    
  })
     if (this.state.volume7 !=0){volumeData.push(this.state.volume7);}
     firebase.database().ref('/users/'+this.state.currentUser+'/date/'+dateValue+'/'+timeValue+'/'+ '8'+'/volume').once('value',(snapshot) =>{
    
    let data = snapshot.val();
    if (data !== null){
      let data2 = data.toFixed(2);
      this.setState({volume8: data2});
    }
    
  })
     if (this.state.volume8 !=0){volumeData.push(this.state.volume8);}
  
    this.setState({volumeData});
    this.setState({labelData});
  var i;
for (i = 1; i <= volumeData.length; i++) {
  labelData.push(i + 's');
}
let fev1=this.state.volume1;
this.setState({fev1}); 
let pef=volumeData[volumeData.length-1];
this.setState({pef});
firebase.database().ref('users/'+this.state.currentUser+'/pef').once('value',(snapshot) =>{
    let data = snapshot.val();
    let pefUser = data;//Object.values(data);
    this.setState({pefUser});
  })
  
  let resultSeverity = pef/this.state.pefUser;
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
  const data = {
  labels: labelData,
  datasets: [
    {
      data: volumeData,
      color: (opacity = 1) => "#7df9ff", // optional
      strokeWidth: 1 // optional
    }
  ],
  legend: ["Volume vs time"],
  
};
const chartConfig = {
      backgroundColor: "#fb8c00",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => '#ffffff',
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }
     
};
  if (this.state.volume1 != 0){
    var displayDate = [];
  displayDate.push(
  <LineChart
  data={data}
  width={screenWidth}
  height={256}
  chartConfig={chartConfig}
  //bezier
  yAxisSuffix="L"
  xAxisSuffix="s"
  />
  )
  this.setState({displayDate});
  }
  
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
  render() {
    this.result;
    return (
      <View style={styles.container}>
        
        <View style={styles.headerB}></View>
        <View style={styles.sTest}>
          
          
         <Button
        title="Press for graph"
        onPress={() => this.printGraph()}
        
      />
      {this.state.displayDate}
      <Text>     </Text>
  <Text style={styles.boldtext}>FEV1 : {this.state.fev1}</Text>
  <Text style={styles.boldtext}>PEF : {this.state.pef}</Text>
  <Text style={styles.boldtext}>CONDITION : {this.state.severity}</Text>
          
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
  boldtext: {
  fontSize:30,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:'#5c5a5a',
  margin: 10,
   
},
container2: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#d1d1d1',
    padding: 8,
    bottom: 30,
    left: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    width: 420,
    height: 50,
    backgroundColor: '#37414a',
  },
  headerA: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 420,
    height: 77,
    backgroundColor: '#37414a',
  },
  headerB: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 420,
    height: 77,
    backgroundColor: '#333c42',
  },
  testB: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 104,
    height: 64,
  },
  resultsB: {
    position: 'absolute',
    bottom: 0,
    left: 90,
    width: 104,
    height: 64,
  },
  tutorialB: {
    position: 'absolute',
    bottom: 0,
    right: 90,
    width: 104,
    height: 64,
  },
  settingsB: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 104,
    height: 64,
  },
  imageIconStyle: {
    height: 60,
    width: 95,
  },
  imageIconStyle2: {
    height: 130,
    width: 141,
  },
  imageIconStyle3: {
    height: 10,
    width: 22,
    backgroundColor: 'white',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  midButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sTest: {
    flex: 1,
    
    alignItems: 'center',
    flexWrap: 'nowrap',
    margin: 20,
  },
  sTestText: {
    fontSize: 36,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});
