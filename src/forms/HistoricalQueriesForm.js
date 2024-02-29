const HistoricalQueriesForm = ({_id, origin, destination, distanceMi, distanceKm}) => {
    return (
<div key={_id} className="table-body">
              <div className="table-body-row">
                <p className="p-b-text">{origin}</p>
              </div>
              <div className="table-body-row">
                <p className="p-b-text">{destination}</p>
              </div>
              <div className="table-body-row">
                <p className="p-b-text">{distanceMi + " mi"}</p>
              </div>
              <div className="table-body-row">
                <p className="p-b-text">{distanceKm + " km"}</p>
              </div>
            </div>
    )
}

export default HistoricalQueriesForm;