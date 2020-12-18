export const adaptHotelServerToClient = (hotel) => {
  const newHotel = {
    ...hotel,
    host: {
      ...hotel.host,
      avatarUrl: hotel.host.avatar_url,
      isPro: hotel.host.is_pro,
    },
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    maxAdults: hotel.max_adults,
    previewImage: hotel.preview_image,
  };

  delete newHotel.is_favorite;
  delete newHotel.is_premium;
  delete newHotel.preview_image;
  delete newHotel.max_adults;
  delete newHotel.host.avatar_url;
  delete newHotel.host.is_pro;

  return newHotel;
};

export const adaptReviewServerToClient = (review) => {
  const newReview = {
    ...review,
    date: new Date(review.date),
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete newReview.user.avatar_url;
  delete newReview.user.is_pro;

  return newReview;
};

export const adaptUserInfoServerToClient = (info) => {
  const newInfo = {
    ...info,
    avatarURL: info.avatar_url,
    isPro: info.is_pro,
  };

  delete info.avatar_url;
  delete info.is_pro;

  return newInfo;
};
