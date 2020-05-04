import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HamburgerIcon from './HamburgerIcon';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';
import SwipeCard from './SwipeCard';
// import ChatList from '../components/ChatList';
import { ScrollView } from 'react-native-gesture-handler';
// import Tab3 from './Tab3.js';
// import Tab2 from './Tab2.js';


export default class GreenScreen extends Component {
    static navigationOptions = () => {
        return {
            title: 'Green',
            headerLeft: <HamburgerIcon/>
        };
    };
    render() {
        return (
            <Container>
                {/* <ScrollView> */}
                {/* <ChatList /> */}
                {/* </ScrollView> */}
                <Tabs>
                    <Tab
                    heading='Green Tab'>
                            <SwipeCard />
                    </Tab>
                    <Tab heading='Tab 2'>
                        {/* <Tab2 /> */}
                        <Text style={styles.title}>Green Screen</Text>

                    </Tab>
                    <Tab heading='Tab 3'>
                        {/* <Tab3 /> */}
                        <Text style={styles.title}>Green Screen</Text>

                    </Tab>
                </Tabs>
            </Container>
        );
    }
 }
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    },
    title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
 });