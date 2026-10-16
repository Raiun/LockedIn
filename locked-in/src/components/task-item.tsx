import { TouchableOpacity, Pressable, StyleSheet, View } from "react-native";
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
    <View style={[styles.task, { backgroundColor }]}>
      <TouchableOpacity onPress={onPress} style={styles.taskInfo}>
        <ThemedText style={[styles.taskDescription, { color: textColor }]}>{item.title}</ThemedText>
        <ThemedText style={[styles.taskPoints]}>
          {item.screenTimeReward} minutes
        </ThemedText>
      </TouchableOpacity>
      <View style={styles.actions}>
        <Pressable onPress={() => console.log(`Complete task ${item.title}`)}>
          <ThemedText style={[styles.text, { color: "#14c90e" }]}>Complete</ThemedText>
        </Pressable>
        <Pressable onPress={() => console.log(`Delete task ${item.title}`)}>
          <ThemedText style={[styles.text, { color: "#c90e0e" }]}>Delete</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskDescription: {
    textAlign: "left",
    fontSize: 20,
  },
  taskPoints: {
    textAlign: "left",
    fontSize: 16,
    color: "#19a115"
  },
  text: {
    textAlign: "left",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskInfo: {
    flex: 1,
    gap: Spacing.one,
  },
  actions: {
    alignItems: "flex-end",
    gap: Spacing.two,
    marginLeft: Spacing.three,
  },
});