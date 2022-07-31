import React from 'react'

export default function SinhVien() {
  return (
    <div className="card p-0 mt-3">
          <div className="card-header text-white bg-dark font-weight-bold">Danh Sách Sinh Viên</div>
          <div className="row mt-4 px-3 ">
            <div className="col-4">
              <div className="form-group mb-0">
                <input
                  type="text"
                  placeholder="Search by full name..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ và tên</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-light'>
                  <td>1</td>
                  <td>man.nguyen</td>
                  <td>Man Ng</td>
                  <td>man.nguyen@gmail.com</td>
                  <td>085512123123.</td>
                  <td>Client</td>
                  <td>
                    <button className="btn btn-info mr-2">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>khai.tran</td>
                  <td>Khai Tran</td>
                  <td>khai.tran@gmail.com</td>
                  <td>085512456456</td>
                  <td>Admin</td>
                  <td>
                    <button className="btn btn-info mr-2">EDIT</button>
                    <button className="btn btn-danger">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  )
}
