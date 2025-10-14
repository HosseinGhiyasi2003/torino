import AccountInfo from "./AccountInfo"
import CreditCardInfo from "./CreditCardInfo"
import PersonalInfo from "./PersonalInfo"

function Profile() {
  return (
    <div className="mt-[23px] lg:w-full lg:mt-4">
      <AccountInfo/>
      <PersonalInfo/>
      <CreditCardInfo/>
    </div>
  )
}

export default Profile