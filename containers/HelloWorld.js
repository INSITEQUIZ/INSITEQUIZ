import { connect } from 'react-redux'
import { helloWorld, reset } from '../actions/index'
import Hello from '../components/Hello'
import React from 'react'
import { View, Text } from 'react-native'

class HelloWorld extends React.Component{

    render(){
        return(
            <View>
                <Text>Welcome to react native</Text>
                <Hello />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.helloWorld.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch( helloWorld() ),
        reset: () => dispatch( reset() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
