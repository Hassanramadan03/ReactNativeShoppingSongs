import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';
export default class App extends Component {
    render() {

        return (
            <ScrollView>
                    <Header headerText={'First App'} />
                    <AlbumList />
               
            </ScrollView>
        );
    }
}

 
