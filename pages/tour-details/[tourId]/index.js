import TourDetailsPage from "@/components/template/TourDetailsPage";
import { getTourById, getTours } from "@/services/toursApi";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

function TourDetails() {
  const router = useRouter();
  const { tourId } = router.query;

  const {data, isError, isPending} = useQuery({
    queryKey: ["tour", tourId],
    queryFn: () => getTourById(tourId),
  })

  if (isError) {
    if (typeof window !== "undefined") {
      router.replace("/404");
    }
    return null;
  }
  
  return (
    <>
      <TourDetailsPage data={data} isError={isError} isPending={isPending} />
    </>
  );
}

export default TourDetails;

// export async function getStaticPaths() {
//   const tours = await getTours({});

//   const paths =
//     tours?.data?.data?.map((tour) => ({
//       params: { tourId: tour.id.toString() },
//     })) || [];

//   return { paths, fallback: 'blocking' }; 
// }

// export async function getStaticProps({ params }) {
//   const { tourId } = params;

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["tour", tourId],
//     queryFn: () => getTourById(tourId),
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       id: tourId,
//     },
//     revalidate: 600, // هر 10 دقیقه رفرش
//   };
// }