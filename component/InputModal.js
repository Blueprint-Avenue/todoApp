import React from "react";
import { Modal } from "react-native";
import {
	ModalAction,
	ModalActionGroup,
	ModalButton,
	ModalContainer,
	ModalIcon,
	StyledInput,
	ModalView,
	HeaderTitle,
	colors,
} from "../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";

export default function InputModal({
	modalVisible,
	setMotalVisible,
	todoInputValue,
	setTodoInputValue,
	handleAddTodo,
	todos,
	setTodoToBeEdited,
	todoToBeEdited,
	handleEditTodo,
}) {
	const handleCloseModal = () => {
		setMotalVisible(false);
		setTodoInputValue("");
		setTodoToBeEdited(null);
	};

	const handleSubmit = () => {
		if (!todoToBeEdited) {
			handleAddTodo({
				title: todoInputValue,
				data: new Date().toUTCString(),
				key: `${
					(todos[todos.length - 1] &&
						parseInt(todos[todos.length - 1].key) + 1) ||
					1
				}`,
			});
		} else {
			handleEditTodo({
				title: todoInputValue,
				date: todoToBeEdited.date,
				key: todoToBeEdited.key,
			});
		}

		setTodoInputValue("");
	};

	return (
		<>
			<ModalButton
				onPress={() => {
					setMotalVisible(true);
				}}
			>
				<AntDesign name="plus" size={30} color={colors.secondary} />
			</ModalButton>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={handleCloseModal}
			>
				<ModalContainer>
					<ModalView>
						<ModalIcon>
							<HeaderTitle>Todos</HeaderTitle>
							<AntDesign name="edit" size={30} color={colors.tertiary} />
						</ModalIcon>
						<StyledInput
							placeholder="Add a todo"
							placeholderTextColor={colors.alternative}
							selectionColor={colors.secondary}
							autoFocus={true}
							onChangeText={(text) => setTodoInputValue(text)}
							value={todoInputValue}
							onSubmitEditing={handleSubmit}
						/>
						<ModalActionGroup>
							<ModalAction color={colors.primary} onPress={handleCloseModal}>
								<AntDesign name="close" size={30} color={colors.tertiary} />
							</ModalAction>
							<ModalAction color={colors.tertiary} onPress={handleSubmit}>
								<AntDesign name="check" size={30} color={colors.secondary} />
							</ModalAction>
						</ModalActionGroup>
					</ModalView>
				</ModalContainer>
			</Modal>
		</>
	);
}
