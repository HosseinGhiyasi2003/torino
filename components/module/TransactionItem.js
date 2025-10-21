import { formatJalaliDate, toPersianDigits } from "@/utils/helper";

function TransactionItem({TransactionDetail}) {
  let createdDate = null;


  if(TransactionDetail) {
    const createdAt = new Date(TransactionDetail?.createdAt);
    createdDate = formatJalaliDate(createdAt);
  }
  
  
  return (
    <div className="flex justify-between items-center text-secondary  px-3 pb-7">
      <span className="max-sm:text-[11px] w-1/3 text-[14px]">{toPersianDigits(createdDate.year)}/{createdDate.month}/{toPersianDigits(createdDate.day)} - {toPersianDigits(createdDate.hour)}:{toPersianDigits(createdDate.minute)}</span>
      <span className="max-sm:text-[14px] w-1/3 text-center ">{toPersianDigits(TransactionDetail.amount.toLocaleString())}</span>
      <span className="max-sm:text-[14px] w-1/3 text-center hidden lg:block">{TransactionDetail.type == 'Purchase' ? 'خریداری شده': "درحال خرید"}</span>
      <span className="max-sm:text-[12px] text-[14px] w-1/3 text-left">{TransactionDetail.id}</span>
    </div>
  );
}

export default TransactionItem;
