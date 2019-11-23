import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("qwer");

  const goalInputHandler = text => {
    setEnteredGoal(text);
  };

  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          style={styles.button}
          title="ADD"
          onPress={props.onAddGoal.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  
  },
  input: {
    width: "100%",
    borderColor: "red",
    borderWidth: 1,   
    marginBottom: 10,   
    padding: 10,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    width: "300px",
    backgroundColor: "#ef6c00",
  }
});

export default GoalInput;
