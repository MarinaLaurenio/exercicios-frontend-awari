/* eslint-disable react/prop-types */
import Data from "../Data/Data";
import "./Card.css"


export default function Card({ data = [] }) {
  const dadosMap = data.map((data)=> {
    return (
      <Data
      key={data.id}
      data = {data}
      />
    )
  })

  return (
    <div className="card">
      {dadosMap}
    </div>
  );
}
