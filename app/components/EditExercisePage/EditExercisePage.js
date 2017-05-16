/**
 * Page for editing a particular exercise.
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import styles from './EditExercisePageStyle';

class EditExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      numSets: null,
      numReps: null,
      increment: null,
      timeToIncrement: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{}}
          placeholder="Exercise name"
          onChangeText={(text) => this.setState({ name: text })}
        />

        <TextInput
          style={{}}
          placeholder="Sets"
          onChangeText={(text) => this.setState({ numSets: text })}
        />

        <TextInput
          style={{}}
          placeholder="Reps"
          onChangeText={(text) => this.setState({ numReps: text })}
        />

        <TextInput
          style={{}}
          placeholder="Weight increase"
          onChangeText={(text) => this.setState({ increment: text })}
        />

        <TextInput
          style={{}}
          placeholder="Time to increment"
          onChangeText={(text) => this.setState({ timeToIncrement: text })}
        />
      </View>
    )
  }
}

export default EditExercisePage
