import React, { Component } from 'react';

import { 
  AppRegistry, 
  Text, 
  View, 
  StyleSheet, 
  Dimensions, 
  Linking, 
  Image 
} from 'react-native';

import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Left, 
  Body, 
  Right, 
  Item, 
  Input, 
  Label,
  Button,
  Icon,
  Title,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';


var loop = [];

export default class NativeBaseAnis extends Component {
  
  renderContent() {

    return (
        <Content>
          <Image 
            style = { styles.cover }
            source = {require('./img/cover.jpg')} 
          />
          <View style = {styles.profileContainer} >
            <Card>
              <Image 
              style = { [styles.profile,{ margin:2 }] }
              source = {require('./img/anis.jpg')} 
              />
            </Card>
          </View>
          <View style = {{ zIndex:1 }} >
              <View style = {styles.center} >              
                
                <Text style = {styles.nameTitle} > Anis Najib</Text>

              </View>

              <View style = {{ flexDirection:'row', justifyContent:'center' }}>
                <Right>                
                  <Button light full >
                      <View style = {{ flexDirection:'column', justifyContent:'center',alignItems:'center'}}>

                        <Image 
                          style = { styles.iconTab }
                          source = {require('./img/activity.png')} 
                        />
                      
                        <Text style = {{fontSize:10}} >Activity Log</Text>
                      </View>
                  </Button>
                </Right>

                <Body>
                  <Button light full >
                    <View style = {{ flexDirection:'column', justifyContent:'center',alignItems:'center'}}>

                      <Image 
                        style = { styles.iconTab }
                        source = {require('./img/update.png')} 
                      />
                    
                      <Text style = {{fontSize:10}} >Update Info</Text>
                    </View>
                  </Button>
                </Body>
                <Body>
                  <Button light full >
                      <View style = {{ flexDirection:'column', justifyContent:'center',alignItems:'center'}}>

                      <Image 
                        style = { styles.iconTab }
                        source = {require('./img/view.png')} 
                      />
                    
                      <Text style = {{fontSize:10}} >View as</Text>
                    </View>
                  </Button>
                </Body>
                <Left>
                  <Button light full >

                    <Image 
                      style = { styles.iconTab }
                      source = {require('./img/menu.png')} 
                    />
                  
                  </Button>
                </Left>

              </View>

              <Text>{'\n'}</Text>

              <Button full bordered primary >
                  <Text style={{ color: '#1a53ff' }}>
                    DESCRIBE WHO YOU ARE
                  </Text>
                </Button>

              <Text>{'\n'}</Text>

              <View>
                <Text>
                  <Image 
                    style = { styles.icon }
                    source = {require('./img/grad.png')} 
                  />
                  Studied at UPM Serdang </Text>
                <Text>
                  <Image 
                    style = { styles.icon }
                    source = {require('./img/grad.png')} 
                  />
                  Went to SMAN 21 </Text>
                
                <Text>
                  <Image 
                    style = { styles.icon }
                    source = {require('./img/grad.png')} 
                  />
                  Went SMPI Al-Azhar 13 </Text>
                
                <Text>
                  <Image 
                    style = { styles.icon }
                    source = {require('./img/grad.png')} 
                  />
                  Went SMPI Al-Azhar 12 </Text>

                <Text style={{color:'#1a53ff'}} >
                    <Image 
                    style = { styles.icon }
                    source = {require('./img/white.png')} 
                  />
                  Edit Details </Text>      

              </View>

              <View style = {{ flexDirection:'row' }}>
                <Image 
                  style = {styles.boxone}
                  source = {require('./img/img1.jpg')} 
                />
                  
                <Image 
                  style = {styles.boxone}
                  source = {require('./img/img2.jpg')} 
                />
              </View>
              
              <View style = {{ flexDirection:'row' }}>            
                <Image 
                  style = {styles.boxtwo}
                  source = {require('./img/img3.jpg')} 
                />
                    
                <Image 
                  style = {styles.boxtwo}
                  source = {require('./img/img4.jpg')} 
                />

                <Image 
                  style = {styles.boxtwo}
                  source = {require('./img/img5.jpg')} 
                />
              </View>

              <View style = {styles.center} >
              
                <Text note>Feature up to 5 photos that you love</Text>

                <Text>{'\n'}</Text>
                <View style = {styles.center} >
                  <Button bordered dark 
                          style = {{ width:180, justifyContent:'center', alignItems:'center' }}
                          onPress={() => Linking.openURL('http://anisnajib.co.nr')} >
                    <Text style={{ color:'black', }}>
                      Anis Najib' website
                    </Text>
                  </Button>
                </View>
                
              </View>
              
              <Text>{'\n'}</Text>

              <View style = {{ flexDirection:'row', justifyContent:'center' }}>
                <Right>
                  <Button light full >
                      <Text>About</Text>
                  </Button>
                </Right>

                <Body>
                  <Button light full >
                      <Text>Photos</Text>
                  </Button>
                </Body>
                <Left>
                  <Button light full >
                      <Text>Friends</Text>
                  </Button>
                </Left>
                
              </View>
          </View>
          <Card>
            <CardItem>
              <View style = {{ flexDirection:'column' }}> 
                <View style = {{ flexDirection:'row' }}>        
                    <Image 
                    style = { [styles.icon, { borderRadius:50, padding:20 }] }
                    source = {require('./img/anis.jpg')} 
                    />
                    <Input 
                    style = {{ paddingLeft:20, width:100 }}
                    placeholder = 'whats on your mind?'
                    />
                </View>
                <View style = {{ flexDirection:'row',  justifyContent: 'center', alignItems:'center' }}>     
                  <View style = {{ flexDirection:'row', paddingLeft:20, justifyContent: 'center', alignItems:'center' }}>
                    <Icon name='md-videocam' />
                    <Text>Live</Text>
                  </View>
                  <View style = {{ flexDirection:'row', paddingLeft:50, justifyContent: 'center', alignItems:'center' }}>                
                    <Icon name='md-image' />
                    <Text>Image</Text>
                  </View>
                  <View style = {{ flexDirection:'row', paddingLeft:60, justifyContent: 'center', alignItems:'center' }}>                
                    <Icon name='md-flag' />
                    <Text>Location</Text>
                  </View>
                </View>
              </View>
            </CardItem>            
          </Card>
          <Card>
            <CardItem>
              <View style = {{ flexDirection:'row',justifyContent: 'center', alignItems:'center' }}>
                <Icon name='md-image' />
                <Text > None of the photo were shown</Text>
              </View>
            </CardItem>            
          </Card>
          <Card>
            <CardItem>
              <View style = {{ flexDirection:'column', marginLeft:-15 }}>
                <View style = {{ flexDirection:'row', alignItems: 'center' }}>
                  <Icon name='md-body' />
                  <Text>Friends</Text>
                </View>
                <View style = {{ flexDirection:'row' }}>  
                  <View style = {{ flexDirection:'column' }}>          
                    <Image 
                      style = {styles.boxtwo}
                      source = {require('./img/p1.jpg')} 
                    />
                    <Text>Jesica Mamamia</Text>
                  </View>
                  <View style = {{ flexDirection:'column' }}>          
                    <Image 
                      style = {styles.boxtwo}
                      source = {require('./img/p2.jpg')} 
                    />
                    <Text>Lezatoz</Text>
                  </View>

                  <View style = {{ flexDirection:'column' }}>          
                    <Image 
                      style = {styles.boxtwo}
                      source = {require('./img/p3.jpg')} 
                    />
                    <Text>Umm Ghaliyah</Text>
                  </View>
                </View>
                <View style = {{ flexDirection:'row' }}>            
                <View style = {{ flexDirection:'column' }}>          
                  <Image 
                    style = {styles.boxtwo}
                    source = {require('./img/p4.jpg')} 
                  />
                  <Text>Lucy Ius</Text>
                </View>
                        
                <View style = {{ flexDirection:'column' }}>          
                  <Image 
                    style = {styles.boxtwo}
                    source = {require('./img/p5.jpg')} 
                  />
                  <Text>Ondel Ondel</Text>
                </View>

                <View style = {{ flexDirection:'column' }}>          
                  <Image 
                    style = {styles.boxtwo}
                    source = {require('./img/img4.jpg')} 
                  />
                  <Text>James</Text>
                </View>
              </View>
              </View>
            </CardItem>            
          </Card>
          <Card>
            <CardItem>
                <Left>
                  <View style = {{ marginLeft:-20, flexDirection:'row' }} >
                    <Image 
                        style = {{ width:50, height:50, borderRadius:50, margin:20 }}
                        source = {require('./img/anis.jpg')} 
                    />
                    <Body>
                      <Text>Anis Najib</Text>
                      <Text note>28 Jul at 13:49</Text>
                    </Body>
                  </View>
                </Left>
              </CardItem>
            <CardItem>
              <View style = {{ flexDirection:'column', marginLeft:-15 }}> 
                <Image 
                    style = { {width:400, margin:5} }
                    source = {require('./img/anis.jpg')} 
                />

                <Text>{'\n'}</Text>
                <View style = {{ flexDirection:'row', alignItems:'center'}}>
                  <Icon name='md-thumbs-up' />
                  <Text>Lora Amir Syamlan and 3 Others</Text>
                </View>
                <Text>{'\n'}</Text>
                <View style = {{ flexDirection:'row',  justifyContent: 'center', alignItems:'center', marginLeft:-50}}>     
                  <View style = {{ flexDirection:'row', justifyContent: 'center', alignItems:'center' }}>
                    <Icon name='md-thumbs-up' />
                    <Text>Like</Text>
                  </View>
                  <View style = {{ flexDirection:'row', paddingLeft:50, justifyContent: 'center', alignItems:'center' }}>                
                    <Icon name='md-chatboxes' />
                    <Text>Comment</Text>
                  </View>
                  <View style = {{ flexDirection:'row', paddingLeft:60, justifyContent: 'center', alignItems:'center' }}>                
                    <Icon name='md-share' />
                    <Text>Share</Text>
                  </View>
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>
    );
  }
  
  render() {
    
    return (
      <Container>
        {/* HEADER */}
        {this.renderHeader()}

        {/* CONTENT */}
        {this.renderContent()}

      </Container>
    );
  }
  renderHeader() {
    
    return (
      <Header searchBar>
        <Left>
          <Button small transparent>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>

        <Body>
          <Item rounded style={{width:270, backgroundColor:'white', marginLeft:-37}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Body>
        
        <Right>
          <Button small transparent>
            <Icon name="ios-settings" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width:30,
    height: 30,
  },
  iconTab: {
    width:20,
    height: 20,
  },
  profile: {
    width:100, 
    height:100,
    paddingBottom:20,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems:'center', 
    zIndex:2, 
    padding:143,
    position:'absolute'
  },
  cover: {
    width: Dimensions.get('window').width/1 -6, 
    height:200,
    zIndex:0
  },
  center: {
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  },

  nameTitle: {
    paddingTop:50,
    fontSize: 20,
    color: 'black'
  },
  boxone: {
    margin: 2,
    width: Dimensions.get('window').width/2 -6,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  boxtwo: {
    margin: 2,
    width: Dimensions.get('window').width/3 -6,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },

});

AppRegistry.registerComponent('FacebookInput', () => NativeBaseAnis);