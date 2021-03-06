import * as React from 'react';
import { TouchableOpacity, Text, Image, ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { navigation } from '@react-navigation/native';



const { styles, profileStyles } = require('../style');

class ProfileScreen extends React.Component {

    render() {
        const {navigation} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={profileStyles.header}>
                        <View style={profileStyles.headerContent}>
                            <Image style={profileStyles.avatar}
                                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />
                            <Text style={[profileStyles.name, styles.bigText]}>John Doe</Text>
                            <Text style={profileStyles.name}>
                                <Ionicons name={"ios-mail-open-outline"} size={16} color={"white"} /> john@doe.com
                            </Text>
                            <Text style={profileStyles.name}>
                                <Ionicons name={"ios-location-outline"} size={16} color={"white"} /> Thunder Bay, ON
                            </Text>
                        </View>
                    </View>
                    <View style={profileStyles.body}>
                        <View>
                            <Text style={styles.smallText}>Preferences</Text>
                            <TouchableOpacity>
                                <Text style={[profileStyles.option, styles.bigText]}>
                                    <Ionicons name={"ios-create-outline"} size={18} color={"black"} />  Update Profile
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[profileStyles.option, styles.bigText]}>
                                    <Ionicons name={"ios-settings-outline"} size={18} color={"black"} />  Settings
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#bbb' }}>
                            <TouchableOpacity>
                                <Text style={[profileStyles.option, styles.bigText, { color: "#ff3d74" }]}>
                                    <Ionicons name={"ios-log-out-outline"} size={18} color={"#ff3d74"} /> 
                                     Logout
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            
        );
    }
}

module.exports = ProfileScreen;
