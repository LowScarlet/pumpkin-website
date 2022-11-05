/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from '../../Style.module.css'

export default function Main(props: any) {
  const { isDark, fetchingLoading, memberData, isSelf, rank_list, benefits_list } = props
  if (fetchingLoading || !memberData) {
    return (
      <div className={`shadow card placeholder-glow ${isDark ? 'bg-dark' : ''}`}>
        <div className={`card-body ${isDark ? 'text-light' : 'text-dark'}`}>
          <h5 className="card-title placeholder col-6"></h5>
          <div className={`${isDark ? 'bg-black' : 'bg-light'} text-center py-5`}></div>
        </div>
      </div>
    )
  }
  return (<>
    <div className={`${styles['member-banner']} bg-dark text-center py-2`} style={
      {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.9)), url(/static/images/rank/${memberData.profile.rank}_bg.${rank_list[memberData.profile.rank].media_type[1]})`
      }
    }>
      <img src={`/static/images/rank/${memberData.profile.rank}.${rank_list[memberData.profile.rank].media_type[0]}`} width={80} alt="" />
    </div>
    <div className={`accordion accordion-flush border ${isDark ? 'border-black' : ''}`} id="account-rank-accordion-flush">
      <div className={`accordion-item ${isDark ? 'bg-dark' : ''}`}>
        <h2 className="accordion-header" id="account-rank-accordion-flush-head-1">
          <div className={`${isDark ? 'bg-dark' : ''}`}>
            <button className={`${isDark ? 'text-bg-dark' : ''} accordion-button collapsed text-capitalize`} type="button" data-bs-toggle="collapse" data-bs-target="#account-rank-accordion-flush-collapse-1" aria-expanded="false" aria-controls="account-rank-accordion-flush-collapse-1">
              <img src={`/static/images/rank/${memberData.profile.rank}.${rank_list[memberData.profile.rank].media_type[0]}`} width={32} alt="" />
              <span className="px-2">{rank_list[memberData.profile.rank].displayname} rank</span>
            </button>
          </div>
        </h2>
        <div id="account-rank-accordion-flush-collapse-1" className={`${isDark ? 'text-light' : ''} accordion-collapse collapse`} aria-labelledby="account-rank-accordion-flush-head-1" data-bs-parent="#account-rank-accordion-flush">
          <div className="accordion-body">
            <h4 className="my-0 fw-normal"><i className="pe-2 bi bi-box-seam"></i>Benefits</h4>
            <div className="text-muted">
              {
                !rank_list[memberData.profile.rank].all_benefits.benefits_feature.length && !rank_list[memberData.profile.rank].all_benefits.benefits_stats.length ? (
                  <ul className="list-unstyled mt-3 mb-4">
                    <li className="text-center">No benefits here :(</li>
                  </ul>
                ) : (
                  <ul className="mt-3 mb-4">
                    {rank_list[memberData.profile.rank].all_benefits.benefits_feature.map((key: any) => (<>
                      <li key={key}>{benefits_list[key].aliases}</li>
                    </>))}
                  </ul>
                )
              }

            </div>
            <button type="button" className="w-100 btn btn-sm btn-lg btn-pumpkin text-light">
              Upgrade Rank
            </button>
          </div>
        </div>
      </div>
    </div>
  </>)
}