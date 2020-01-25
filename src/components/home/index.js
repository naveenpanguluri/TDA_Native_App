import React, {Component} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

class Home extends Component {

  render() {
    return (
     <ScrollView style={styles.bgW}>
      <KeyboardAvoidingView behavior="padding" enabled>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

       <View style={styles.header}>
        <TextInput
          style={{ flex:1, justifyContent: 'center', height:36, paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Search WorkShift ID"
        />
        <Button
          style={{fontSize: 20}}
          color="#ff751a"
          title="search"
          onPress={() => this.props.navigation.navigate('Login')}
        />
       </View>

       <View style={styles.mh15}>

        <View style={styles.title}>
          <Text style={[styles.oClr, styles.fs20]}>Work Shift Header Details:</Text>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Driver No</Text>
            <Text>11170</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Driver Name</Text>
            <Text>JAATINEN JARI</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Terminal ID</Text>
            <Text>1002</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Subcontractor company name</Text>
            <Text>Rahtiklinikka oy</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>WorkShift Start Date</Text>
            <Text>05.06.2019 04:00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>WorkShift End Date</Text>
            <Text>05.06.2019 05:30</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Duration of hours</Text>
            <Text>1.30</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>SAP account number</Text>
            <Text>2936983</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Truck Number</Text>
            <Text>39931</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Info</Text>
            <Text>Toimipiste: APS:</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Printer ID</Text>
            <Text>99.99.99.99</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Task Details</Text>
            <Text>1/2</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Task Type</Text>
            <Text>K/R/T</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Line Number</Text>
            <Text>0015</Text>
          </View>
        </View>

        <View style={styles.title}>
          <Text style={[styles.oClr, styles.fs20]}>Hourly And Compensation Information:</Text>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Total Working Hours</Text>
            <Text>11170</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Evening Hours 18-22</Text>
            <Text>0.00</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Night Hours 22-6</Text>
            <Text>0.00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Free Hours</Text>
            <Text>0.00</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Allowance</Text>
            <Text>EI</Text>
          </View>
          <View style={styles.w50}>
            
          </View>
        </View>

        <View style={styles.title}>
          <Text style={[styles.oClr, styles.fs20]}>Other Details:</Text>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Car operating start date</Text>
            <Text>05.06.2019 04:00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Car operating end date</Text>
            <Text>05.06.2019 05:30</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Total Duration</Text>
            <Text>1.30</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Mileage</Text>
            <Text>0-105</Text>
          </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Text>Additional Hours1(min)</Text>
        </View>
        <View style={styles.twoGrid}>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Start time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>End time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Duration</Text>
            <Text>0</Text>
          </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Text>Additional Hours2(min)</Text>
        </View>
        <View style={styles.twoGrid}>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Start time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>End time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Duration</Text>
            <Text>0</Text>
          </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Text>Additional Hours3(min)</Text>
        </View>
        <View style={styles.twoGrid}>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Start time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>End time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Duration</Text>
            <Text>0</Text>
          </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Text>Breakhours1(min)</Text>
        </View>
        <View style={styles.twoGrid}>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Start time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>End time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Duration</Text>
            <Text>0</Text>
          </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Text>Breakhours2(min)</Text>
        </View>
        <View style={styles.twoGrid}>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Start time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>End time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Duration</Text>
            <Text>0</Text>
          </View>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Text>Breakhours3(min)</Text>
        </View>
        <View style={styles.twoGrid}>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Start time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>End time</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w33}>
            <Text style={styles.gClr}>Duration</Text>
            <Text>0</Text>
          </View>
        </View>

        <View style={styles.title}>
          <Text style={[styles.oClr, styles.fs20]}>Subcontractor Compensation:</Text>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>KB</Text>
            <Text>0,00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>PA-%</Text>
            <Text>0,72</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Compensation</Text>
            <Text>126,00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>+PA-Compensation</Text>
            <Text>-0,91</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Costs</Text>
            <Text>126,00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>PA-Date</Text>
            <Text>01-06-2019</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>GIG Compensation</Text>
            <Text>0,00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Date</Text>
            <Text>01-04-2018</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Lava spot price</Text>
            <Text>0,00</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>SAP-Number</Text>
            <Text>2936983</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>Contract Number</Text>
            <Text>PPV26</Text>
          </View>
          <View style={styles.w50}>
            <Text style={styles.gClr}>More Details</Text>
            <Text>kylla</Text>
          </View>
        </View>

        <View style={styles.twoGrid}>
          <View style={styles.w50}>
            <Text style={styles.gClr}>SAP-ID</Text>
            <Text>0</Text>
          </View>
          <View style={styles.w50}>
          </View>
        </View>

       </View>
       </KeyboardAvoidingView>
     </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  header:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  mh15:{
    marginHorizontal: 15
  },
  title:{
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  oClr:{
    color: '#ff751a'
  },
  gClr:{
    color: '#606060'
  },
  bgW:{
    backgroundColor: '#fff'
  },
  fs20:{
    fontSize:20
  },
  twoGrid:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical: 10
  },
  w50:{
    width: '50%'
  },
  w33:{
    width: '33%'
  },

});

export default Home;