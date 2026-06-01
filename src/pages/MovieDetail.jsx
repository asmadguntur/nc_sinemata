import { useParams } from "react-router";
import Footer from "../components/Footer";
import HeadingContent from "../components/MovieDetails/HeadingContent";
import MovieDescription from "../components/MovieDetails/MovieDescription";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "../store/authStore";
import { addReview, getReviews, subscribeReviews } from "../lib/reviews";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export default function MovieDetail() {
  const { id } = useParams();
  const { user } = useAuth((state) => state);

  const [movieDetails, setMovieDetails] = useState({
    title: "",
    rating: 0,
    year_released: "",
    duration: "",
    genre: "",
    age_rating: "",
    image_path: "",
    image_backdrop: "",
    synopsis: "",
    casts: [],
    crews: [],
  });

  const [reviews, setReviews] = useState([]);

  const getMovieDetails = (movieId) => {
    // Fetch movie details from an API using the movieId
    fetch(`${BASE_URL}/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Movie Details:", data);
        setMovieDetails({
          title: data.title,
          rating: data.vote_average,
          year_released: data.release_date
            ? new Date(data.release_date).getFullYear()
            : "",
          duration: `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`,
          genre: data.genres.map((genre) => genre.name).join(", "),
          age_rating: data.adult ? "R" : "PG-13",
          image_path: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          image_backdrop: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
          synopsis: data.overview,
        });
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  const [review, setReview] = useState({
    rating: 0,
    movieId: id,
    userId: null,
    userName: "",
    comment: "",
    createdAt: null,
  });

  const ratingHandler = (e) => {
    setReview({
      ...review,
      rating: e.target.value,
    });
  };

  const submitNewReview = async (e) => {
    try {
      e.preventDefault();

      const finalData = {
        ...review,
        userId: user.uid,
        userName: user.displayName,
      };
      console.log(finalData);

      await addReview(
        user,
        finalData.movieId,
        finalData.rating,
        finalData.comment,
        movieDetails.title,
        movieDetails.image_path,
      );

      setReview({
        rating: 0,
        movieId: id,
        userId: null,
        userName: "",
        comment: "",
        createdAt: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const res = await getReviews(id);
      setReviews(res);
    };

    getMovieReviews();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const unsubscribe = subscribeReviews(id, setReviews);

    return () => unsubscribe();
  }, [id]);

  return (
    <div className="page min-h-screen">
      <Navbar />

      <div className="content font-inter pb-20">
        <HeadingContent
          id={id}
          image_path={movieDetails.image_path}
          backdrop_path={movieDetails.image_backdrop}
          title={movieDetails.title}
          rating={movieDetails.rating}
          release_date={movieDetails.year_released}
          duration={movieDetails.duration}
          genre={movieDetails.genre}
          age_rating={movieDetails.age_rating}
        />

        {/* Movie Description */}
        <MovieDescription
          synopsis={movieDetails.synopsis}
          casts={movieDetails.casts}
          crews={movieDetails.crews}
        />

        {/* Reviews */}
        <div className="reviews-section mt-10 w-full max-w-7xl mx-auto px-4">
          <h2 className="text-2xl mb-4.5 font-bebas">REVIEWS</h2>

          {/* Add Review Form */}
          <div className="add-review mb-6 font-inter">
            <h3 className="text-xl mb-2 font-semibold">Add Your Review</h3>
            <form className="flex flex-col gap-y-4" onSubmit={submitNewReview}>
              {/* Rating */}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                  value={1}
                  onClick={ratingHandler}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  value={2}
                  onClick={ratingHandler}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                  value={3}
                  onClick={ratingHandler}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                  value={4}
                  onClick={ratingHandler}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                  value={5}
                  onClick={ratingHandler}
                />
              </div>

              <textarea
                className="w-full p-3 border border-[#2A2F37] rounded-lg bg-[#1C2127] text-white"
                rows="4"
                placeholder="Write your review here..."
                onChange={(e) => {
                  setReview({
                    ...review,
                    comment: e.target.value,
                  });
                }}
              >
                {review.value}
              </textarea>
              <button
                type="submit"
                className="self-end px-4 py-2 bg-orange-500 cursor-pointer text-white rounded-lg hover:bg-[#FF8080]"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="reviews-list">
            {reviews.length ? (
              reviews.map((movie) => (
                <CommentItem
                  key={movie.id}
                  userName={movie.userName}
                  rating={movie.rating}
                  comment={movie.comment}
                />
              ))
            ) : (
              <p>No reviews</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const CommentItem = ({ userName, rating, comment }) => {
  return (
    <div className="review-item mb-6 p-4 border border-[#2A2F37] rounded-lg bg-[#1C2127]">
      {/* Rating and Name */}
      <div className="rating-name flex w-full justify-between max-w-2xs">
        <div className="name">
          <span className="text-gray-500">{userName}</span>
        </div>
        <div className="rating mb-2 text-2xl text-orange-500">
          {`★`.repeat(rating) + `☆`.repeat(5 - rating)}
        </div>
      </div>

      {/* Review Content */}
      <p className="text-white text-sm leading-relaxed mt-2 max-w-3xl">
        {comment}
      </p>
    </div>
  );
};
