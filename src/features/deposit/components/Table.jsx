import moment from 'moment'
import React from 'react'

const Table = ({ data }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Amount</th>
          <th>Code</th>
          <th>Status</th>
          <th>User</th>
          <th>Merchant</th>
          <th>Merchant Order ID</th>
          <th>Paying UUID</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((l, k) => {
            return (
              <tr key={k}>
                <td>{l.id}</td>
                <td>${l.amount.toFixed(2)}</td>
                <td>{l.code}</td>
                <td>{l.status}</td>
                <td>{l.user}</td>
                <td>{l.merchant}</td>
                <td>{l.merchantOrderId}</td>
                <td>{l.payingUUID}</td>
                <td>{moment(l.lastUpdated).format("D MMM YYYY")}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
