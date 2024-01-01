// Write your code here
import './index.css'

const DenominationItem = props => {
  const {listdetails, decreasetotalamount} = props
  const {value} = listdetails

  const Decrease = () => {
    decreasetotalamount(value)
  }
  return (
    <button type="button" onClick={Decrease} className="button">
      {value}
    </button>
  )
}

export default DenominationItem
