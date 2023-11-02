import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getTableById } from '../../redux/tableRedux';
import { getStatus } from '../../redux/statusRedux';
import { useState } from 'react';

const EditTable = () => {
  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));
  const allStatuses = useSelector(getStatus);

  const [status, setStatus] = useState(table.status);

  if (!table) return <Navigate to='/' />;
  else
    return (
      <div className='ms-2'>
        <h2 className='fs-1'>{table.name}</h2>{' '}
        <div className='d-flex my-3'>
          <p style={{ width: '100px' }} className='my-auto'>
            <b>Status:</b>
          </p>
          <select
            style={{ width: '150px' }}
            className='ps-1'
            defaultValue={status}>
            {allStatuses.map(status => (
              <option key={status.id} value={status.name}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <div className='d-flex my-3'>
          <p style={{ width: '100px' }} className='my-auto'>
            <b>People:</b>
          </p>
          <input
            style={{ width: '30px' }}
            className='me-1 ps-1'
            defaultValue={table.peopleAmount}
          />
          /
          <input
            style={{ width: '30px' }}
            className='ms-1 ps-1'
            defaultValue={table.maxPeopleAmount}
          />
        </div>
        <div className={`d-flex my-3 `}>
          <p style={{ width: '100px' }} className='my-auto'>
            <b>Bill:</b>
          </p>
          $
          <input
            style={{ width: '40px' }}
            className='ms-1 ps-1'
            defaultValue={table.bill}
          />
        </div>
        <Button
          as={Link}
          to={`/table/${id}`}
          variant='primary'
          className='me-1'>
          Update
        </Button>
      </div>
    );
};

export default EditTable;
