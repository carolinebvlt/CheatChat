import React from 'react'
import { StyleSheet, View } from 'react-native'
import Screen from './Screen'
import Key from './Key'

class Calculator extends React.Component {

	constructor(props) {
		super(props)
		this.state = {calcul: '', result: ''}
	}

	upCalc(strToAdd) {
		this.setState({calcul:this.state.calcul+strToAdd})
		console.log(this.state);
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.screenBox}>
					<Screen strToShow={this.state.calcul} />
				</View>
				<View style={styles.KeyboardBox}>

					<View style={styles.line}>
						<Key keyType={'number'} texte={'1'} clickHandler={() => {this.upCalc('1')}} />
						<Key keyType={'number'} texte={'2'} clickHandler={() => {this.upCalc('2')}} />
						<Key keyType={'number'} texte={'3'} clickHandler={() => {this.upCalc('3')}} />
						<Key keyType={'number'} texte={'+'} clickHandler={() => {this.upCalc(' + ')}} />
					</View>
					<View style={styles.line}>
						<Key keyType={'number'} texte={'4'} clickHandler={() => {this.upCalc('4')}} />
						<Key keyType={'number'} texte={'5'} clickHandler={() => {this.upCalc('5')}} />
						<Key keyType={'number'} texte={'6'} clickHandler={() => {this.upCalc('6')}} />
						<Key texte={'-'} clickHandler={() => {this.upCalc(' - ')}} />
					</View>
					<View style={styles.line}>
						<Key keyType={'number'} texte={'7'} clickHandler={() => {this.upCalc('7')}} />
						<Key keyType={'number'} texte={'8'} clickHandler={() => {this.upCalc('8')}} />
						<Key keyType={'number'} texte={'9'} clickHandler={() => {this.upCalc('9')}} />
						<Key texte={'x'} clickHandler={() => {this.upCalc(' x ')}} />
					</View>
					<View style={styles.line}>
						<Key texte={'('} clickHandler={() => {this.upCalc(' (')}} />
						<Key keyType={'number'} texte={'0'} clickHandler={() => {this.upCalc('0')}} />
						<Key texte={')'} clickHandler={() => {this.upCalc(') ')}} />
						<Key texte={'/'} clickHandler={() => {this.upCalc(' / ')}} />
					</View>
					<View style={styles.line}>
						<Key texte={'C'} clickHandler={() => {this.setState({calcul:''})}} />
						<Key texte={','} clickHandler={() => {this.upCalc(',')}} />
						<Key texte={'^'} clickHandler={() => {this.upCalc('^')}} />
						<Key texte={'='} clickHandler={() => {this.upCalc(' = ')}} />
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create(
	{
		mainContainer: {
			flex: 1,
			flexDirection: 'column',
			paddingTop: 30,
			paddingBottom: 5,
			paddingLeft: 5,
			paddingRight: 5,
			backgroundColor: '#00141f'
		},
		screenBox: {
			flex: 1,
			backgroundColor: '#c9d2d6',
			borderWidth: 1,
			borderRadius: 10,
			marginBottom: 5
		},
		KeyboardBox: {
			flex: 4
		},
		line: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-around',
			padding: 10
		}
	}
)

export default Calculator
