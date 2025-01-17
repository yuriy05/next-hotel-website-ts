import { getBookedDatesByCabinId, getCabin } from "@/app/lib/data-service";

export async function GET(request: Request, { params }: { params: any }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin could not be found" });
  }
}
