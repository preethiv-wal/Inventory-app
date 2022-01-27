import {Col, Card, CardImg, CardBody, CardTitle, CardText,Button} from 'reactstrap';
import {useState} from 'react';
import UpdateForm from './UpdateForm';
import './style.css';
const ItemCard = ({id, name, quantity, imageUrl,onDeleting, updateItem}) => {

    const [updateFormOpen, setUpdateFormOpen] = useState(false);

    const deleteItem = () => {
        onDeleting(id);
    }

    const EditingItem = () =>{
        setUpdateFormOpen(true);
    }
    const updatingItem = (title, quantity) => {
        updateItem(id,title, quantity);
        setUpdateFormOpen(false);
    }
    const closeModal = () => {
        setUpdateFormOpen(false);
    }
    return(
        <Col xs="12" md="4" lg="3" sm="6" >
            <Card className='item-card'>
                <CardImg
                    className="item-image"
                    alt={name}
                    src={imageUrl}
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h4" className="card-heading">
                        {name}
                    </CardTitle>
                    <CardText className="card-text">
                        Stock Available: {quantity}
                    </CardText>
                    <div className="card-buttons">
                        <Button onClick = {EditingItem} className="card-button" style ={{marginRight:20}}>Update</Button>
                        <Button onClick = {deleteItem} className="card-button">Delete</Button>
                    </div>
                </CardBody>
            </Card>
            {updateFormOpen && (
                <UpdateForm name ={name} quantity = {quantity} onUpdate={updatingItem} onClosingModal={closeModal}/>
            )}
        </Col>
    );
}
export default ItemCard;