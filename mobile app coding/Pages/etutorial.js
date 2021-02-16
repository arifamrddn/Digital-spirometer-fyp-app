import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image, Button, ScrollView , SafeAreaView} from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class TestFev extends React.Component {
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
  return (
    <View style={styles.container}>
    <View style={styles.headerB}></View>
      <SafeAreaView style={styles.container2}>
      <ScrollView style={styles.scrollView}>
      
      
      
      <View style={styles.sTest}>
      <Text style={styles.boldtext2}>HOW TO DO THE TEST</Text>
      
      <Text style={styles.boldtext}>STEP 1:</Text>
      <Text style={styles.normaltext}>Users need to get respective PEF and FEV1 average value to check the level of severity</Text>
      <Text style={styles.normaltext}>To do that pressed button below </Text>
      <Button
        title="Settings"
        onPress={() => this.props.navigation.navigate('SettingScreen')}/>

      <Text style={styles.boldtext}>STEP 2:</Text>
      <Text style={styles.normaltext}>Sit up and stay calm </Text>
      <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/616e5217f174f03cb960c62c07e53646',}}style={styles.imageIconStyle2}/>
      <Text style={styles.boldtext}>STEP 3:</Text>
      <Text style={styles.normaltext}>Take a deep breath until lungs filled with air </Text>
      <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/dc1de3ff830331ee4b9caa92c091f6d9',}}style={styles.imageIconStyle2}/>
      <Text style={styles.boldtext}>STEP 4:</Text>
      <Text style={styles.normaltext}>Clip is placed on the patient’s nose and mouth and teeth tightly sealed around the mouthpiece </Text>
      <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/53e88b1f0408ef3dd48ed911cefef51e',}}style={styles.imageIconStyle2}/>
      <Text style={styles.boldtext}>STEP 5:</Text>
      <Text style={styles.normaltext}>Clip is placed on the patient’s nose and mouth and teeth tightly sealed around the mouthpiece </Text>
      <Text style={styles.normaltext}>To do that pressed button below </Text>
      <Button
        title="Test"
        onPress={() => this.props.navigation.navigate('TestScreen')}/>
      <Text style={styles.boldtext}>STEP 6:</Text>
      <Text style={styles.normaltext}>Repeat step 3 to 5 times until get the desired value of FEV1 and FVC </Text>
      <Text style={styles.boldtext2}>FOR THE RESULT</Text>
      <Text style={styles.boldtext}>NORMAL</Text>
      <Text style={styles.normaltext}>No Asthma attack. Lung function normally. Since the percentage of severity is from 80% to 100% </Text>
      <Text style={styles.boldtext}>MODERATE</Text>
      <Text style={styles.normaltext}>Minor Asthma attack. Narrow respiratory airways. Patients do not need to go to the hospital but need to take care of their lungs. Avoid smoke environments. Take an inhaler if needed. </Text>
      <Text style={styles.boldtext}>SEVERE</Text>
      <Text style={styles.normaltext}>Major Asthma attack. Severe airway narrowing. Immediately refer to the doctor. It is considered as Medical emergency. </Text>
      
      
      
      
      </View>
       </ScrollView>
    </SafeAreaView>
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
    padding: 2,
  },
  container2: {
    flex: 7,
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
    height: 142,
    width: 142,
    padding: 4,
    
  },
  imageIconStyle3: {
    height: 35,
    width: 120,
    
  },
  bottom: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
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
  color:'#5c5a5a'
  
  
},
boldtext: {
  fontSize:20,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:'#5c5a5a',
  padding: 4,
  
  
  
},
boldtext2: {
  fontSize:30,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:'#5c5a5a',
  padding: 4,
  
  
  
},
normaltext: {
  fontSize:13,
  fontFamily:'sans-serif',
  textAlign :'center',
  color:'#687089',
  padding: 4,
  
  
  
},
sTestText2: {
  fontSize:13,
  fontFamily:'sans-serif',
  textAlign :'center',
  color:'#687089'
  
  
},
scrollView: {
    //backgroundColor: 'grey',
    justifyContent: 'space-between'
  },
});
