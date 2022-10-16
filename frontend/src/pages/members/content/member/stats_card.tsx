/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import millify from 'millify'

export default function Main(props: any) {
  const {fetchingLoading, memberData} = props

  if (fetchingLoading || !memberData) {
    return (
      <div className="shadow card">
        <div className="card-body text-center text-dark">
          <div className="row">
            <div className="col-4">
              <div className="border-bottom border-5 border-primary">
                <h5 className="text-muted mt-1 mb-2 fw-normal placeholder col-6"></h5>
                <h2 className="mb-0 fw-bold"><span className='placeholder col-3' /></h2>
              </div>
            </div>
            <div className="col-4">
              <div className="border-bottom border-5 border-success">
                <h5 className="text-muted mt-1 mb-2 fw-normal placeholder col-6"></h5>
                <h2 className="mb-0 fw-bold"><span className='placeholder col-3' /></h2>
              </div>
            </div>
            <div className="col-4">
              <div className="border-bottom border-5 border-warning">
                <h5 className="text-muted mt-1 mb-2 fw-normal placeholder col-6"></h5>
                <h2 className="mb-0 fw-bold"><span className='placeholder col-3' /></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="shadow card">
      <div className="card-body text-center text-dark">
        <div className="row">
          <div className="col-4 px-sm-2 px-0">
            <div className="border-bottom border-5 border-success">
              <h5 className="text-muted mt-1 mb-2 fw-normal"><i className="pe-2 bi bi-eye-fill"></i>Views</h5>
              <h2 className="mb-0 fw-bold">{millify(memberData.profile.views)}</h2>
            </div>
          </div>
          <div className="col-4 px-sm-2 px-0">
            <div className="border-bottom border-5 border-pumpkin">
              <h5 className="text-muted mt-1 mb-2 fw-normal"><i className="pe-2 bi bi-trophy-fill"></i>Trophy</h5>
              <h2 className="mb-0 fw-bold">{millify(0)}</h2>
            </div>
          </div>
          <div className="col-4 px-sm-2 px-0">
            <div className="border-bottom border-5 border-warning">
              <h5 className="text-muted mt-1 mb-2 fw-normal"><i className="pe-2 bi bi-gift-fill"></i>Gift</h5>
              <h2 className="mb-0 fw-bold">{millify(0)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}