function TransactionItem() {
  return (
    <div className="flex justify-between text-secondary  px-3 pb-7">
      <span className="max-sm:text-[11px] w-1/3 text-[14px]">1402/10/12 - 14:24</span>
      <span className="max-sm:text-[14px] w-1/3 text-center ">12,000,000</span>
      <span className="max-sm:text-[14px] w-1/3 text-center hidden lg:block">ثبت نام در تور گردشگری</span>
      <span className="max-sm:text-[14px] w-1/3 text-left">12054902</span>
    </div>
  );
}

export default TransactionItem;
