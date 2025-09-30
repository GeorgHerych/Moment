/**
 * Calculates the distance between two geographic points using the Haversine formula.
 * @param params Object containing the latitude and longitude of both points in decimal degrees.
 * @returns Distance in kilometers between the two points.
 */
export function haversineDistance(params: {
  lat1: number;
  lon1: number;
  lat2: number;
  lon2: number;
}): number {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;

  const dLat = toRad(params.lat2 - params.lat1);
  const dLon = toRad(params.lon2 - params.lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(params.lat1)) * Math.cos(toRad(params.lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(earthRadiusKm * c * 100) / 100;
}
