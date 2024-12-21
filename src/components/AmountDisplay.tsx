import { formatcurrency } from "../helpers/indext"

type amountDisplayProps = {
    label? : string
    amount : number
}

export default function AmountDisplay( {label, amount} : amountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-black">{formatcurrency(amount)}</span>
    </p>
  )
}
