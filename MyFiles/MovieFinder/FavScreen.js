import { View, Text, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import stylesone from './stylesfav';
import styles from './stylesfilm';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {deleFromFav} from '../actions/actionone';

class FavoriteList extends React.Component {
    render() {
        return(
            <ScrollView style={stylesone.scrollViewStyle}>
                <Text style={stylesone.titleTextStyle}>
                    Favorite Movie List :
                </Text>
                {this.props.favData?.map((item, index) => (
                    <View key={index} style={styles.mappedPieceViewStyle}>
                        <Image source={{uri: item.image}} style={styles.imageSourceStyle}/>
                        <Text style={styles.movieNameTextStyle}>
                            {item.nameMovie}
                        </Text>
                        <TouchableOpacity onPress={() => this.props.deleteFav(this.props.favData, item.image, item.nameMovie)} style={stylesone.deleteButtonStyle}>
                            <Text>
                        delete from favorite
                            </Text>
                        </TouchableOpacity>
                    </View>))}
            </ScrollView>
        );
    }
}
function mapStateToProps(state) {
    return {
        favData: state.reducerFav.favData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        deleteFav: (favData, img, nameM) => dispatch(deleFromFav(favData, img, nameM)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FavoriteList);