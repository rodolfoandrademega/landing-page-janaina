export type TravelMode = "driving" | "walking" | "transit";

export function directionsUrl(destination: string, origin: string, mode: TravelMode) {
  const params = new URLSearchParams({ api: "1", destination, travelmode: mode });
  if (origin) params.set("origin", origin);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
