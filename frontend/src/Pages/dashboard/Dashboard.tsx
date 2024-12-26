
const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard-my-info">
            <div className="dashboard-header">
            <div> 
            <p>Dashboard</p>
            </div>
            <div className="dashboard-utility-btns">
                <button>Add Expense</button>
                <button>Settle up</button>

            </div>
            </div>
        </div>
        <div className="dashboard-owe-to-friends">
            <h2>Yow owe | you are owed</h2>
        </div>
    </div>
  )
}

export default Dashboard