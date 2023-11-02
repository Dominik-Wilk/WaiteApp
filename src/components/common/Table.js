import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Table = props => {
  return (
    <Card
      style={{ width: '100%' }}
      className='border-top-0 border-start-0 border-end-0'>
      <Card.Body className='d-flex'>
        <Card.Title className='my-auto'>{props.name}</Card.Title>
        <Card.Text className=' d-flex mx-2 my-auto'>
          <b className='me-1'>Status:</b>
          {props.status}
        </Card.Text>
        <Button
          as={Link}
          to={`/table/${props.id}`}
          variant='primary'
          className='ms-auto'>
          Show more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Table;
