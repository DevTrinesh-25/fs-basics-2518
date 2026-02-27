import { useSelector, useDispatch } from 'react-redux';
import { deleteVendor } from './slices/vendor.slice';

function Vendors() {
    const dispatch = useDispatch();
    
    const vendors = useSelector((state: any) => {
        return state.vendors;
    });

    console.log(vendors);
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Vendors</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No</th>
                        <th scope="col">Category</th>
                        <th scope="col">Address</th>
                        <th scope="col">Is Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.data.map((vendor: any, index: number) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.mobileNo}</td>
                        <td>{vendor.category}</td>
                        <td>{vendor.address}</td>
                        <td>{vendor.isActive ? 'Yes' : 'No'}</td>
                        <td>
                            <i className="fa-solid fa-trash text-danger" onClick={() => dispatch(deleteVendor(vendor.vendorId))}></i>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Vendors;