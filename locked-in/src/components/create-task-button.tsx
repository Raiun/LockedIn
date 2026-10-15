import { Pressable, Text, StyleSheet } from "react-native";

export default function CreateTaskButton() {
    return (
        <Pressable
            onPress={() => {console.log("Create Task Button Pressed")}}
            style={styles.button}
        >
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 2,
        paddingHorizontal: 10,
        backgroundColor: "#000000",
        borderRadius: 10,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold",
    }
})