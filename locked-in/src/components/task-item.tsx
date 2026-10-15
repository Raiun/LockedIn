import { TouchableOpacity, Pressable, StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";

type ItemData = {
  id: string;
  title: string;
  screenTimeReward: number;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export default function TaskItem({ item, onPress, backgroundColor, textColor }: ItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.task, { backgroundColor }]}>
      <ThemedText style={[styles.text, { color: textColor }]}>{item.title}</ThemedText>
      <ThemedText style={[styles.text, { color: textColor }]}>
        {item.screenTimeReward} minutes
      </ThemedText>
      <Pressable onPress={() => console.log(`Complete task ${item.title}`)}>
        <ThemedText style={[styles.text, { color: "#14c90e" }]}>Complete</ThemedText>
      </Pressable>
      <Pressable onPress={() => console.log(`Delete task ${item.title}`)}>
        <ThemedText style={[styles.text, { color: "#c90e0e" }]}>Delete</ThemedText>
      </Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  text: {
    textAlign: "left",
  },
  task: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});