import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ADD_DATA, REMOVE_DATA, UPDATE_DATA } from '/reducer/reducer.js'; 

const Todo = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.todoreducers.User_data);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddData = () => {
        if (inputValue.trim()) {
            dispatch({ type: ADD_DATA, payload: inputValue });
            setInputValue('');
        }
    };

    const handleRemoveData = (index) => {
        dispatch({ type: REMOVE_DATA, payload: { id: index } });
    };

    const handleEditData = (index) => {
        setInputValue(userData[index]);
        setEditIndex(index);
    };

    const handleUpdateData = () => {
        if (inputValue.trim()) {
            dispatch({ type: UPDATE_DATA, payload: inputValue, d: editIndex });
            setInputValue('');
            setEditIndex(-1);
        }
    };

    const handleLogin = () => {
        console.log('Попытка входа'); // Логируем попытку входа
        try {
            // Здесь можно добавить логику аутентификации
            console.log('Вход выполнен');
        } catch (error) {
            console.error('Ошибка при входе:', error);
        }
    };

    return (
        <div>
            <TextField
                label="Введите задачу"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={editIndex === -1 ? handleAddData : handleUpdateData}>
                {editIndex === -1 ? 'Добавить' : 'Обновить'}
            </Button>
            <Button onClick={handleLogin} variant="contained" color="primary">
                Войти
            </Button>
            <List>
                {userData.map((task, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={task} />
                        <IconButton onClick={() => handleEditData(index)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveData(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Todo;