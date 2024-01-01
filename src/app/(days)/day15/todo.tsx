import { View, Text, StyleSheet, FlatList, Pressable, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import React, { useState } from "react"
import { Stack } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import NewTaskInput from "@/components/NewTaskInput"
import { SafeAreaView } from "react-native-safe-area-context"

export type Task = {
  title: string
  isFinished: boolean
}

const dummyTasks: Task[] = [
  {
    title: "Homework",
    isFinished: false,
  },
  {
    title: "Inspection",
    isFinished: true,
  },
  {
    title: "Shopping",
    isFinished: false,
  },
  {
    title: "Study",
    isFinished: true,
  },
  {
    title: "Homework - Clean the Room",
    isFinished: false,
  },
  {
    title: "Homework - Washing",
    isFinished: false,
  },
]

const TodoScreen = () => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks)

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTask = [...currentTasks]
      updatedTask[index].isFinished = !updatedTask[index].isFinished
      return updatedTask
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.taskContainer}
      keyboardVerticalOffset={120}
    >
      <Stack.Screen options={{ title: "TODO" }} />

      <FlatList
        contentContainerStyle={{
          gap: 10,
        }}
        data={tasks}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => onItemPressed(index)} style={styles.taskContainer}>
            <MaterialCommunityIcons
              name={item.isFinished ? "checkbox-marked-outline" : "checkbox-blank-outline"}
              size={24}
              color="dimgray"
            />
            <Text style={[styles.taskTitle, { textDecorationLine: item.isFinished ? "line-through" : "none" }]}>
              {item.title}
            </Text>
          </Pressable>
        )}
        ListFooterComponent={() => (
          <NewTaskInput onAdd={(newTodo: Task) => setTasks((currentTask) => [...currentTask, newTodo])} />
        )}
      />
    </KeyboardAvoidingView>
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

export default TodoScreen
