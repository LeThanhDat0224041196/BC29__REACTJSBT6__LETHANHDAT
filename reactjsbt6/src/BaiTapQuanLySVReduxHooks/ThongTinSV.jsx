import React from 'react'

export default function ThongTinSV() {
  return (
    <div className="card p-0">
          <div className="card-header bg-dark text-white font-weight-bold">
            Thông Tin Sinh Viên
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>ID</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Họ và tên</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer text-muted">
            <button className="btn btn-warning mr-2">SAVE</button>
            <button className="btn btn-outline-dark">RESET</button>
          </div>
        </div>
  )
}
