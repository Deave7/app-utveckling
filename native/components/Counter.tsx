import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{count}</Text>
            <View style={styles.buttonContainer}>
                <View>
                    <Button title="Increase" onPress={() => setCount(count + 1)} />
                </View>
                <View >
                    <Button title="Decrease" onPress={() => setCount(count - 1)} disabled={count === 0} />
                </View>
                <View >
                    <Button title="Reset" onPress={() => setCount(0)} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        fontSize: 48,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },

});

export default Counter;
