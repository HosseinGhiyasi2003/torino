import { useQuery } from "@tanstack/react-query"
import TransactionItem from "./TransactionItem"
import { getTransactions } from "@/services/toursApi"

function Transactions() {

  const {data, isPending, isError} = useQuery({
    queryKey: ['userTransactions'],
    queryFn: () => getTransactions(),
    retry: false
  })

   if (isError) {
    return (
      <div className="container">
        <div className="mt-[23px] mb-12 w-full lg:border-1 border-[#00000033] lg:mb-[150px] lg:rounded-[10px] lg:p-[13px] lg:mt-4">
          <h3 className="text-center lg:text-2xl text-red-500">مشکلی در دریافت تراکنش ها به وجود اومده</h3>
        </div>
      </div>
    );
  }
   if (isPending) {
    return (
      <div className="container">
        <div className="mt-[23px] mb-12 w-full lg:border-1 border-[#00000033] lg:mb-[150px] lg:rounded-[10px] lg:p-[13px] lg:mt-4">
          <h3 className="text-center lg:text-2xl">درحال دریافت تراکنش ها</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-[10px] overflow-hidden border-1 border-[#00000040] font-vazir mb-[95px] mt-8.5 lg:mb-[150px] lg:mt-4">
      <div className="flex justify-between bg-[#F3F3F3] pt-[9px] pb-[13px] px-3 mb-3.5">
        <h3 className="text-secondary">تاریخ و ساعت</h3>
        <h3 className="text-secondary">مبلغ (تومان)</h3>
        <h3 className="text-secondary hidden lg:block">نوع تراکنش</h3>
        <h3 className="text-secondary">شماره سفارش</h3>
      </div>
      {data?.data?.length !== 0 ? (
        data?.data.map((TransactionDetail) => (
          <TransactionItem key={TransactionDetail.id} TransactionDetail={TransactionDetail} isPending={isPending} />
        ))
      ) : (
        <h3 className="text-center lg:text-2xl py-3">هیچ تراکنشی وجود ندارد</h3>
      )}
    </div>
  )
}

export default Transactions