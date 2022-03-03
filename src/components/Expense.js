const Expense = ({ expense }) => {
  return (
    <div key={expense._id}>
      <h1>{expense.title}</h1>
    </div>
  )
}

export default Expense 