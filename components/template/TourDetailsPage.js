import TourDetailsDesktop from "../module/TourDetailsDesktop"
import TourDetailsMobile from "../module/TourDetailsMobile"

function TourDetailsPage({data, isError, isPending}) {

  return (
    <section>
        <TourDetailsMobile data={data} isError={isError} isPending={isPending} />
        <TourDetailsDesktop data={data} isError={isError} isPending={isPending} />
    </section>
  )
}

export default TourDetailsPage