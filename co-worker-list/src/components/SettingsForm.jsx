import React from 'react';
import { FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap'; 

function SettingsForm() {
    return(
        <form>
            <FormGroup
                    controlId="formBasicText">
                <ControlLabel>Фамилия</ControlLabel>
                <FormControl
                    type="text"
                    value=""
                    placeholder="Введите фамилию"
                />
            <Checkbox inline>Отображать поле</Checkbox>                             
            </FormGroup>
            <FormGroup
                    controlId="formBasicText">
                <ControlLabel>Имя</ControlLabel>
                <FormControl
                    type="text"
                    value=""
                    placeholder="Введите имя"
                />
                <Checkbox inline>Отображать поле</Checkbox>                             
            </FormGroup>
            <FormGroup
                    controlId="formBasicText">
                <ControlLabel>Отчество</ControlLabel>
                <FormControl
                    type="text"
                    value=""
                    placeholder="Введите отчество"
                />
                <Checkbox inline>Отображать поле</Checkbox>                             
            </FormGroup>
            <FormGroup
                    controlId="formBasicText">
                <ControlLabel>Дата рождения</ControlLabel>
                <FormControl
                    type="date"
                    value=""
                    // placeholder="Введите отчество"
                /> 
                <Checkbox inline>Отображать поле</Checkbox>                            
            </FormGroup>
            <FormGroup
                    controlId="formBasicText">
                <ControlLabel>Табельнйы номер</ControlLabel>
                <FormControl
                    type="text"
                    value=""
                    placeholder="Введите табельный номер"
                />
                <Checkbox inline>Отображать поле</Checkbox>                             
            </FormGroup>
            <FormGroup
                    controlId="formBasicText">
                <ControlLabel>Должность</ControlLabel>
                <FormControl
                    type="number"
                    value=""
                    placeholder="Введите табельный номер"
                />
                <Checkbox inline>Отображать поле</Checkbox>                             
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Должность</ControlLabel>
                <FormControl componentClass="select" placeholder="Выберете должность">
                    <option value="select">Доктор</option>
                    <option value="select">Дизайнер</option>
                    <option value="select">Младший разработчик</option>
                    <option value="select">Разработчик</option>                    
                    <option value="select">Страший разработчик</option>                    
                </FormControl>
                <Checkbox inline>Отображать поле</Checkbox>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Подразделение</ControlLabel>
                <FormControl componentClass="select" placeholder="Выберете подразделение">
                    <option value="select">Лаборатория</option>
                    <option value="select">Офис</option>
                    <option value="select">Цех</option>                                  
                </FormControl>
                <Checkbox inline>Отображать поле</Checkbox>
            </FormGroup>
        </form>
    );
}
export default SettingsForm;