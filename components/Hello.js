import React from 'react'
import Proptypes from 'prop-types'
import { View, Button, Text } from 'react-native'

const Hello = ({ onClick, reset, message }) => {
    return(
        <View>
            <Text>{ message }</Text>
            <Button onPress={ onClick } title="Click" />
            <Button onPress={ reset } title="Click me" />
        </View>
    )
}

Hello.propTypes = {
    onClick: Proptypes.func.isRequired,
    reset: Proptypes.func.isRequired,
    message: Proptypes.func.isRequired
}

export default Hello
