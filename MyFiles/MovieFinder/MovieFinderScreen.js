import React, { Component } from 'react';
import styles from './stylesfilm'
import { View,Text, ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import {connect} from 'react-redux'
import {setMovieName , setFavFilm , setMovieNameAsync} from '../actions/actionone'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import NetInfo from '@react-native-community/netinfo'


class MovieGame extends React.Component {
    noImg = "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg"
    componentDidMount(){
        this.props.setDataBaseAsync(this.props.movieName)
        this.showInternetConnection()

    }

    componentWillUnmount() {
        this.showInternetConnection()
    }
    
    checkForFavorite(nameMovieM, imageMovieM) {
        const name = this.props.favData.filter(name => name.image === nameMovieM);
        const img = this.props.favData.filter(picture => picture.nameMovie === imageMovieM);
        if ((name.length == 0 && img.length == 0)||(name.length != 0 && img.length == 0)||(name.length == 0 && img.length != 0)) {
          this.props.setFavDataAdd(nameMovieM,imageMovieM);
        }
    }

    showInternetConnection = () => {
        NetInfo.addEventListener(state => {
             if(state.isConnected === false) {
                alert("NO INTERNET CONNECTION")
             }
          });
    }

    render() {
        if(this.props.setLoading === true) {
            return(
                <LoadingScreen/>
            )
        }
        else{
            return (
                <View style={styles.mainScreenFilmFlex}> 
                    <View style={styles.mainScreenTopStyle}>
                    <TouchableOpacity onPress={() =>this.props.setDataBaseAsync(this.props.movieName)} style={styles.touchOpPTF}>
                        <Text style={styles.touchOpPTFTextStyle}>
                        PUSH TO FIND
                        </Text>
                    </TouchableOpacity>
                    <TextInput onChangeText={text => this.props.nameForSearch(text)} placeholder="Tap here" placeholderTextColor="teal" style={styles.textInputtouchOpStyle}/>
                    </View >
                    <View style={styles.searchPanelViewStyle}>
                    <ScrollView style={{flex:1}}>
                    <Text style={styles.searchPanelTextStyle}>
                        SEARCH RESULTS :
                    </Text>
                    {this.props.dataBase?.map((item,index) => (
                    <View key={index} style={styles.mappedPieceViewStyle}>
                    <Image source={{uri: item?.show?.image?.medium ?? this.noImg}} style={styles.imageSourceStyle}/>
                    <Text style={styles.movieNameTextStyle}>
                        {item.show.name}
                    </Text>
                    <TouchableOpacity  onPress={() => this.checkForFavorite(item?.show?.image?.medium ?? this.noImg , item.show.name)}style={styles.checkForFavButtonStyle}>
                        <Text>
                        add to favorite
                        </Text>
                    </TouchableOpacity>
                    </View>))}
                    </ScrollView>
                    </View >
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return { 
        movieName : state.reducerMovie.movie,
        dataBase : state.reducerMovie.arrayDataBase,
        favData : state.reducerFav.favData,
        setLoading:state.reducerMovie.isLoadingShouldAnim,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setDataBaseAsync:(nameMovieP) => dispatch(setMovieNameAsync(nameMovieP)),
        nameForSearch:(movie) => dispatch(setMovieName(movie)),
        setFavDataAdd:(image , nameMovie) => dispatch(setFavFilm(image , nameMovie))
    }
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(MovieGame);