import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native"
import React, { useState } from "react"
import { Stack } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import NewTaskInput from "@/components/NewTaskInput"
import { SafeAreaView } from "react-native-safe-area-context"
import TaskListItem from "@/components/TaskListItem"
import { useHeaderHeight } from "@react-navigation/elements"

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
  const [searchBarQuery, setSearchBarQuery] = useState("")

  const headerHeight = useHeaderHeight()

  const filteredTasks = tasks.filter((task) => {
    if (!searchBarQuery) {
      return true
    }

    return task.title.toLocaleLowerCase().trim().includes(searchBarQuery.toLocaleLowerCase().trim())
  })

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTask = [...currentTasks]
      updatedTask[index].isFinished = !updatedTask[index].isFinished
      return updatedTask
    })
  }

  const deleteTask = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks]
      updatedTasks.splice(index, 1)
      return updatedTasks
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.taskContainer}
      keyboardVerticalOffset={120}
    >
      <Stack.Screen
        options={{
          title: "TODO",
          headerBackTitleVisible: false,
          headerSearchBarOptions: {
            hideWhenScrolling: true,
            onChangeText: (event) => setSearchBarQuery(event.nativeEvent.text),
          },
        }}
      />

      <SafeAreaView edges={["bottom"]} style={{ flex: 1, paddingTop: headerHeight + 35 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <Button title="All" onPress={() => setTab("All")} />
          <Button title="Todo" onPress={() => setTab("Todo")} />
          <Button title="Finished" onPress={() => setTab("Finished")} />
        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{
            gap: 10,
            padding: 10,
          }}
          renderItem={({ item, index }) => (
            <TaskListItem task={item} onItemPressed={() => onItemPressed(index)} onDelete={() => deleteTask(index)} />
          )}
          ListFooterComponent={() => (
            <NewTaskInput onAdd={(newTodo: Task) => setTasks((currentTask) => [...currentTask, newTodo])} />
          )}
        />
      </SafeAreaView>
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
    // color: "#303137",
    flex: 1,
  },
})

export default TodoScreen
