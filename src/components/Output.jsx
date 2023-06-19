

export default function Output({ bill, tip }) {
    return(
        <div>
            You pay ${bill + tip} (${bill} + ${tip} tip)
        </div>
    )
}