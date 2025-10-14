import SideMenu from "../module/SideMenu"

function ProfileWrapper({children, menuState, setMenuState}) {
  

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-x-8">
          <SideMenu menuState={menuState} setMenuState={setMenuState} />
          {children}
        </div>
      </div>
    </section>
  )
}

export default ProfileWrapper