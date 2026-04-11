import '../styles/Dashboard.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
    return (
         <div className="col-md-12" style={{marginTop:"20px"}}>
          <div className="topbar d-flex justify-content-between align-items-center mb-4" style={{marginLeft:"190px"}}>
            <input className="form-control w-25 padding-left =20" placeholder="Search" />
            <div>
              <i className="bi bi-bell fs-4 me-3"></i>
              <i className="bi bi-gear fs-4 me-3"></i>
              <i className="bi bi-envelope fs-4"></i>
            </div>
          </div>
        </div>
    )
}

export default Navbar;