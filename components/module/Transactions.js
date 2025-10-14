import TransactionItem from "./TransactionItem"

function Transactions() {
  return (
    <div className="w-full rounded-[10px] overflow-hidden border-1 border-[#00000040] font-vazir mb-[95px] mt-8.5 lg:mb-[150px] lg:mt-4">
      <div className="flex justify-between bg-[#F3F3F3] pt-[9px] pb-[13px] px-3 mb-3.5">
        <h3 className="text-secondary">تاریخ و ساعت</h3>
        <h3 className="text-secondary">مبلغ (تومان)</h3>
        <h3 className="text-secondary hidden lg:block">نوع تراکنش</h3>
        <h3 className="text-secondary">شماره سفارش</h3>
      </div>
      <TransactionItem/>
      <TransactionItem/>
    </div>
  )
}

export default Transactions