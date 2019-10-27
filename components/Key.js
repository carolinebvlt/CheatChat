
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


class Keyboard extends React.Component {

	render() {
		if (this.props.keyType == 'number') {
			return (
				<TouchableOpacity style={styles.key} onPress={this.props.clickHandler} >
					<Text style={styles.number}>{this.props.texte}</Text>
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity style={styles.key} onPress={this.props.clickHandler} >
					<Text style={styles.char}>{this.props.texte}</Text>
				</TouchableOpacity>
			)
		}
	}
}

const styles = StyleSheet.create(
	{
		key : {
			width: 60,
			height: 60,
			borderWidth: 0.5,
			borderColor: '#c9d2d6',
			borderRadius: 20,
			justifyContent: 'center',
			alignItems: 'center'
		},
		number: {
			fontSize: 30,
			color: 'white'
		},
		char: {
			fontSize: 25,
			color: '#c9d2d6'
		}
	}
)

export default Keyboard
