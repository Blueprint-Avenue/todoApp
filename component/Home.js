import React, { useState } from "react";
import { Text } from "react-native";
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {
	const initialTodos = [
		{
			title: "Get Boxes For Move",
			date: "Sun, 01 May 2022 10:00",
			key: "1",
		},
		{
			title: "Get RV For Move",
			date: "Sun, 01 May 2022 10:00",
			key: "2",
		},
		{
			title: "Pack Boxes For Move",
			date: "Sun, 01 May 2022 10:00",
			key: "3",
		},
	];

	const [todos, setTodos] = useState(initialTodos);

	const handleClearTodos = () => {
		setTodos([]);
	};

	const [modalVisible, setMotalVisible] = useState(false);
	const [todoInputValue, setTodoInputValue] = useState();

	const handleAddTodo = (todo) => {
		const newTodos = [...todos, todo];
		setTodos(newTodos);
		setMotalVisible(false);
	};

	const [todoToBeEdited, setTodoToBeEdited] = useState(null);

	const handleTriggerEdit = (item) => {
		setTodoToBeEdited(item);
		setMotalVisible(true);
		setTodoInputValue(item.title);
	};

	const handleEditTodo = (editedTodo) => {
		const newTodos = [...todos];
		const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
		newTodos.splice(todoIndex, 1, editedTodo);
		setTodos(newTodos);
		setTodoToBeEdited(null);
		setMotalVisible(false);
	};

	return (
		<>
			<Header handleClearTodos={handleClearTodos} />
			<ListItems
				todos={todos}
				setTodos={setTodos}
				handleTriggerEdit={handleTriggerEdit}
			/>
			<InputModal
				modalVisible={modalVisible}
				setMotalVisible={setMotalVisible}
				todoInputValue={todoInputValue}
				setTodoInputValue={setTodoInputValue}
				handleAddTodo={handleAddTodo}
				todos={todos}
				todoToBeEdited={todoToBeEdited}
				setTodoToBeEdited={setTodoToBeEdited}
				handleEditTodo={handleEditTodo}
			/>
		</>
	);
};

export default Home;
