import { View, Text, TextInput, StyleSheet } from "react-native"
import React, { useState } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Task } from "@/app/(days)/day15/todo"

type NewTaskInput = {
  onAdd: (newTask: Task) => void
}

const NewTaskInput = ({ onAdd }: NewTaskInput) => {
  const [newTask, setNewTask] = useState("")
  return (
    <View style={styles.taskContainer}>
      <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="gray" />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="New Task"
        onEndEditing={() => {
          if (!newTask) {
            return
          }
          onAdd({ title: newTask, isFinished: false })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  taskTitle: {
    fontFamily: "Inter",
    fontSize: 16,
    color: "#303137",
    flex: 1,
  },
  input: {
    fontFamily: "Inter",
    fontSize: 16,
    color: "#303137",
    flex: 1,
  },
})

export default NewTaskInput
