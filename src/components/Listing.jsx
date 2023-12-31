import IncomeList from "./IncomeLIst";
import ExpenseList from "./ExpenseList";

const Listing = () => {
  return (
    <div className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
      <IncomeList/>
      <ExpenseList/>
    </div>
  );
};

export default Listing;