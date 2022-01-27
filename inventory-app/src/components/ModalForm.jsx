import { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
const ModalForm = ({onAdding, onClosingModal}) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        const prop_name = e.target.name;
        const prop_value = e.target.value;
        setInputs( values => ({...values, [prop_name] : prop_value}));
    }

    const postItem = (e) => {
        e.preventDefault();
        onAdding(inputs.Title, inputs.imageUrl, inputs.quantity);
    }
    return(
        <Modal isOpen>
        <ModalHeader className="form-heading">Add your item in a cart</ModalHeader>
        <ModalBody>
            <form onSubmit = {postItem}>
                <div className="inputs">
                    <label>Enter a title
                        <input type="text" name="Title" value={inputs.Title || ""} onChange={handleChange}/>
                    </label>
                    <label>Enter a image url
                        <input type="text" name="imageUrl" value={inputs.imageUrl || ""} onChange={handleChange} />
                    </label>
                    <label>Quantity
                        <input type="text" name="quantity" value={inputs.quantity || ""} onChange={handleChange}/>
                    </label>
                </div>
                <div className="new-item-parent">
                    <button className="new-item">Add</button>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary"
                onClick={onClosingModal}
            >
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
    )
}
export default ModalForm;