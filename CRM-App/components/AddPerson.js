import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { TextInput } from "@react-native-material/core";
import * as actions from "@/src/actions";

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  fieldStyles: {
    height: 70,
    color: "#000000",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#4db6ac",
  },
});

class AddPerson extends Component {
  onAddPress() {
    const { firstName, lastName, email, phone, notes, project, company } =
      this.props;

    this.props.createNewContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      notes,
    });

    this.props.navigation.navigate("People");
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new contact</Text>
          <TextInput
            label="First name..."
            style={styles.fieldStyles}
            value={this.props.firstName}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "firstName", value })
            }
          />
          <TextInput
            label="Last name..."
            style={styles.fieldStyles}
            value={this.props.lastName}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "lastName", value })
            }
          />
          <TextInput
            label="Phone Number..."
            style={styles.fieldStyles}
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "phone", value })
            }
          />
          <TextInput
            label="Email..."
            style={styles.fieldStyles}
            value={this.props.email}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "email", value })
            }
          />
          <TextInput
            label="Company..."
            style={styles.fieldStyles}
            value={this.props.company}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "company", value })
            }
          />
          <TextInput
            label="Project..."
            style={styles.fieldStyles}
            value={this.props.project}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "project", value })
            }
          />
          <TextInput
            label="Notes..."
            style={styles.fieldStyles}
            value={this.props.notes}
            onChangeText={(value) =>
              this.props.formUpdate({ prop: "notes", value })
            }
          />
          <View style={styles.addButton}>
            <Button
              title="Add"
              color="#ffffff"
              onPress={this.onAddPress.bind(this)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstName, lastName, email, phone, notes, project, company } = state;
  return { firstName, lastName, email, phone, notes, project, company };
};

export default connect(mapStateToProps, actions)(AddPerson);
