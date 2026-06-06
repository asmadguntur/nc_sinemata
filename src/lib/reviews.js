// Minimal stub implementations for reviews functions used by MovieDetail.

export async function addReview(user, movieId, rating, comment, title, image) {
  // In a real app, this would write to a backend or Firebase.
  console.log("addReview called", {
    user,
    movieId,
    rating,
    comment,
    title,
    image,
  });
  return { success: true };
}

export async function getReviews(movieId) {
  // Return empty list by default.
  return [];
}

export function subscribeReviews(movieId, cb) {
  // No realtime updates in stub; return unsubscribe function.
  const noop = () => {};
  return noop;
}

export default { addReview, getReviews, subscribeReviews };
