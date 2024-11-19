import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HorizontalRule = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20, // Space above and below the rule
    },
    line: {
        flex: 1, // Ensures the line stretches
        height: 1, // Thickness of the line
        backgroundColor: '#ccc', // Line color
    },
    text: {
        marginHorizontal: 10, // Space between text and the lines
        fontSize: 16,
        color: '#333', // Text color
    },
});

export default HorizontalRule;
