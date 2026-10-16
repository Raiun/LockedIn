import { Pressable, Text, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function CreateTaskButton() {
    return (
        <Pressable
            onPress={() => {console.log("Create Task Button Pressed")}}
            style={styles.button}
        >
            <Feather name="edit" size={36} color="white" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: "#000000",
        borderRadius: 10,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold",
    }
})